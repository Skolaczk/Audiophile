import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from 'components/templates/HomepageTemplate/HomepageTemplate';
import CategoryTemplate from 'components/templates/CategoryTemplate/CategoryTemplate';
import Product from 'components/templates/ProductTemplate/ProductTemplate';
import CheckoutTemplate from 'components/templates/CheckoutTemplate/CheckoutTemplate';
import Cart from 'components/molecules/Cart/Cart';
import SignIn from 'components/templates/SignInTemplate/SignInTemplate';
import SignUp from 'components/templates/SignUpTemplate/SignUpTemplate';
import AccountTemplate from 'components/templates/AccountTemplate/AccountTemplate';
import NotFoundPage from 'components/templates/404Template/NotFoundPage';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/category/:category' element={<CategoryTemplate />} />
        <Route path='/category/:category/:slug' element={<Product />} />
        <Route path='/checkout' element={<CheckoutTemplate />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/account' element={<AccountTemplate />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Cart />
    </>
  );
};

export default App;
