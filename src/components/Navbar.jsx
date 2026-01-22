import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-white text-black shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Text */}

        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-40 h-10 cursor-pointer" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="/products" className="hover:text-[#FFC000] text-sm">Product</a>
          <a href="/gift" className="hover:text-[#FFC000] text-sm">Gift</a>
          <a href="/rudraksha" className="hover:text-[#FFC000] text-sm">Rudraksha</a>
          <a href="/gemstones" className="hover:text-[#FFC000] text-sm">Gemstones</a>
          <a href="/vastu" className="hover:text-[#FFC000] text-sm">Vastu</a>
          <a href="/sidhcollection" className="hover:text-[#FFC000] text-sm">Sidh Collection</a>
          <a href="/shopbuypurpose" className="hover:text-[#FFC000] text-sm">Shop Buy Purpose</a>
        </div>


        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 px-4 pb-4">
          <a href="/" className="hover:text-yellow-400 font-medium">Product</a>
          <a href="/gift" className="hover:text-yellow-400 font-medium">Gift</a>
          <a href="/rudraksha" className="hover:text-yellow-400 font-medium">Rudraksha</a>
          <a href="/gemstones" className="hover:text-yellow-400 font-medium">Gemstones</a>
          <a href="/vastu" className="hover:text-yellow-400 font-medium">Vastu</a>
          <a href="/sidh" className="hover:text-yellow-400 font-medium">Sidh Collection</a>
          <a href="/shop" className="hover:text-yellow-400 font-medium">Shop Buy Purpose</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
