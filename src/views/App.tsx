import GlobalStyles from '../assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <h1>hello</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
