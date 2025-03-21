// import { useState } from 'react'

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';
import ContactUs from './pages/Contactus';
import Events from './pages/Events';
import Contents from './pages/Contents';
import SingleEvent from './pages/SingleEvent';

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 px-4 md:px-12 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<SingleEvent />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
 