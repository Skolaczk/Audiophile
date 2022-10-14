import React, { FC, useContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  User,
} from 'firebase/auth';
import { app } from '../firebase/Firebase';
import { useError } from './useError';

type ChildrenType = {
  children: React.ReactNode;
};

type FormValuesType = {
  name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  currentUser: User | null;
  handleSignIn: (values: FormValuesType) => void;
  handleSignUp: (values: FormValuesType) => void;
  handleSignOut: () => void;
};

export const AuthContext = React.createContext<AuthContextType>(null!);

export const AuthProvider: FC<ChildrenType> = ({ children }) => {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState<User | null>(null!);
  const { catchError } = useError();

  const handleSignOut = () => auth.signOut();

  const handleSignUp = ({ name, email, password }: FormValuesType) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateProfile(user, {
          displayName: name,
        });
      })
      .catch(({ code }) => catchError(code));
  };

  const handleSignIn = ({ email, password }: FormValuesType) => {
    signInWithEmailAndPassword(auth, email, password).catch(({ code }) => catchError(code));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('token', user.uid);
      } else {
        setCurrentUser(null);
        localStorage.removeItem('token');
      }
    });
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        handleSignIn,
        handleSignUp,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
