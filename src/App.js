import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import { Products } from './Components/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route end path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
