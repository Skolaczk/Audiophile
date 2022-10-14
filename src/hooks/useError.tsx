import { FC, createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ChildrenType = {
  children: React.ReactNode;
};

type ErrorContextType = {
  error: string;
  catchError: (errorCode: string) => void;
};

const ErrorContext = createContext<ErrorContextType>(null!);

export const ErrorProvider: FC<ChildrenType> = ({ children }) => {
  const [error, setError] = useState('');
  const location = useLocation();

  const catchError = (errorCode: string) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        setError('This email already exists');
        break;
      case 'auth/user-not-found':
        setError('User not found');
        break;
      default:
        setError(`Something went wrong, ${errorCode}`);
    }
  };

  useEffect(() => {
    setError('');
  }, [location]);

  return <ErrorContext.Provider value={{ error, catchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => useContext(ErrorContext);
