import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import { FC } from 'react';

type ChildrenProps = {
  children: React.ReactNode;
};

const MainTemplate: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainTemplate;
