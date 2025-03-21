// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/Contactus';
import Events from './pages/Events';
import Contents from './pages/Contents';
import SingleEvent from './pages/SingleEvent';

function App() {

  return (
    <>
      < Navbar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/events' element={< Events />} />
        <Route path='/events/:id' element={< SingleEvent />} />
        <Route path='/contents' element={< Contents />} />
        <Route path='/about-us' element={< AboutUs />} />
        <Route path='/contact-us' element={< ContactUs />} />
      </Routes> 
    </>
  )
}

export default App
 