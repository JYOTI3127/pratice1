import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion"
import { products } from "../Data/Data"

// ═══════════════════════════════════════════════════════════════════════════
// PRODUCT DATA
// ═══════════════════════════════════════════════════════════════════════════
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

// const PRODUCTS = [
//   // BRACELETS
//   { id: 1, category: "bracelets", name: "7 Mukhi Rudraksha Silver Bracelet", price: 1899, originalPrice: 2400, rating: 4.7, discount: "21% OFF", isBestseller: true, isLatest: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 2, category: "bracelets", name: "5 Mukhi Natural Rudraksha Kada", price: 1250, originalPrice: 1600, rating: 4.5, discount: "22% OFF", isBestseller: false, isLatest: true, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
//   { id: 3, category: "bracelets", name: "Tiger Eye Power Bracelet", price: 899, originalPrice: 1200, rating: 4.3, discount: "25% OFF", isBestseller: true, isLatest: false, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 4, category: "bracelets", name: "Amethyst Healing Bracelet", price: 749, originalPrice: 999, rating: 4.6, discount: null, isBestseller: false, isLatest: true, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },

//   // RUDRAKSHA
//   { id: 5, category: "rudraksha", name: "14 Mukhi Rudraksha Bead (Nepal Origin)", price: 4500, originalPrice: 5800, rating: 4.9, discount: "22% OFF", isBestseller: true, isLatest: false, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 6, category: "rudraksha", name: "Gauri Shankar Rudraksha Mala", price: 3200, originalPrice: 4200, rating: 4.8, discount: "24% OFF", isBestseller: true, isLatest: true, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
//   { id: 7, category: "rudraksha", name: "1 Mukhi Rudraksha Silver Pendant", price: 8900, originalPrice: 11000, rating: 4.9, discount: "19% OFF", isBestseller: false, isLatest: false, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 8, category: "rudraksha", name: "3 Mukhi Rudraksha Bead", price: 550, originalPrice: 750, rating: 4.2, discount: null, isBestseller: false, isLatest: true, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },

//   // COMBO BRACELETS
//   { id: 9, category: "combobracelets", name: "Chakra Balance Combo Bracelet Set", price: 1599, originalPrice: 2100, rating: 4.6, discount: "24% OFF", isBestseller: true, isLatest: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 10, category: "combobracelets", name: "Rudraksha + Tiger Eye Combo", price: 1350, originalPrice: 1800, rating: 4.4, discount: "25% OFF", isBestseller: false, isLatest: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
//   { id: 11, category: "combobracelets", name: "Pyrite + Amethyst Protection Combo", price: 1100, originalPrice: 1500, rating: 4.5, discount: "27% OFF", isBestseller: false, isLatest: false, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 12, category: "combobracelets", name: "Sandalwood + Crystal Mala Combo", price: 2200, originalPrice: 2900, rating: 4.7, discount: "24% OFF", isBestseller: true, isLatest: true, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },

//   // YANTRA
//   { id: 13, category: "yantra", name: "Shree Yantra Copper Gold Plated", price: 2999, originalPrice: 3800, rating: 4.8, discount: "21% OFF", isBestseller: true, isLatest: false, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 14, category: "yantra", name: "Maha Laxmi Yantra Wall Hanging", price: 1800, originalPrice: 2400, rating: 4.5, discount: "25% OFF", isBestseller: false, isLatest: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
//   { id: 15, category: "yantra", name: "Pocket Yantra Card Set (11 pcs)", price: 650, originalPrice: 900, rating: 4.3, discount: "28% OFF", isBestseller: false, isLatest: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 16, category: "yantra", name: "Siddh Meru Yantra Crystal", price: 5500, originalPrice: 7000, rating: 4.9, discount: "21% OFF", isBestseller: true, isLatest: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },

//   // GEMSTONES
//   { id: 17, category: "gemstones", name: "Natural Blue Sapphire (Lab Certified)", price: 12000, originalPrice: 15000, rating: 4.8, discount: "20% OFF", isBestseller: true, isLatest: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 18, category: "gemstones", name: "Red Coral Cabochon Gemstone", price: 3200, originalPrice: 4000, rating: 4.6, discount: "20% OFF", isBestseller: false, isLatest: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
//   { id: 19, category: "gemstones", name: "Rose Quartz Crystal Ball (5cm)", price: 1450, originalPrice: 1900, rating: 4.4, discount: "24% OFF", isBestseller: true, isLatest: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 20, category: "gemstones", name: "Citrine Rough Cluster", price: 890, originalPrice: 1200, rating: 4.2, discount: null, isBestseller: false, isLatest: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },

