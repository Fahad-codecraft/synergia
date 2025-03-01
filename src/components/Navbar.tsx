import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const location = useLocation();

  const navItems = [
    { name: 'Events', path: '/events' },
    { name: 'Sponsors', path: '#sponsors' }
  ];

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 py-3 bg-black/60 backdrop-blur-md border-b border-white/10 shadow-lg shadow-purple-500/5`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-red-500/5 animate-gradient"></div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative group"
          >
            <span className="text-3xl font-bold relative z-10 font-[AlphaCorsa]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-600">
                SYNERGIA
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group px-6 py-2"
                onMouseEnter={() => setActiveItem(item.path)}
                onMouseLeave={() => setActiveItem(location.pathname)}
              >
                <div className="flex items-center gap-2">
                  <span className={`relative z-10 font-medium transition-colors duration-300 ${activeItem === item.path ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`}>
                    {item.name}
                  </span>
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${activeItem === item.path
                    ? 'bg-gradient-to-r from-red-500/20 to-purple-500/20 scale-100'
                    : 'bg-white/5 scale-0 group-hover:scale-100'
                  }`}></div>

                {/* Bottom line */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-300 ${activeItem === item.path ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                  }`}></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-12 h-12 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-xl transition-transform duration-300 ${isMenuOpen ? 'scale-110' : 'scale-100'
              }`}></div>
            <div className="relative z-10 text-white">
              {isMenuOpen ? <img src="/icons/X.svg" className='w-6 h-6' />
                : <img src="/icons/menu.svg" className='w-6 h-6' />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${activeItem === item.path
                    ? 'bg-gradient-to-r from-red-500/20 to-purple-500/20 text-white'
                    : 'text-gray-400 hover:bg-white/5'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;