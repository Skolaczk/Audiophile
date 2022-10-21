import { ErrorMessages, FirebaseErrors } from 'constants/index';
import { FC, createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChildrenType, ErrorContextType } from 'types';

const ErrorContext = createContext<ErrorContextType>(null!);

export const ErrorProvider: FC<ChildrenType> = ({ children }) => {
  const [error, setError] = useState('');
  const location = useLocation();

  const catchError = (errorCode: string) => {
    switch (errorCode) {
      case FirebaseErrors.EmailInUseError:
        setError(ErrorMessages.EmailInUseMessage);
        break;
      case FirebaseErrors.UserNotFoundError:
        setError(ErrorMessages.UserNotFoundMessage);
        break;
      default:
        setError(ErrorMessages.DefaultMessage);
    }
  };

  useEffect(() => {
    setError('');
  }, [location]);

  return <ErrorContext.Provider value={{ error, catchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => useContext(ErrorContext);
