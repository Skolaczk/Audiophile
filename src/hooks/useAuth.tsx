import React, { ChangeEvent, FC, FormEvent, useContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from '../firebase/Firebase';
import { useError } from './useError';

type ChildrenType = {
  children: React.ReactNode;
};

type AuthContextType = {
  currentUser: unknown | null;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSignIn: (e: FormEvent) => void;
  handleSignUp: (e: FormEvent) => void;
  handleSignOut: () => void;
};

export const AuthContext = React.createContext<AuthContextType>(null!);

export const AuthProvider: FC<ChildrenType> = ({ children }) => {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState<unknown | null>(null);
  const { catchError } = useError();
  const [inputsValue, setInputsValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputsValue;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputsValue({
      ...inputsValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignOut = () => auth.signOut();

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).catch(({ code }) => catchError(code));
  };

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).catch(({ code }) => catchError(code));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem('token', user.email as string);
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
        handleInputChange,
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
