import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  loggedIn: boolean;              // *** ADDED
  onLogout: () => void;            // *** ADDED
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate, loggedIn, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'pets', label: 'Our Pets' },
    { id: 'register', label: 'Become a Member' },
    { id: 'release', label: 'Release Pet' },
    { id: 'adopt', label: 'Adopt Pet' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Pet Heaven
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentPage === item.id
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-gray-700 hover:text-orange-600 hover:border-b-2 hover:border-orange-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-300">
              {loggedIn ? (
                <button
                  onClick={onLogout}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleNavClick('login')}
                    className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleNavClick('signup')}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-orange-600 bg-orange-50 border-l-4 border-orange-600'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                {loggedIn ? (
                  <button
                    onClick={() => { onLogout(); setIsMenuOpen(false); }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-orange-50"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleNavClick('login')}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => handleNavClick('signup')}
                      className="block w-full text-left px-3 py-2 text-base font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg mt-2 hover:from-orange-600 hover:to-orange-700"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;