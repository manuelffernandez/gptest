import { Navbar } from '@/components';
import { store } from '@/redux/store';
import { theme } from '@/themes';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { Home } from './pages';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <Home />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