//   // WOMEN BRACELET
//   { id: 21, category: "womenbracelet", name: "Rose Quartz Elegance Bracelet", price: 999, originalPrice: 1350, rating: 4.7, discount: "26% OFF", isBestseller: true, isLatest: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 22, category: "womenbracelet", name: "Pearl & Moonstone Charm Bracelet", price: 1499, originalPrice: 2000, rating: 4.6, discount: "25% OFF", isBestseller: false, isLatest: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
//   { id: 23, category: "womenbracelet", name: "Aquamarine Serenity Bracelet", price: 1150, originalPrice: 1500, rating: 4.5, discount: "23% OFF", isBestseller: true, isLatest: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 24, category: "womenbracelet", name: "Amethyst Zen Wrap Bracelet", price: 850, originalPrice: 1100, rating: 4.3, discount: null, isBestseller: false, isLatest: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },

//   // PYRAMIDS
//   { id: 25, category: "pyramid", name: "Crystal Pyramid Vastu Corrector", price: 2200, originalPrice: 2800, rating: 4.7, discount: "21% OFF", isBestseller: true, isLatest: false, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 26, category: "pyramid", name: "Shree Yantra Copper Pyramid", price: 1800, originalPrice: 2400, rating: 4.5, discount: "25% OFF", isBestseller: false, isLatest: true, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
//   { id: 27, category: "pyramid", name: "Amethyst Healing Pyramid (Large)", price: 3500, originalPrice: 4500, rating: 4.8, discount: "22% OFF", isBestseller: true, isLatest: false, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
//   { id: 28, category: "pyramid", name: "Pyrite Mini Pyramid Set (3 pcs)", price: 950, originalPrice: 1250, rating: 4.2, discount: "24% OFF", isBestseller: false, isLatest: true, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
// ];

const LATEST_PRODUCTS = products.filter(p => p.isLatest).slice(0, 6);

