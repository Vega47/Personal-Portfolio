import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="border-gray-200 w-full bg-gray-900 fixed top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 mx-auto">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-700">
            Abdullah
          </span>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* روابط القائمة */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#home"
                  className="block py-2 px-3 text-gray-100 rounded-sm hover:text-blue-700"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-gray-100 rounded-sm hover:text-blue-700"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-3 text-gray-100 rounded-sm hover:text-blue-700"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-gray-100 rounded-sm hover:text-blue-700"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
