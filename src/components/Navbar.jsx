import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Title */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                className="h-8 w-auto"
                src="https://www.svgrepo.com/show/475654/github-color.svg"
                alt="GitHub Logo"
              />
              <h1 className="text-white font-bold text-xl">GitHub</h1>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex sm:items-center sm:gap-6">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <button className="text-white hover:text-gray-300">Light</button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="sm:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-gray-700 px-4 pb-4 space-y-2">
          <Link
            to="/"
            className="block text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <button className="text-white hover:text-gray-300 w-full text-left">
            Light
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
