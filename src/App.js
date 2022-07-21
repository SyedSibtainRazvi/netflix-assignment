import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';

import { Routes, Route } from 'react-router-dom'
import Movies from './Pages/Movies';
import TvShows from './Pages/TvShows';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path= '/tvshows' element={<TvShows />}/>
        <Route path= '/popular' />
      </Routes>
    </>
  );
}

export default App;
