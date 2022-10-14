import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from 'components/templates/HomepageTemplate/HomepageTemplate';
import CategoryTemplate from 'components/templates/CategoryTemplate/CategoryTemplate';
import Product from 'components/templates/ProductTemplate/ProductTemplate';
import CheckoutTemplate from 'components/templates/CheckoutTemplate/CheckoutTemplate';
import Cart from 'components/molecules/Cart/Cart';
import { ModalProvider } from 'hooks/useModal';
import { Provider } from 'react-redux';
import { store } from 'store';
import { AuthProvider } from 'hooks/useAuth';
import SignIn from 'components/templates/SignInTemplate/SignInTemplate';
import { ErrorProvider } from 'hooks/useError';
import SignUp from 'components/templates/SignUpTemplate/SignUpTemplate';
import AccountTemplate from 'components/templates/AccountTemplate/AccountTemplate';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <ErrorProvider>
            <AuthProvider>
              <ModalProvider>
                <GlobalStyles />
                <Routes>
                  <Route path='/' element={<Homepage />} />
                  <Route path='/:category' element={<CategoryTemplate />} />
                  <Route path='/:category/:slug' element={<Product />} />
                  <Route path='/checkout' element={<CheckoutTemplate />} />
                  <Route path='/sign-in' element={<SignIn />} />
                  <Route path='/sign-up' element={<SignUp />} />
                  <Route path='/account' element={<AccountTemplate />} />
                </Routes>
                <Cart />
              </ModalProvider>
            </AuthProvider>
          </ErrorProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
