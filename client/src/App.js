import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // No need to import Router here
import Movies from './components/Movies';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/movies" element={<Movies />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
