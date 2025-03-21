import Logo from '../assets/cryptoforte_logo.png';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="CryptoForte Logo" className="h-16 sm:h-20" />
        </div>

        {/* CTA */}
        <div className="flex items-center">
          <a
            href="#"
            className="bg-secondary text-white px-5 py-2.5 rounded-md text-sm font-medium shadow hover:opacity-90 transition"
          >
            Join Community
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
