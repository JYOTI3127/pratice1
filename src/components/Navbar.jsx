import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { cartItems, addToCart } = useCart();
 
  const navLinks = [
    { name: "Product", path: "/product" },
    { name: "Rudraksh", path: "/rudraksha" },
    { name: "Bracelet", path: "/bracelets" },
    { name: "Combo Bracelet", path: "/combobracelets" },
    { name: "Yantra", path: "/yantra" },


  ];

  const bottomNavLinks = [
    { name: "Gemstones", path: "/Gemstones" },
    { name: "Women Bracelet", path: "/womenbracelet" },
    { name: "Pyramid", path: "/pyamind" },
    { name: "Gemstone Consulation", path: "/gemstoneconsultation" },
    { name: "Rudraksh Consulation", path: "/rudrakhaconsultation" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Navigation Bar */}
      <div className=" border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 pb-0 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>

          {/* Desktop Main Navigation */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center pl-110">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-sm font-small  hover:text-amber-600 transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              className="hover:text-amber-600 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <Link to="/Addtocartpage" className="relative hover:text-amber-600 transition-colors">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
               { cartItems.reduce((s, i) => s + i.qty, 0) }
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Sub-Navigation Bar */}
      <div className="hidden lg:block bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 pt-0 flex justify-center items-center gap-8 pl-90">
          {bottomNavLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-sm text-black  hover:text-amber-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="block py-3 text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-gray-100 pt-4 mt-4 space-y-1">
              {bottomNavLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block py-2 text-sm text-gray-600 hover:text-amber-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 mt-4 flex items-center gap-6">
              <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-amber-600">
                <Search size={18} />
                Search
              </button>
              <Link to="/Addtocartpage" className="flex items-center gap-2 text-sm text-gray-700 hover:text-amber-600 relative">
                <ShoppingCart size={18} />
                Addtocartpage
                <span className="absolute -top-1 left-3 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
