import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, data } = useLanguage();
  const { nav } = data.ui;

  const navLinks = [
    { name: nav.home, path: '/' },
    { name: nav.accommodations, path: '/accommodations' },
    { name: nav.activities, path: '/activities' },
    { name: nav.contact, path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-4 lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="flex items-center group cursor-pointer z-50"
          >
            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover:bg-brand-lightGreen/20 transition-all duration-300 group-hover:scale-110">
              <Leaf className="h-5 w-5 md:h-6 md:w-6 text-brand-lightGreen group-hover:text-brand-lightGreen" />
            </div>
            <div className="flex flex-col ml-3">
              <span className="font-serif text-lg md:text-xl font-bold tracking-wider transition-colors text-white">
                KERLING FARM
              </span>
              <span className="text-[9px] md:text-[10px] text-brand-lightGreen tracking-[0.3em] uppercase group-hover:tracking-[0.4em] transition-all duration-300">古林园</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="relative px-4 py-2 group"
                >
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-brand-lightGreen'
                      : 'text-white/90 group-hover:text-white'
                  }`}>
                    {link.name}
                  </span>
                  {isActive(link.path) && (
                    <motion.div 
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="ml-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 hover:border-brand-lightGreen/50 text-white text-xs font-medium uppercase tracking-wider group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand-lightGreen/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Globe className="h-3 w-3 relative z-10 group-hover:rotate-180 transition-transform duration-500" />
              <span className="relative z-10">{language === 'en' ? '中文' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center gap-2 md:hidden z-50">
             {/* Mobile Language Switcher */}
             <button 
              onClick={toggleLanguage}
              className="flex items-center justify-center p-2 rounded-full border border-white/10 bg-white/5 text-white/90 hover:text-white transition-colors active:scale-95 transform duration-200"
            >
              <span className="font-bold text-xs px-1">{language === 'en' ? '中' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-0 bg-brand-dark z-40 flex flex-col pt-24 px-4 overflow-y-auto"
          >
            <div className="space-y-4 px-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link
                    to={link.path}
                    onClick={() => {
                       setIsOpen(false);
                       window.scrollTo(0, 0);
                    }}
                    className={`block px-4 py-4 rounded-xl text-lg font-medium border border-transparent transition-all duration-200 ${
                      isActive(link.path)
                        ? 'bg-brand-lightGreen/20 text-brand-lightGreen border-brand-lightGreen/30'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto pb-10 text-center text-white/30 text-sm">
                <p>&copy; {new Date().getFullYear()} Kerling Farm</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;