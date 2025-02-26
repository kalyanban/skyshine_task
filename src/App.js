import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Scalable from './components/Scalable';
import PowerCloud from './components/PowerCloud';
import Footer from './components/Footer';
import CookiePopup from './components/CookiePopup';

const App = () => {
  return (
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/scalable' element={<Scalable />} />
          <Route path='/powercloud' element={<PowerCloud />} />
        </Routes>
        <CookiePopup />
        <Footer />
      </div> 
  );
}

export default App;
