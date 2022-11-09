import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChildrenType } from 'types';
import { ModalProvider } from 'hooks/useModal';
import { Provider } from 'react-redux';
import { store } from 'store';
import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from 'hooks/useError';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { SuccessProvider } from 'hooks/useSuccess';

const AppProvider: FC<ChildrenType> = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <ErrorProvider>
            <AuthProvider>
              <ModalProvider>
                <SuccessProvider>
                  <GlobalStyles />
                  {children}
                </SuccessProvider>
              </ModalProvider>
            </AuthProvider>
          </ErrorProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default AppProvider;
