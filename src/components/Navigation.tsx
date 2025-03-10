
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 64);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-background/80 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="text-2xl font-display font-medium tracking-tight"
            aria-label="Home"
          >
            <span className="text-gradient">Creative.</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  relative text-sm font-medium transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out
                  hover:text-primary hover:after:origin-bottom-left hover:after:scale-x-100
                  ${isActive ? 'text-primary after:origin-bottom-left after:scale-x-100' : 'text-foreground/80'}
                `}
              >
                {link.name}
              </NavLink>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full text-foreground hover:bg-muted transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `
                text-2xl font-medium transition-colors duration-200
                ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}
              `}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
