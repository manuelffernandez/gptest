import { Navbar } from './components';
import { Home } from './pages';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navbar />
      <Home />
    </Provider>
  );
}

export default App;
