import { Navbar } from './components';
import { Home } from './pages';

function App(): JSX.Element {
  return (
    <div className='App'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
