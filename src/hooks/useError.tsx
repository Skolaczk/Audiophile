import { FC, createContext, useState, useContext } from 'react';

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

  const catchError = (errorCode: string) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        setError('bad email');
        break;
      default:
        setError('Something went wrong');
    }
  };

  return <ErrorContext.Provider value={{ error, catchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => useContext(ErrorContext);