// ═══════════════════════════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════════════════════════
const Navbar = ({ cartCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.98)" : "#fff",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: "1px solid #e5e7eb",
      boxShadow: scrolled ? "0 4px 16px rgba(0,0,0,0.08)" : "none",
      transition: "all 0.3s ease"
    }}>
      <div style={{
        maxWidth: 1440, margin: "0 auto", padding: "14px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32
      }}>
        {/* LOGO - Left */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10, cursor: "pointer",
          minWidth: 160
        }}>
          <div style={{
            width: 42, height: 42, borderRadius: 10,
            background: "linear-gradient(135deg, #ff6b35, #f7931e)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 12px rgba(255,107,53,0.3)"
          }}>
            <span style={{ fontSize: 20, fontWeight: 900, color: "#fff" }}>S</span>
          </div>
          <div>
            <h1 style={{
              margin: 0, fontSize: 20, fontWeight: 900,
              background: "linear-gradient(135deg, #ff6b35, #f7931e)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em", fontFamily: "'Archivo Black', sans-serif"
            }}>SPORTRZ</h1>
            <p style={{
              margin: 0, fontSize: 9, color: "#78716c",
              fontWeight: 600, letterSpacing: "0.1em"
            }}>SPIRITUAL STORE</p>
          </div>
        </div>

        {/* SEARCH BAR - Center */}
        <div style={{ flex: 1, maxWidth: 600, position: "relative" }}>
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
            stroke="#9ca3af" strokeWidth={2} strokeLinecap="round"
            style={{
              position: "absolute", left: 16, top: "50%",
              transform: "translateY(-50%)", pointerEvents: "none"
            }}>
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2={16.65} y2={16.65} />
          </svg>
          <input
            type="text"
            placeholder="Search for products, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%", padding: "12px 16px 12px 46px",
              border: "2px solid #e5e7eb", borderRadius: 12,
              fontSize: 14, outline: "none", transition: "border-color 0.2s",
              fontFamily: "'Work Sans', sans-serif", background: "#fafafa"
            }}
            onFocus={(e) => e.target.style.borderColor = "#ff6b35"}
            onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
          />
        </div>

        {/* SIGN IN / SIGN UP + CART - Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 240 }}>
          <button style={{
            padding: "10px 20px", border: "2px solid #ff6b35",
            background: "transparent", color: "#ff6b35",
            borderRadius: 10, fontSize: 14, fontWeight: 700,
            cursor: "pointer", transition: "all 0.2s",
            fontFamily: "'Work Sans', sans-serif"
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fff5ed";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >Sign In</button>

          <button style={{
            padding: "10px 20px",
            background: "linear-gradient(135deg, #ff6b35, #f7931e)",
            border: "none", color: "#fff", borderRadius: 10,
            fontSize: 14, fontWeight: 700, cursor: "pointer",
            boxShadow: "0 4px 12px rgba(255,107,53,0.3)",
            transition: "all 0.2s", fontFamily: "'Work Sans', sans-serif"
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,107,53,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(255,107,53,0.3)";
            }}
          >Sign Up</button>

          {/* Cart Icon */}
          <div style={{
            position: "relative", cursor: "pointer",
            padding: "8px", borderRadius: 10,
            transition: "background 0.2s"
          }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#fafafa"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none"
              stroke="#292524" strokeWidth={2} strokeLinecap="round">
              <circle cx={9} cy={21} r={1} />
              <circle cx={20} cy={21} r={1} />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {cartCount > 0 && (
              <span style={{
                position: "absolute", top: 2, right: 2,
                background: "#ff6b35", color: "#fff",
                borderRadius: "50%", width: 20, height: 20,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 800
              }}>{cartCount}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// LEFT SIDEBAR - FILTERS
// ═══════════════════════════════════════════════════════════════════════════
const FilterSidebar = ({ filters, setFilters, selectedCategory, onCategoryChange }) => {
  const inputStyle = {
    width: "100%", padding: "10px 12px", borderRadius: 10,
    border: "1px solid #e5e7eb", fontSize: 13, outline: "none",
    fontFamily: "'Work Sans', sans-serif", transition: "border-color 0.2s"
  };

  return (
    <div style={{
      width: 260, minWidth: 260, position: "sticky", top: 100,
      maxHeight: "calc(100vh - 120px)", overflowY: "auto"
    }}>
      {/* Categories */}
      <div style={{
        background: "#fff", borderRadius: 16, border: "1px solid #f3f4f6",
        padding: "20px", marginBottom: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
      }}>
        <h3 style={{
          margin: "0 0 16px", fontSize: 16, fontWeight: 800,
          color: "#1c1917", fontFamily: "'Archivo Black', sans-serif"
        }}>Categories</h3>
        
        {CATEGORIES.map(cat => {
          const active = selectedCategory === cat.id;
          const count = cat.id === "all" 
            ? products.length 
            : products.filter(p => p.category === cat.id).length;

          return (
            <button key={cat.id} onClick={() => onCategoryChange(cat.id)} style={{
              width: "100%", display: "flex", alignItems: "center",
              gap: 10, padding: "10px 12px", marginBottom: 6,
              borderRadius: 10, border: "none", cursor: "pointer",
              background: active ? "#fff5ed" : "transparent",
              color: active ? "#ff6b35" : "#57534e",
              fontWeight: active ? 700 : 600, fontSize: 14,
              transition: "all 0.2s", fontFamily: "'Work Sans', sans-serif",
              textAlign: "left", boxShadow: active ? "inset 0 0 0 2px #ff6b35" : "none"
            }}
              onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.background = "#fafafa";
              }}
              onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.background = "transparent";
              }}
            >
              <span style={{ fontSize: 18 }}>{cat.icon}</span>
              <span style={{ flex: 1 }}>{cat.label}</span>
              <span style={{
                fontSize: 11, fontWeight: 700,
                color: active ? "#ff6b35" : "#a8a29e"
              }}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Price Range */}
      <div style={{
        background: "#fff", borderRadius: 16, border: "1px solid #f3f4f6",
        padding: "20px", marginBottom: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
      }}>
        <h3 style={{
          margin: "0 0 16px", fontSize: 16, fontWeight: 800,
          color: "#1c1917", fontFamily: "'Archivo Black', sans-serif"
        }}>Price Range</h3>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <input
            type="number"
            placeholder="Min ₹"
            value={filters.minPrice}
            onChange={(e) => setFilters(f => ({ ...f, minPrice: e.target.value }))}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = "#ff6b35"}
            onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
          />
          <input
            type="number"
            placeholder="Max ₹"
            value={filters.maxPrice}
            onChange={(e) => setFilters(f => ({ ...f, maxPrice: e.target.value }))}
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = "#ff6b35"}
            onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
          />
        </div>
      </div>

      {/* Rating Filter */}
      <div style={{
        background: "#fff", borderRadius: 16, border: "1px solid #f3f4f6",
        padding: "20px", marginBottom: 20, boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
      }}>
        <h3 style={{
          margin: "0 0 16px", fontSize: 16, fontWeight: 800,
          color: "#1c1917", fontFamily: "'Archivo Black', sans-serif"
        }}>Rating</h3>
        
        <select
          value={filters.minRating}
          onChange={(e) => setFilters(f => ({ ...f, minRating: e.target.value }))}
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = "#ff6b35"}
          onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
        >
          <option value="">All Ratings</option>
          <option value="4">★★★★ 4+ Stars</option>
          <option value="3">★★★ 3+ Stars</option>
          <option value="2">★★ 2+ Stars</option>
          <option value="1">★ 1+ Stars</option>
        </select>
      </div>

      {/* Sort */}
      <div style={{
        background: "#fff", borderRadius: 16, border: "1px solid #f3f4f6",
        padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
      }}>
        <h3 style={{
          margin: "0 0 16px", fontSize: 16, fontWeight: 800,
          color: "#1c1917", fontFamily: "'Archivo Black', sans-serif"
        }}>Sort By</h3>
        
        <select
          value={filters.sort || "default"}
          onChange={(e) => setFilters(f => ({ ...f, sort: e.target.value }))}
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = "#ff6b35"}
          onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
        >
          <option value="default">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// BANNER SLIDER
