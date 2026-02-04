import { useState, useEffect, useRef, useCallback  } from "react";
import { products } from "../Data/Data";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// ─── MOCK DATA ──────────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: "all", label: "All Products", icon: "✦" },
  { id: "bracelets", label: "Bracelets", icon: "🪬" },
  { id: "rudraksha", label: "Rudraksha", icon: "🕉" },
  { id: "combobracelets", label: "Combo Bracelet", icon: "✨" },
  { id: "yantra", label: "Yantra", icon: "☸" },
  { id: "gemstones", label: "Gemstones", icon: "💎" },
  { id: "womenbracelet", label: "Women Bracelet", icon: "🌸" },
  { id: "pyramid", label: "Pyramids", icon: "🔺" },
];

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
const Navbar = ({ cartCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full sticky top-0 z-[100] bg-white transition-all duration-300">
      {/* Main navbar */}
      <div className="w-full px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="no-underline">
          <div className="flex items-center gap-2.5">
            <div className="w-full h-[42px] flex items-center justify-center overflow-hidden cursor-pointer">
              <img
                src={logo}
                alt="Divine Store Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Link>

        {/* Search bar */}
        <div className="flex-1 max-w-[500px] relative">
          <svg
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a8a29e"
            strokeWidth={2}
            strokeLinecap="round"
            className="absolute left-3.5 top-1/2 -translate-y-1/2"
          >
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2={16.65} y2={16.65} />
          </svg>
          <input
            type="text"
            placeholder="Search for products, categories..."
            className="w-full py-2.5 px-4 pl-11 rounded-[10px] border border-gray-200 text-sm outline-none bg-gray-50 text-stone-800 transition-all duration-200 focus:border-amber-600 focus:bg-white"
          />
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-4">
          {/* Sign In */}
          <button className="px-4 py-2 rounded-[10px] border border-amber-300 bg-white text-amber-900 font-bold cursor-pointer hover:bg-amber-50 transition-colors">
            Sign In
          </button>

          {/* Sign Up */}
          <button className="px-4 py-2 rounded-[10px] border border-amber-300 bg-white text-amber-900 font-bold cursor-pointer hover:bg-amber-50 transition-colors">
            Sign Up
          </button>

          {/* Cart */}
          <div
            onClick={() => navigate("/Addtocartpage")}
            className="relative bg-amber-600 border border-amber-300 text-white rounded-[10px] px-4 py-2 flex items-center gap-2 cursor-pointer transition-all duration-200 hover:bg-amber-100 hover:-translate-y-0.5"
          >
            {/* Cart Icon */}
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#92400e"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={9} cy={21} r={1} />
              <circle cx={20} cy={21} r={1} />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>

            <span className="font-bold text-amber-900 text-sm">Cart</span>

            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[11px] font-bold">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// ─── STAR RATING ─────────────────────────────────────────────────────────────
const StarRating = ({ value = 0, size = 14 }) => (
  <div className="flex gap-0.5 items-center">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg
        key={s}
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill={s <= Math.round(value) ? "#d97706" : "#e5e7eb"}
      >
        <path d="M10 1l2.39 4.85L18 6.62l-4 3.9.94 5.52L10 13.4l-4.94 2.64.94-5.52-4-3.9 5.61-.77z" />
      </svg>
    ))}
  </div>
);

