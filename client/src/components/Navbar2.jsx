import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
import {motion, AnimatePresence} from 'framer-motion'
import Logo from '../assets/cryptofortelogo2.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 shadow-md bg-[#071D49] relative z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/">
            <img src={Logo} className="h-8 md:h-12" alt="Logo" />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {/* Desktop Menu */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li><Link to="/" className="text-white hover:text-[#E52B50]"> Home </Link></li>
                <li><Link to="/events" className="text-white hover:text-[#E52B50]"> Events </Link></li>
                <li><Link to="/about-us" className="text-white hover:text-[#E52B50]"> About Us </Link></li>
                <li><Link to="/contact-us" className="text-white hover:text-[#E52B50]"> Contact Us </Link></li>
                <li><Link to="/contents" className="text-white hover:text-[#E52B50]"> Contents </Link></li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex sm:gap-4">
                <a className="rounded-md bg-[#E52B50] px-5 py-2.5 text-sm font-medium text-white shadow" href="#">
                  Join Community
                </a>
              </div>

              {/* Hamburger Icon */}
              <div className="block md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="rounded bg-[#0A2A61] p-2 text-white transition hover:text-[#E52B50]"
                >
                  {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#071D49] shadow-md py-4"
          >
            <ul className="flex flex-col space-y-4 px-6 text-sm">
              <li><Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-[#E52B50]"> Home </Link></li>
              <li><Link to="/events" onClick={() => setIsOpen(false)} className="text-white hover:text-[#E52B50]"> Events </Link></li>
              <li><Link to="/about-us" onClick={() => setIsOpen(false)} className="text-white hover:text-[#E52B50]"> About Us </Link></li>
              <li><Link to="/contact-us" onClick={() => setIsOpen(false)} className="text-white hover:text-[#E52B50]"> Contact Us </Link></li>
              <li><Link to="/contents" onClick={() => setIsOpen(false)} className="text-white hover:text-[#E52B50]"> Contents </Link></li>
              <li>
                <a href="#" className="rounded-md bg-[#E52B50] px-5 py-2.5 text-sm font-medium text-white shadow text-center block">
                  Join Community
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