// ═══════════════════════════════════════════════════════════════════════════
const BannerSlider = () => {
  const banners = [
    {
      title: "Sacred Rudraksha",
      subtitle: "Authentic beads from Nepal",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Healing Gemstones",
      subtitle: "Lab-certified crystals",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Yantra Power",
      subtitle: "Vastu-approved instruments",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const banner = banners[current];

  return (
    <div style={{
      position: "relative", height: 360, borderRadius: 20,
      background: banner.gradient, overflow: "hidden",
      transition: "background 0.8s ease"
    }}>
      <div style={{
        position: "absolute", top: -80, right: -80,
        width: 300, height: 300, borderRadius: "50%",
        background: "rgba(255,255,255,0.15)",
        animation: "float 6s ease-in-out infinite"
      }} />
      <div style={{
        position: "absolute", bottom: -60, left: -60,
        width: 220, height: 220, borderRadius: "50%",
        background: "rgba(255,255,255,0.1)",
        animation: "float 8s ease-in-out infinite reverse"
      }} />

      <div style={{
        position: "relative", zIndex: 2, height: "100%",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 40px"
      }}>
        <div style={{
          background: "rgba(255,255,255,0.25)", padding: "5px 12px",
          borderRadius: 14, marginBottom: 14, width: "fit-content",
          backdropFilter: "blur(10px)"
        }}>
          <span style={{
            color: "#fff", fontSize: 10, fontWeight: 800,
            letterSpacing: "0.1em", textTransform: "uppercase"
          }}>✨ NEW ARRIVAL</span>
        </div>

        <h2 style={{
          color: "#fff", fontSize: 36, fontWeight: 900,
          margin: "0 0 10px", lineHeight: 1.1,
          fontFamily: "'Archivo Black', sans-serif",
          textShadow: "0 4px 16px rgba(0,0,0,0.2)"
        }}>{banner.title}</h2>

        <p style={{
          color: "rgba(255,255,255,0.95)", fontSize: 15,
          margin: "0 0 20px", fontFamily: "'Work Sans', sans-serif"
        }}>{banner.subtitle}</p>

        <button style={{
          padding: "12px 28px", background: "#fff",
          color: "#292524", border: "none", borderRadius: 10,
          fontSize: 14, fontWeight: 700, cursor: "pointer",
          width: "fit-content", boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          transition: "all 0.2s", fontFamily: "'Work Sans', sans-serif"
        }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
          }}
        >Shop Now →</button>
      </div>

      <div style={{
        position: "absolute", bottom: 20, left: 40,
        display: "flex", gap: 8
      }}>
        {banners.map((_, i) => (
          <div key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? 24 : 8, height: 8, borderRadius: 4,
            background: i === current ? "#fff" : "rgba(255,255,255,0.4)",
            cursor: "pointer", transition: "all 0.3s"
          }} />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// STAR RATING
// ═══════════════════════════════════════════════════════════════════════════
const StarRating = ({ value = 0, size = 14 }) => (
  <div style={{ display: "flex", gap: 2 }}>
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} width={size} height={size} viewBox="0 0 20 20"
        fill={s <= Math.round(value) ? "#ff6b35" : "#e5e7eb"}>
        <path d="M10 1l2.39 4.85L18 6.62l-4 3.9.94 5.52L10 13.4l-4.94 2.64.94-5.52-4-3.9 5.61-.77z" />
      </svg>
    ))}
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// PRODUCT CARD
// ═══════════════════════════════════════════════════════════════════════════
const ProductCard = ({ product, onAddToCart }) => {
  const [hovered, setHovered] = useState(false);
  const savings = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff", borderRadius: 16, overflow: "hidden",
        border: "1px solid #f3f4f6",
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.12)" : "0 4px 12px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer"
      }}
    >
      <div style={{ position: "relative", overflow: "hidden", background: "#fafafa" }}>
        <img src={product.image} alt={product.name} style={{
          width: "100%", height: 220, objectFit: "cover",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.5s ease"
        }} loading="lazy" />

        <div style={{
          position: "absolute", top: 12, left: 12,
          display: "flex", flexDirection: "column", gap: 6
        }}>
          {product.isBestseller && (
            <span style={{
              background: "linear-gradient(135deg, #ff6b35, #f7931e)",
              color: "#fff", fontSize: 10, fontWeight: 800,
              padding: "4px 10px", borderRadius: 8,
              letterSpacing: "0.05em", textTransform: "uppercase",
              boxShadow: "0 4px 12px rgba(255,107,53,0.3)"
            }}>⚡ BEST</span>
          )}
          {savings > 0 && (
            <span style={{
              background: "#fff", color: "#ff6b35",
              fontSize: 10, fontWeight: 800,
              padding: "4px 10px", borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}>{savings}% OFF</span>
          )}
        </div>

        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
          padding: "50px 16px 16px",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(10px)",
          transition: "all 0.3s"
        }}>
          <button onClick={(e) => { e.stopPropagation(); onAddToCart(product); }} style={{
            width: "100%", padding: "11px",
            background: "linear-gradient(135deg, #ff6b35, #f7931e)",
            color: "#fff", border: "none", borderRadius: 10,
            fontSize: 13, fontWeight: 700, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            boxShadow: "0 4px 16px rgba(255,107,53,0.4)",
            fontFamily: "'Work Sans', sans-serif"
          }}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5}>
              <circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>

      <div style={{ padding: "18px" }}>
        <h3 style={{
          margin: "0 0 10px", fontSize: 14, fontWeight: 700,
          color: "#292524", lineHeight: 1.4,
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
          fontFamily: "'Work Sans', sans-serif"
        }}>{product.name}</h3>

        <div style={{
          display: "flex", alignItems: "center", gap: 8, marginBottom: 12
        }}>
          <StarRating value={product.rating} size={13} />
          <span style={{
            fontSize: 12, color: "#78716c", fontWeight: 600
          }}>{product.rating.toFixed(1)}</span>
        </div>

        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div>
            <div style={{
              fontSize: 20, fontWeight: 900, color: "#1c1917"
            }}>₹{product.price.toLocaleString()}</div>
            {product.originalPrice && (
              <div style={{
                fontSize: 13, color: "#a8a29e",
                textDecoration: "line-through"
              }}>₹{product.originalPrice.toLocaleString()}</div>
            )}
          </div>
          <button onClick={(e) => { e.stopPropagation(); onAddToCart(product); }} style={{
            width: 40, height: 40, borderRadius: 10,
            background: "#fff5ed", border: "2px solid #ff6b35",
            cursor: "pointer", display: "flex", alignItems: "center",
            justifyContent: "center", transition: "all 0.2s"
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ff6b35";
              e.currentTarget.querySelector("svg").style.stroke = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff5ed";
              e.currentTarget.querySelector("svg").style.stroke = "#ff6b35";
            }}
          >
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
              stroke="#ff6b35" strokeWidth={2.5} strokeLinecap="round">
              <line x1={12} y1={5} x2={12} y2={19} />
              <line x1={5} y1={12} x2={19} y2={12} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// SECTION HEADING
