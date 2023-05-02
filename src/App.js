import './App.css';
import CityLayout from './components/CityMapLayout/CityLayout';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <CityLayout/>
    </Provider>
  );
}

export default App;
