import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';

import { Routes, Route } from 'react-router-dom'
import Movies from './Pages/Movies';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path= '/movies' element = {<Movies />} />
      </Routes>
    </>
  );
}

export default App;