// ═══════════════════════════════════════════════════════════════════════════
const SectionHeading = ({ children, icon }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 16, marginBottom: 24
  }}>
    <div style={{
      width: 5, height: 32, borderRadius: 3,
      background: "linear-gradient(180deg, #ff6b35, #f7931e)"
    }} />
    <h2 style={{
      margin: 0, fontSize: 26, fontWeight: 900,
      color: "#1c1917", letterSpacing: "-0.02em",
      fontFamily: "'Archivo Black', sans-serif"
    }}>
      {icon && <span style={{ marginRight: 10 }}>{icon}</span>}
      {children}
    </h2>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// TOAST NOTIFICATION
// ═══════════════════════════════════════════════════════════════════════════
const Toast = ({ show, product }) => (
  <div style={{
    position: "fixed", bottom: 32, right: 32,
    transform: show ? "translateX(0)" : "translateX(120%)",
    transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
    zIndex: 200, background: "#1c1917", color: "#fff",
    padding: "16px 24px", borderRadius: 16,
    boxShadow: "0 12px 36px rgba(0,0,0,0.3)",
    display: "flex", alignItems: "center", gap: 12,
    fontSize: 14, fontWeight: 600, fontFamily: "'Work Sans', sans-serif",
    maxWidth: 400
  }}>
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
      stroke="#10b981" strokeWidth={3} strokeLinecap="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
    <span style={{ color: "#fff" }}>
      <span style={{ color: "#ff6b35" }}>{product?.name}</span> added to cart!
    </span>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════════════════
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filters, setFilters] = useState({
    minPrice: "", maxPrice: "", minRating: "", sort: "default"
  });
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState({ show: false, product: null });

  // Filter & Sort Products
  const filteredProducts = useCallback(() => {
    let list = selectedCategory === "all"
      ? products
      : products.filter(p => p.category === selectedCategory);

    if (filters.minPrice) {
      list = list.filter(p => p.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      list = list.filter(p => p.price <= Number(filters.maxPrice));
    }
    if (filters.minRating) {
      list = list.filter(p => p.rating >= Number(filters.minRating));
    }

    if (filters.sort === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (filters.sort === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (filters.sort === "name") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [selectedCategory, filters])();

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      return exists
        ? prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...product, qty: 1 }];
    });

    setToast({ show: true, product });
    setTimeout(() => setToast({ show: false, product: null }), 2500);
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Work+Sans:wght@400;600;700;800;900&display=swap" rel="stylesheet" />

      <div style={{
        minHeight: "100vh", background: "#fafafa",
        fontFamily: "'Work Sans', sans-serif"
      }}>
        <Navbar cartCount={cart.reduce((s, i) => s + i.qty, 0)} />
        <Toast show={toast.show} product={toast.product} />

        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "32px" }}>
          {/* Main Layout: Filters Left, Content Right */}
          <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
            {/* LEFT SIDEBAR - FILTERS */}
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            {/* RIGHT CONTENT */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Banner Slider */}
              <BannerSlider />

              {/* Latest Products */}

