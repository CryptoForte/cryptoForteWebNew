// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/Contactus';
import Events from './pages/Events';
import Contents from './pages/Contents';
import SingleEvent from './pages/SingleEvent';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';

function App() {

  return (
    <>
      < Navbar2 />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/events' element={< Events />} />
        <Route path='/events/:id' element={< SingleEvent />} />
        <Route path='/contents' element={< Contents />} />
        <Route path='/about-us' element={< AboutUs />} />
        <Route path='/contact-us' element={< ContactUs />} />
      </Routes> 
      <Footer2 />
    </>
  )
}

export default App
 