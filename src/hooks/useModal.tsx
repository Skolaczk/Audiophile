import { FC, createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChildrenType, ModalContextType } from 'types';

const ModalContext = createContext<ModalContextType>(null!);

export const ModalProvider: FC<ChildrenType> = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(true);
  const { pathname } = useLocation();

  const toggleModal = () => setIsOpen((prevState) => !prevState);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <ModalContext.Provider value={{ modalIsOpen, toggleModal }}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
