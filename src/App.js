import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Drink from 'pages/Drink/Drink';
import Home from 'pages/Home/Home';
import DrinksContextProvider from './providers/DrinksContextProvider';
import './styles.css';

const App = () => {
  return (
    <DrinksContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drink/:id" element={<Drink />} />
        </Routes>
      </BrowserRouter>
    </DrinksContextProvider>
  );
};

export default App;