// ─── HERO BANNER ─────────────────────────────────────────────────────────────
const HeroBanner = () => {
  const bannerSlides = [
    { title: "Sacred Rudraksha Collection", sub: "Authentic Nepal-origin beads — energised & certified", cta: "Explore Rudraksha", color: "#78350f" },
    { title: "Gemstone Healing Universe", sub: "Lab-certified natural gemstones for every birth chart", cta: "Shop Gemstones", color: "#1e3a5f" },
    { title: "Yantra & Pyramid Power", sub: "Vastu-approved sacred instruments for home & office", cta: "Browse Yantras", color: "#14532d" },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % bannerSlides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const slide = bannerSlides[current];

  return (
    <div
      className="relative w-full rounded-[18px] overflow-hidden min-h-[220px] flex items-center transition-all duration-700"
      style={{ background: `linear-gradient(135deg, ${slide.color} 0%, #1c1917 60%, #292524 100%)` }}
    >
      {/* decorative circles */}
      <div className="absolute -top-[60px] -right-10 w-[260px] h-[260px] rounded-full bg-amber-600/12" />
      <div className="absolute -bottom-20 right-20 w-[200px] h-[200px] rounded-full bg-amber-600/7" />
      <div className="absolute top-[30px] left-[55%] w-[120px] h-[120px] rounded-full border-2 border-amber-600/15" />

      <div className="relative z-[2] px-10 py-12 max-w-[580px]">
        <div className="inline-block bg-amber-600/20 rounded-[20px] px-3.5 py-1 mb-3.5">
          <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
            ✦ Limited Time Offer
          </span>
        </div>
        <h1 className="text-white text-[30px] font-extrabold m-0 mb-2.5 leading-tight tracking-tight">
          {slide.title}
        </h1>
        <p className="text-white/70 text-[15px] m-0 mb-6 leading-relaxed">
          {slide.sub}
        </p>
        <button className="bg-gradient-to-br from-amber-600 to-amber-700 text-white border-none px-7 py-3 rounded-[10px] text-sm font-bold cursor-pointer tracking-wide shadow-lg shadow-amber-700/40 transition-all duration-150 hover:scale-[0.98] active:scale-95">
          {slide.cta} →
        </button>
      </div>

      {/* dots */}
      <div className="absolute bottom-5 left-10 flex gap-2">
        {bannerSlides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded cursor-pointer transition-all duration-300 ${i === current ? 'w-7 bg-amber-600' : 'w-2 bg-white/30'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

// ─── SECTION HEADING ─────────────────────────────────────────────────────────
const SectionHeading = ({ children }) => (
  <div className="flex items-center gap-3 mb-4.5">
    <div className="w-1 h-6 rounded-sm bg-gradient-to-b from-amber-600 to-amber-700" />
    <h2 className="m-0 text-xl font-extrabold text-stone-900 tracking-tight">
      {children}
    </h2>
  </div>
);

// ─── PRODUCT CARD ────────────────────────────────────────────────────────────
const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const savings = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;


  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-white rounded-[14px] overflow-hidden border border-gray-100 transition-all duration-250 flex flex-col cursor-pointer ${hovered ? 'shadow-xl -translate-y-0.5' : 'shadow-md'
        }`}
    >
      {/* Image area */}
      <div className="relative bg-stone-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-[200px] object-cover transition-transform duration-350 ${hovered ? 'scale-105' : 'scale-100'
            }`}
          loading="lazy"
        />

        {/* badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
          {product.isBestseller && (
            <span className="bg-gradient-to-br from-amber-600 to-amber-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wider uppercase">
              ⚡ Best Seller
            </span>
          )}
          {savings > 0 && (
            <span className="bg-white text-amber-700 border border-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-md">
              {savings}% OFF
            </span>
          )}
        </div>

        {/* quick add btn on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/70 to-transparent px-3 py-3 pt-10 transition-opacity duration-250 ${hovered ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="flex gap-2">
            {/* View Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product.id}`);
              }}
              className="flex-1 py-2 bg-white text-amber-900 border border-amber-300 rounded-lg text-[13px] font-bold cursor-pointer hover:bg-amber-50 transition-colors"
            >
              View
            </button>

            {/* Add to Cart Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="flex-1 py-2 bg-amber-600/92 text-white border-none rounded-lg text-[13px] font-bold cursor-pointer backdrop-blur flex items-center justify-center gap-1.5 hover:bg-amber-600 transition-colors"
            >
              <svg
                width={15}
                height={15}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={9} cy={21} r={1} />
                <circle cx={20} cy={21} r={1} />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Add to Cart
            </button>

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-3.5 py-3.5 pb-4 flex-1 flex flex-col">
        <h3 className="m-0 mb-2 text-[13px] font-bold text-stone-800 leading-snug line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-2.5">
          <StarRating value={product.rating} />
          <span className="text-xs text-stone-500 font-semibold">
            {product.rating.toFixed(1)}
          </span>
        </div>
        <div className="mt-auto flex items-end justify-between">
          <div>
            <div className="text-lg font-extrabold text-stone-900">
              ₹{product.price.toLocaleString()}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-stone-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </div>
            )}
          </div>
          <button
            onClick={(e) => { e.stopPropagation();   }}
            className="bg-amber-100 border border-amber-300 text-amber-900 w-9 h-9 rounded-lg cursor-pointer flex items-center justify-center transition-colors hover:bg-amber-200"
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#92400e"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1={12} y1={5} x2={12} y2={19} />
              <line x1={5} y1={12} x2={19} y2={12} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── ENHANCED FILTER SIDEBAR ─────────────────────────────────────────────────
const FilterSidebar = ({ selected, onSelect, filters, setFilters, onClearFilters }) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    rating: true,
    discount: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const SectionHeader = ({ title, section }) => (
    <div
      onClick={() => toggleSection(section)}
      className={`flex items-center justify-between py-2.5 cursor-pointer select-none border-b border-gray-100 ${expandedSections[section] ? 'mb-3' : 'mb-0'
        }`}
    >
      <span className="text-[13px] font-bold text-stone-800 tracking-wide uppercase">
        {title}
      </span>
      <svg
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#78716c"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-200 ${expandedSections[section] ? 'rotate-180' : 'rotate-0'
          }`}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );

  return (
    <div className="w-[260px] min-w-[260px] bg-white rounded-2xl border border-gray-100 shadow-md p-5 px-4.5 sticky top-[94px] max-h-[calc(100vh-110px)] overflow-y-scroll overflow-x-hidden">
      {/* Header with clear all */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-gray-100">
        <div className="text-[15px] font-extrabold text-stone-900 tracking-tight">
          Filters
        </div>
        <button
          onClick={onClearFilters}
          className="bg-transparent border-none text-amber-600 text-xs font-bold cursor-pointer underline hover:text-amber-700"
        >
          Clear All
        </button>
      </div>

      {/* Categories */}
      <div className="mb-5">
        <SectionHeader title="Categories" section="categories" />
        {expandedSections.categories && (
          <div>
            {CATEGORIES.map((cat) => {
              const active = selected === cat.id;
              const count = cat.id === "all" ? products.length : products.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelect(cat.id)}
                  className={`w-full flex items-center gap-2.5 text-left px-3 py-2 rounded-[9px] border-none cursor-pointer mb-1 text-[13px] transition-all ${active
                    ? 'bg-gradient-to-br from-amber-100 to-amber-200 text-amber-900 font-bold shadow-[inset_0_0_0_1.5px_#fcd34d]'
                    : 'bg-transparent text-stone-600 font-medium hover:bg-stone-50'
                    }`}
                >
                  <span className="text-[15px]">{cat.icon}</span>
                  <span className="flex-1">{cat.label}</span>
                  <span className="text-[11px] text-stone-400 font-semibold">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-5">
        <SectionHeader title="Price Range" section="price" />
        {expandedSections.price && (
          <div className="flex flex-col gap-2.5">
            <div className="flex gap-2">
              <input
                type="number"
                value={filters.minPrice}
                onChange={e => setFilters(f => ({ ...f, minPrice: e.target.value }))}
                placeholder="Min"
                className="flex-1 px-2.5 py-2 rounded-lg border border-gray-200 text-[13px] outline-none focus:border-amber-600"
              />
              <span className="text-stone-400 self-center">—</span>
              <input
                type="number"
                value={filters.maxPrice}
                onChange={e => setFilters(f => ({ ...f, maxPrice: e.target.value }))}
                placeholder="Max"
                className="flex-1 px-2.5 py-2 rounded-lg border border-gray-200 text-[13px] outline-none focus:border-amber-600"
              />
            </div>
            {/* Quick price filters */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: "Under ₹1K", min: "", max: "1000" },
                { label: "₹1K - ₹3K", min: "1000", max: "3000" },
                { label: "₹3K - ₹5K", min: "3000", max: "5000" },
                { label: "Above ₹5K", min: "5000", max: "" },
              ].map((range, i) => (
                <button
                  key={i}
                  onClick={() => setFilters(f => ({ ...f, minPrice: range.min, maxPrice: range.max }))}
                  className={`px-2.5 py-1.5 rounded-md border text-[11px] font-semibold cursor-pointer transition-all ${filters.minPrice === range.min && filters.maxPrice === range.max
                    ? 'border-amber-300 bg-amber-100 text-amber-900'
                    : 'border-gray-200 bg-white text-stone-500 hover:bg-gray-50'
                    }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="mb-5">
        <SectionHeader title="Customer Rating" section="rating" />
        {expandedSections.rating && (
          <div className="flex flex-col gap-2">
            {[4, 3, 2, 1].map(rating => (
              <label
                key={rating}
                className="flex items-center gap-2.5 cursor-pointer px-2 py-1.5 rounded-lg transition-colors hover:bg-stone-50"
              >
                <input
                  type="radio"
                  name="rating"
                  checked={filters.minRating === String(rating)}
                  onChange={() => setFilters(f => ({ ...f, minRating: String(rating) }))}
                  className="cursor-pointer"
                />
                <StarRating value={rating} size={13} />
                <span className="text-xs text-stone-500 font-semibold">& Up</span>
              </label>
            ))}
            <label className="flex items-center gap-2.5 cursor-pointer px-2 py-1.5 rounded-lg transition-colors hover:bg-stone-50">
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === ""}
                onChange={() => setFilters(f => ({ ...f, minRating: "" }))}
                className="cursor-pointer"
              />
              <span className="text-xs text-stone-500 font-semibold">All Ratings</span>
            </label>
          </div>
        )}
      </div>

      {/* Discount */}
      <div className="mb-5">
        <SectionHeader title="Discount" section="discount" />
        {expandedSections.discount && (
          <div className="flex flex-col gap-2">
            {["50", "40", "30", "20", "10"].map(discount => (
              <label
                key={discount}
                className="flex items-center gap-2.5 cursor-pointer px-2 py-1.5 rounded-lg transition-colors hover:bg-stone-50"
              >
                <input type="checkbox" className="cursor-pointer" />
                <span className="text-xs text-stone-500 font-semibold">
                  {discount}% or more
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ─── TOAST ───────────────────────────────────────────────────────────────────
const Toast = ({ show, product }) => (
  <div
    className={`fixed bottom-6 left-1/2 z-[100] bg-stone-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-sm font-semibold pointer-events-none whitespace-nowrap transition-transform duration-350 ${show ? '-translate-x-1/2 translate-y-0' : '-translate-x-1/2 translate-y-[120%]'
      }`}
    style={{ transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)' }}
  >
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#34d399"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
    <span className="text-amber-400">{product?.name}</span> added to cart
  </div>
);

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filters, setFilters] = useState({ search: "", minPrice: "", maxPrice: "", minRating: "", sort: "default" });
  const [toast, setToast] = useState({ show: false, product: null });
  const sectionRefs = useRef({});

  const { cartItems, addToCart } = useCart(); // Use cart context

  // ── filtering + sorting ──
  const filteredProducts = useCallback(() => {
    let list = selectedCategory === "all" ? products : products.filter(p => p.category === selectedCategory);
    if (filters.search) list = list.filter(p => p.name.toLowerCase().includes(filters.search.toLowerCase()));
    if (filters.minPrice) list = list.filter(p => p.price >= Number(filters.minPrice));
    if (filters.maxPrice) list = list.filter(p => p.price <= Number(filters.maxPrice));
    if (filters.minRating) list = list.filter(p => p.rating >= Number(filters.minRating));
    if (filters.sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (filters.sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (filters.sort === "rating") list.sort((a, b) => b.rating - a.rating);
    else if (filters.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [selectedCategory, filters])();

  // ── add to cart ──
  const handleAddToCart = (product) => {
    addToCart(product); // Use addToCart from context
    setToast({ show: true, product });
    setTimeout(() => setToast({ show: false, product: null }), 2200);
  };

  // ── scroll to category section (smooth) ──
  const scrollToCategory = (catId) => {
    setSelectedCategory(catId);
    if (catId !== "all" && sectionRefs.current[catId]) {
      sectionRefs.current[catId].scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (catId === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // ── IntersectionObserver: update sidebar highlight while scrolling ──
  useEffect(() => {
    const observers = [];
    CATEGORIES.filter(c => c.id !== "all").forEach(cat => {
      const el = sectionRefs.current[cat.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setSelectedCategory(cat.id); }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const clearFilters = () => {
    setFilters({ search: "", minPrice: "", maxPrice: "", minRating: "", sort: "default" });
    setSelectedCategory("all");
  };

  // ── group products by category for "All" view ──
  const groupedCategories = CATEGORIES.filter(c => c.id !== "all");

  return (
    <div className="min-h-screen bg-stone-50 font-['Segoe_UI',system-ui,sans-serif]">
      <Navbar cartCount={cartItems.reduce((s, i) => s + i.qty, 0)} />
      <Toast show={toast.show} product={toast.product} />

      {/* ── PAGE WRAPPER ── */}
      <div className="max-w-[1280px] px-6 py-7">
        {/* Banner */}
        <HeroBanner />

        {/* ── MAIN LAYOUT: sidebar + products ── */}
        <div className="mt-10 flex gap-6 items-start">
          {/* Enhanced Filter Sidebar */}
          <FilterSidebar
            selected={selectedCategory}
            onSelect={scrollToCategory}
            filters={filters}
            setFilters={setFilters}
            onClearFilters={clearFilters}
          />

          {/* Products column */}
          <div className="flex-1 min-w-0">
            {/* Top bar with search and sort */}
            <div className="bg-white rounded-[14px] border border-gray-100 px-4.5 py-3.5 flex items-center gap-3 shadow-md mb-5">
              {/* Search */}
              <div className="relative flex-1">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a8a29e"
                  strokeWidth={2}
                  strokeLinecap="round"
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                >
                  <circle cx={11} cy={11} r={8} />
                  <line x1={21} y1={21} x2={16.65} y2={16.65} />
                </svg>
                <input
                  value={filters.search}
                  onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
                  placeholder="Search products…"
                  className="w-full py-2 px-3 pl-9 rounded-[10px] border border-gray-200 text-[13px] outline-none bg-white focus:border-amber-600"
                />
              </div>

              {/* Sort */}
              <select
                value={filters.sort || "default"}
                onChange={e => setFilters(f => ({ ...f, sort: e.target.value }))}
                className="py-2 px-3 rounded-[10px] border border-gray-200 text-[13px] outline-none bg-white cursor-pointer min-w-[150px] focus:border-amber-600"
              >
                <option value="default">Sort by</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="rating">Rating</option>
                <option value="name">Name A–Z</option>
              </select>
            </div>

            {/* Auto Scroll Container */}
            <div className="overflow-hidden mb-7">
              <h2 className="text-2xl font-extrabold text-stone-900 m-0 capitalize">
                Best Sellers
              </h2>
              <div className="flex gap-4 w-max animate-[scrollX_200s_linear_infinite]">
                {[...products, ...products].map((p, index) => (
                  <div
                    key={index}
                    className="min-w-[220px] bg-white rounded-[14px] border border-gray-100 shadow-md p-2.5 cursor-pointer"
                  >
                    {/* Product Image */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-[140px] object-cover rounded-[10px] mb-2"
                    />

                    {/* Product Name */}
                    <div className="text-sm font-bold text-stone-900 mb-1">
                      {p.name}
                    </div>

                    {/* Product Price */}
                    <div className="text-[13px] font-bold text-amber-600">
                      ₹{p.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Animation Style */}
            <style>
              {`
                @keyframes scrollX {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}
            </style>

            {/* Results count */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[13px] text-stone-500 font-semibold">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
              </span>
            </div>

            {/* Products Grid */}
            {filters.search || filters.minPrice || filters.maxPrice || filters.minRating || filters.sort !== "default" ? (
              <>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4.5">
                  {filteredProducts.map(p => <ProductCard key={p.id} product={p} addToCart={handleAddToCart} />)}
                </div>
                {filteredProducts.length === 0 && (
                  <div className="text-center py-15 text-stone-400 text-[15px]">
                    No products match your filters.{" "}
                    <button
                      onClick={clearFilters}
                      className="text-amber-600 bg-transparent border-none cursor-pointer font-bold hover:underline"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </>
            ) : (
              // Grouped view — scroll reveals categories
              groupedCategories.map(cat => {
                const catProducts = products.filter(p => p.category === cat.id);
                return (
                  <div
                    key={cat.id}
                    ref={el => (sectionRefs.current[cat.id] = el)}
                    className="mt-8 scroll-mt-[110px]"
                  >
                    <div className="flex items-center gap-2.5 mb-3.5">
                      <span className="text-xl">{cat.icon}</span>
                      <h3 className="m-0 text-[17px] font-extrabold text-stone-900">
                        {cat.label}
                      </h3>
                      <span className="text-xs text-stone-400 font-semibold">
                        ({catProducts.length})
                      </span>
                      <div className="flex-1 h-px bg-stone-200 ml-2" />
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4.5">
                      {catProducts.map(p => <ProductCard key={p.id} product={p} addToCart={handleAddToCart} />)}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}