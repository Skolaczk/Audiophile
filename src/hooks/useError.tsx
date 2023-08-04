import { ErrorMessages, FirebaseErrors } from 'constants/index';
import { FC, createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChildrenType } from 'types';

type ErrorContextType = {
  error: string;
  catchError: (errorCode: string) => void;
};

const ErrorContext = createContext<ErrorContextType>(null!);

export const ErrorProvider: FC<ChildrenType> = ({ children }) => {
  const [error, setError] = useState('');
  const { pathname } = useLocation();

  const catchError = (errorCode: string) => {
    switch (errorCode) {
      case FirebaseErrors.EmailInUseError:
        setError(ErrorMessages.EmailInUseMessage);
        break;
      case FirebaseErrors.UserNotFoundError:
        setError(ErrorMessages.UserNotFoundMessage);
        break;
      case FirebaseErrors.WrongPasswordError:
        setError(ErrorMessages.WrongPasswordMessage);
        break;
      case FirebaseErrors.TooManyRequestsError:
        setError(ErrorMessages.TooManyRequestsMessage);
        break;
      default:
        setError(ErrorMessages.DefaultMessage + errorCode);
    }
  };

  useEffect(() => {
    setError('');
  }, [pathname]);

  return <ErrorContext.Provider value={{ error, catchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => useContext(ErrorContext);
