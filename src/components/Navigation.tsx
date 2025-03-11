
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
            onClick={closeMenu}
          >
            <motion.span 
              className="text-gradient flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Stethoscope className="mr-2 text-primary h-6 w-6" />
              BrightSmile
            </motion.span>
            <span className="text-sm ml-1">Dental</span>
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
            <motion.a
              href="/contact"
              className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium transition-colors hover:bg-primary/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-full text-foreground hover:bg-muted transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Sidebar Style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Left darkened area - clicking here closes the menu */}
            <motion.div 
              className="flex-grow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            
            {/* Sliding sidebar menu */}
            <motion.div 
              className="w-4/5 max-w-xs h-full bg-card shadow-xl border-l border-border p-6 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <motion.button
                  onClick={closeMenu}
                  className="p-2 rounded-full text-foreground hover:bg-muted transition-colors"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </motion.button>
              </div>
              
              {/* Menu content */}
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={closeMenu}
                      className={({ isActive }) => `
                        text-xl font-medium transition-colors duration-200 flex items-center
                        ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}
                      `}
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              
              {/* Book now button */}
              <motion.div
                className="mt-auto pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
              >
                <a
                  href="/contact"
                  onClick={closeMenu}
                  className="px-6 py-3 bg-primary text-white rounded-full text-lg font-medium transition-colors hover:bg-primary/90 w-full flex justify-center items-center"
                >
                  Book Now
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
