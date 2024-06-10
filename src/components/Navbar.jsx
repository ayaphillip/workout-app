import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { navLinks, siteTitle } from "../constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSiteTitleClick = () => {
    window.location.href = "/"; // Redirect to homepage on click
  };

  return (
    <>
      <nav className="bg-slate-600 text-white p-4 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo/Branding */}
          <a
            onClick={handleSiteTitleClick}
            className="text-xl font-bold cursor-pointer"
          >
            {siteTitle}
          </a>

          {/* Hamburger menu button for mobile */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation links for desktop */}
          <ul className="hidden lg:flex space-x-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <ScrollLink
                  to={link.path.substring(1)}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Mobile menu */}
          <div
            className={`lg:hidden absolute top-full left-0 w-full bg-slate-600 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.path.substring(1)}
                    smooth={true}
                    duration={500}
                    className="text-white cursor-pointer"
                    onClick={toggleMobileMenu}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
