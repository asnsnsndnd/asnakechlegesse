import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/heropage" },
    { name: "Works", path: "/workpage" },
    { name: "About", path: "/aboutpage" },
    { name: "Services", path: "/servicepage" },
  ];

  const activeClass = "text-blue-500 font-bold";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="w-full max-w-6xl bg-gray-900/95 backdrop-blur-md text-white rounded-2xl shadow-2xl flex items-center justify-between px-8 py-4 border border-white/10">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter">
          Asnakech<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={`text-sm hover:text-blue-400 transition-colors duration-200 ${location.pathname === link.path ? activeClass : "text-gray-300"}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link to="/contactpage" className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all transform active:scale-95">
            Hire Me
          </Link>
          
          {/* Mobile Toggle */}
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-24 left-4 right-4 bg-gray-900 rounded-2xl p-6 flex flex-col gap-4 shadow-xl border border-white/10 transition-all duration-300 md:hidden ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-lg py-2 border-b border-white/5">
              {link.name}
            </Link>
          ))}
          <Link to="/contactpage" className="bg-blue-600 text-center py-3 rounded-xl">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;