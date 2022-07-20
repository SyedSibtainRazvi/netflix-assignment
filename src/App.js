import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';

import { Routes, Route } from 'react-router-dom'
import TvShows from './Pages/TvShows';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path= '/tvshows' element = {<TvShows />} />
      </Routes>
    </>
  );
}

export default App;
