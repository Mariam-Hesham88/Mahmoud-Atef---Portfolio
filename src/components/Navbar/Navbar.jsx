import React, { useState } from 'react'
import { Link } from 'react-scroll'
import style from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => setIsOpen(false);

  const sections = ["home", "about", "experience","skills", "projects", "contact"];

  return <>
    <nav className="fixed top-0 left-0 right-0 z-50 px-10 border-gray-200 bg-primary">
      <div className="flex flex-wrap items-center justify-center max-w-screen-xl py-3">

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-white rounded-lg md:hidden hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-white">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex flex-col p-2 font-medium md:p-0 md:flex-row md:space-x-8">
            {sections.map((section, index) => (
              <li key={index}>
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                  onClick={handleCloseMenu}
                  className="block p-1 text-white capitalize transition-all duration-300 rounded-sm cursor-pointer hover:text-background"
                >
                  {section === "home" ? "Home" : section}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        
      </div>
    </nav>
  </>
}


