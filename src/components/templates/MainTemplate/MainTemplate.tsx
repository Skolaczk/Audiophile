import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import { FC } from 'react';
import { ChildrenType } from 'types';

const MainTemplate: FC<ChildrenType> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainTemplate;
