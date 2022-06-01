import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Drink from 'pages/Drink/Drink';
import Home from 'pages/Home/Home';
// import DrinksContextProvider from 'providers/DrinksContextProvider';
import { DrinkState } from 'contexts/DrinkState';
import './styles.css';

const App = () => {
  return (
    <DrinkState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drink/:id" element={<Drink />} />
        </Routes>
      </BrowserRouter>
    </DrinkState>
  );
};

export default App;
