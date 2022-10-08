import { FC, createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type ChildrenType = {
  children: React.ReactNode;
};

type ModalContextType = {
  modalIsOpen: boolean;
  toggleModal: () => void;
};

const ModalContext = createContext<ModalContextType>(null!);

export const ModalProvider: FC<ChildrenType> = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleModal = (): void => setIsOpen((prevState) => !prevState);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <ModalContext.Provider value={{ modalIsOpen, toggleModal }}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
