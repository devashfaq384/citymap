import './App.css';
import CityLayout from './components/CityMapLayout/CityLayout';
import Help from './components/Help/Help';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
      {/* <CityLayout></CityLayout> */}
        <Routes>
          <Route path='/' element={ <CityLayout/> } />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
