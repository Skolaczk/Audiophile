import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from 'components/templates/HomepageTemplate/HomepageTemplate';
import CategoryTemplate from 'components/templates/CategoryTemplate/CategoryTemplate';
import Product from 'components/templates/ProductTemplate/ProductTemplate';
import CheckoutTemplate from 'components/templates/CheckoutTemplate/CheckoutTemplate';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/:category' element={<CategoryTemplate />} />
          <Route path='/:category/:slug' element={<Product />} />
          <Route path='/checkout' element={<CheckoutTemplate />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
