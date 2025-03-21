import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
// import Logo from '../assets/cryptoforte_logo.png';
import Logo from '../assets/cryptofortelogo2.png';


const Footer = () => {
  return (
    <footer className="bg-[#0D0D3C] text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={Logo} alt="CryptoForte Logo" className="h-10" />
          </div>

          {/* Socials */}
          <div className="flex items-center space-x-4 text-lg">
            <a href="#" className="hover:text-gray-400"><FaYoutube /></a>
            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 mb-6" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            CryptoForte @ {new Date().getFullYear()}. All rights reserved.
          </p>

          {/* Footer nav */}
          <div className="flex space-x-6 text-sm text-white">
            <a href="#" className="hover:text-gray-400">Events</a>
            <a href="#" className="hover:text-gray-400">About Us</a>
            <a href="#" className="hover:text-gray-400">Partners</a>
            <a href="#" className="hover:text-gray-400">Resources</a>
            <a href="#" className="hover:text-gray-400">Socials</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
