import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-white text-black shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Text */}


        <Link to="/">
          <img src={logo} alt="Logo" className="h-10  " />
        </Link>


        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/products" className="hover:text-[#FFC000] text-sm">Product</Link>
          <Link href="/gift" className="hover:text-[#FFC000] text-sm">Gift</Link>
          <Link href="/rudraksha" className="hover:text-[#FFC000] text-sm">Rudraksha</Link>
          <Link href="/gemstones" className="hover:text-[#FFC000] text-sm">Gemstones</Link>
          <Link href="/pyamind" className="hover:text-[#FFC000] text-sm">Pyamind</Link>
          <Link href="/sidhcollection" className="hover:text-[#FFC000] text-sm">Sidh Collection</Link>
          <Link href="/shopbuypurpose" className="hover:text-[#FFC000] text-sm">Shop Buy Purpose</Link>
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search */}
          <button
            className="hover:text-[#FFC000] transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          {/* Cart */}
          <Link to="/Addtocartpage" className="relative hover:text-[#FFC000] transition-colors">
            <ShoppingCart size={22} />

            {/* Cart Count */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
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
