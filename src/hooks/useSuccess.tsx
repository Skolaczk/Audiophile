import { FC, createContext, useState, useContext } from 'react';
import { ChildrenType, SuccessContextType } from 'types';

const SuccessContext = createContext<SuccessContextType>(null!);

export const SuccessProvider: FC<ChildrenType> = ({ children }) => {
  const [isBlocked, setIsBlocked] = useState(false);

  const changeIsBlockedValue = () => setIsBlocked((prevState) => !prevState);

  return (
    <SuccessContext.Provider value={{ isBlocked, changeIsBlockedValue }}>
      {children}
    </SuccessContext.Provider>
  );
};

export const useSuccess = () => useContext(SuccessContext);