<motion.div
  initial={{ y: 60, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  style={{ marginTop: 40 }}
>
  <SectionHeading icon="🔥">Latest Products</SectionHeading>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: 24
    }}
  >
    {LATEST_PRODUCTS.map((p, index) => (
      <motion.div
        key={p.id}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.08, duration: 0.4 }}
      >
        <ProductCard product={p} onAddToCart={addToCart} />
      </motion.div>
    ))}
  </div>
</motion.div>

              {/* All Products */}
<div style={{ marginTop: 60 }}>
  <SectionHeading icon="🛍">
    {selectedCategory === "all"
      ? "All Products"
      : CATEGORIES.find(c => c.id === selectedCategory)?.label}

    <span
      style={{
        fontSize: 16,
        color: "#a8a29e",
        fontWeight: 600,
        marginLeft: 12,
        fontFamily: "'Work Sans', sans-serif",
      }}
    >
      ({filteredProducts.length} items)
    </span>
  </SectionHeading>

  {filteredProducts.length > 0 ? (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 24,
      }}
    >
      {filteredProducts.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  ) : (
    <div
      style={{
        textAlign: "center",
        padding: 80,
        color: "#a8a29e",
        fontSize: 16,
      }}
    >
      No products found matching your filters.
    </div>
  )}
</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}