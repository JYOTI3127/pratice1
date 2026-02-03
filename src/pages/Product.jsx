import { useState, useEffect, useRef, useCallback } from "react";

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

const PRODUCTS = [
  // BRACELETS
  { id: 1, category: "bracelets", name: "7 Mukhi Rudraksha Silver Bracelet", price: 1899, originalPrice: 2400, rating: 4.7, discount: "21% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 2, category: "bracelets", name: "5 Mukhi Natural Rudraksha Kada", price: 1250, originalPrice: 1600, rating: 4.5, discount: "22% OFF", isBestseller: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
  { id: 3, category: "bracelets", name: "Tiger Eye Power Bracelet", price: 899, originalPrice: 1200, rating: 4.3, discount: "25% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 4, category: "bracelets", name: "Amethyst Healing Bracelet", price: 749, originalPrice: 999, rating: 4.6, discount: null, isBestseller: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },

  // RUDRAKSHA
  { id: 5, category: "rudraksha", name: "14 Mukhi Rudraksha Bead (Nepal Origin)", price: 4500, originalPrice: 5800, rating: 4.9, discount: "22% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 6, category: "rudraksha", name: "Gauri Shankar Rudraksha Mala", price: 3200, originalPrice: 4200, rating: 4.8, discount: "24% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
  { id: 7, category: "rudraksha", name: "1 Mukhi Rudraksha Silver Pendant", price: 8900, originalPrice: 11000, rating: 4.9, discount: "19% OFF", isBestseller: false, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 8, category: "rudraksha", name: "3 Mukhi Rudraksha Bead", price: 550, originalPrice: 750, rating: 4.2, discount: null, isBestseller: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },

  // COMBO BRACELETS
  { id: 9, category: "combobracelets", name: "Chakra Balance Combo Bracelet Set", price: 1599, originalPrice: 2100, rating: 4.6, discount: "24% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 10, category: "combobracelets", name: "Rudraksha + Tiger Eye Combo", price: 1350, originalPrice: 1800, rating: 4.4, discount: "25% OFF", isBestseller: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
  { id: 11, category: "combobracelets", name: "Pyrite + Amethyst Protection Combo", price: 1100, originalPrice: 1500, rating: 4.5, discount: "27% OFF", isBestseller: false, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 12, category: "combobracelets", name: "Sandalwood + Crystal Mala Combo", price: 2200, originalPrice: 2900, rating: 4.7, discount: "24% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },

  // YANTRA
  { id: 13, category: "yantra", name: "Shree Yantra Copper Gold Plated", price: 2999, originalPrice: 3800, rating: 4.8, discount: "21% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 14, category: "yantra", name: "Maha Laxmi Yantra Wall Hanging", price: 1800, originalPrice: 2400, rating: 4.5, discount: "25% OFF", isBestseller: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
  { id: 15, category: "yantra", name: "Pocket Yantra Card Set (11 pcs)", price: 650, originalPrice: 900, rating: 4.3, discount: "28% OFF", isBestseller: false, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 16, category: "yantra", name: "Siddh Meru Yantra Crystal", price: 5500, originalPrice: 7000, rating: 4.9, discount: "21% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },

  // GEMSTONES
  { id: 17, category: "gemstones", name: "Natural Blue Sapphire (Lab Certified)", price: 12000, originalPrice: 15000, rating: 4.8, discount: "20% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 18, category: "gemstones", name: "Red Coral Cabochon Gemstone", price: 3200, originalPrice: 4000, rating: 4.6, discount: "20% OFF", isBestseller: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
  { id: 19, category: "gemstones", name: "Rose Quartz Crystal Ball (5cm)", price: 1450, originalPrice: 1900, rating: 4.4, discount: "24% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 20, category: "gemstones", name: "Citrine Rough Cluster", price: 890, originalPrice: 1200, rating: 4.2, discount: null, isBestseller: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },

  // WOMEN BRACELET
  { id: 21, category: "womenbracelet", name: "Rose Quartz Elegance Bracelet", price: 999, originalPrice: 1350, rating: 4.7, discount: "26% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 22, category: "womenbracelet", name: "Pearl & Moonstone Charm Bracelet", price: 1499, originalPrice: 2000, rating: 4.6, discount: "25% OFF", isBestseller: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
  { id: 23, category: "womenbracelet", name: "Aquamarine Serenity Bracelet", price: 1150, originalPrice: 1500, rating: 4.5, discount: "23% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 24, category: "womenbracelet", name: "Amethyst Zen Wrap Bracelet", price: 850, originalPrice: 1100, rating: 4.3, discount: null, isBestseller: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },

  // PYRAMIDS
  { id: 25, category: "pyramid", name: "Crystal Pyramid Vastu Corrector", price: 2200, originalPrice: 2800, rating: 4.7, discount: "21% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 26, category: "pyramid", name: "Shree Yantra Copper Pyramid", price: 1800, originalPrice: 2400, rating: 4.5, discount: "25% OFF", isBestseller: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
  { id: 27, category: "pyramid", name: "Amethyst Healing Pyramid (Large)", price: 3500, originalPrice: 4500, rating: 4.8, discount: "22% OFF", isBestseller: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop" },
  { id: 28, category: "pyramid", name: "Pyrite Mini Pyramid Set (3 pcs)", price: 950, originalPrice: 1250, rating: 4.2, discount: "24% OFF", isBestseller: false, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" },
];

const TOP_SELLERS = PRODUCTS.filter((p) => p.isBestseller).slice(0, 6);

// ─── STAR RATING ─────────────────────────────────────────────────────────────
const StarRating = ({ value = 0, size = 14 }) => (
  <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} width={size} height={size} viewBox="0 0 20 20" fill={s <= Math.round(value) ? "#d97706" : "#e5e7eb"}>
        <path d="M10 1l2.39 4.85L18 6.62l-4 3.9.94 5.52L10 13.4l-4.94 2.64.94-5.52-4-3.9 5.61-.77z" />
      </svg>
    ))}
  </div>
);

// ─── CART BADGE (top-right floating) ────────────────────────────────────────
const CartBadge = ({ count }) => (
  <div style={{
    position: "fixed", top: 20, right: 24, zIndex: 50,
    background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12,
    boxShadow: "0 4px 16px rgba(0,0,0,0.12)", padding: "10px 16px",
    display: "flex", alignItems: "center", gap: 8, cursor: "pointer",
    transition: "box-shadow 0.2s", userSelect: "none"
  }}
    onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.2)"}
    onMouseLeave={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)"}
  >
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
    <span style={{ fontWeight: 700, color: "#92400e", fontSize: 14 }}>Cart</span>
    {count > 0 && (
      <span style={{
        background: "#d97706", color: "#fff", borderRadius: 10, width: 20, height: 20,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700
      }}>{count}</span>
    )}
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
    <div style={{
      position: "relative", width: "100%", borderRadius: 18, overflow: "hidden",
      background: `linear-gradient(135deg, ${slide.color} 0%, #1c1917 60%, #292524 100%)`,
      transition: "background 0.8s ease", minHeight: 220, display: "flex", alignItems: "center"
    }}>
      {/* decorative circles */}
      <div style={{ position: "absolute", top: -60, right: -40, width: 260, height: 260, borderRadius: "50%", background: "rgba(217,119,6,0.12)" }} />
      <div style={{ position: "absolute", bottom: -80, right: 80, width: 200, height: 200, borderRadius: "50%", background: "rgba(217,119,6,0.07)" }} />
      <div style={{ position: "absolute", top: 30, left: "55%", width: 120, height: 120, borderRadius: "50%", border: "2px solid rgba(217,119,6,0.15)" }} />

      <div style={{ position: "relative", zIndex: 2, padding: "48px 40px", maxWidth: 580 }}>
        <div style={{
          display: "inline-block", background: "rgba(217,119,6,0.2)", borderRadius: 20,
          padding: "4px 14px", marginBottom: 14
        }}>
          <span style={{ color: "#fbbf24", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            ✦ Limited Time Offer
          </span>
        </div>
        <h1 style={{ color: "#fff", fontSize: 30, fontWeight: 800, margin: "0 0 10px", lineHeight: 1.2, letterSpacing: "-0.02em" }}>{slide.title}</h1>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, margin: "0 0 24px", lineHeight: 1.5 }}>{slide.sub}</p>
        <button style={{
          background: "linear-gradient(135deg, #d97706, #b45309)", color: "#fff", border: "none",
          padding: "12px 28px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer",
          letterSpacing: "0.02em", boxShadow: "0 4px 14px rgba(180,83,9,0.4)", transition: "transform 0.15s, box-shadow 0.15s"
        }}
          onMouseDown={e => { e.currentTarget.style.transform = "scale(0.96)"; }}
          onMouseUp={e => { e.currentTarget.style.transform = "scale(1)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
        >{slide.cta} →</button>
      </div>

      {/* dots */}
      <div style={{ position: "absolute", bottom: 20, left: 40, display: "flex", gap: 8 }}>
        {bannerSlides.map((_, i) => (
          <div key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? 28 : 8, height: 8, borderRadius: 4,
            background: i === current ? "#d97706" : "rgba(255,255,255,0.3)",
            cursor: "pointer", transition: "width 0.3s, background 0.3s"
          }} />
        ))}
      </div>
    </div>
  );
};

// ─── SECTION HEADING ─────────────────────────────────────────────────────────
const SectionHeading = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
    <div style={{ width: 4, height: 24, borderRadius: 2, background: "linear-gradient(180deg, #d97706, #b45309)" }} />
    <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: "#1c1917", letterSpacing: "-0.01em" }}>{children}</h2>
  </div>
);

// ─── PRODUCT CARD ────────────────────────────────────────────────────────────
const ProductCard = ({ product, onAddToCart }) => {
  const [hovered, setHovered] = useState(false);
  const savings = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff", borderRadius: 14, overflow: "hidden", border: "1px solid #f3f4f6",
        boxShadow: hovered ? "0 8px 28px rgba(0,0,0,0.11)" : "0 2px 8px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.25s, transform 0.25s", transform: hovered ? "translateY(-3px)" : "none",
        display: "flex", flexDirection: "column", cursor: "pointer"
      }}
    >
      {/* Image area */}
      <div style={{ position: "relative", background: "#faf9f7", overflow: "hidden" }}>
        <img src={product.image} alt={product.name} style={{
          width: "100%", height: 200, objectFit: "cover",
          transform: hovered ? "scale(1.04)" : "scale(1)", transition: "transform 0.35s ease"
        }} loading="lazy" />
        {/* badges */}
        <div style={{ position: "absolute", top: 10, left: 10, display: "flex", flexDirection: "column", gap: 5 }}>
          {product.isBestseller && (
            <span style={{
              background: "linear-gradient(135deg, #d97706, #b45309)", color: "#fff",
              fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 6, letterSpacing: "0.06em", textTransform: "uppercase"
            }}>⚡ Best Seller</span>
          )}
          {savings > 0 && (
            <span style={{
              background: "#fff", color: "#b45309", border: "1px solid #fcd34d",
              fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 6
            }}>{savings}% OFF</span>
          )}
        </div>
        {/* quick add btn on hover */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "linear-gradient(transparent, rgba(28,25,23,0.7))",
          padding: "40px 12px 12px", opacity: hovered ? 1 : 0, transition: "opacity 0.25s"
        }}>
          <button onClick={(e) => { e.stopPropagation(); onAddToCart(product); }} style={{
            width: "100%", padding: "9px 0", background: "rgba(217,119,6,0.92)", color: "#fff",
            border: "none", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer",
            backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6
          }}>
            <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "14px 14px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 700, color: "#292524", lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {product.name}
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
          <StarRating value={product.rating} />
          <span style={{ fontSize: 12, color: "#78716c", fontWeight: 600 }}>{product.rating.toFixed(1)}</span>
        </div>
        <div style={{ marginTop: "auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#1c1917" }}>₹{product.price.toLocaleString()}</div>
            {product.originalPrice && (
              <div style={{ fontSize: 12, color: "#a8a29e", textDecoration: "line-through" }}>₹{product.originalPrice.toLocaleString()}</div>
            )}
          </div>
          <button onClick={(e) => { e.stopPropagation(); onAddToCart(product); }} style={{
            background: "#fef3c7", border: "1px solid #fcd34d", color: "#92400e",
            width: 36, height: 36, borderRadius: 8, cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center", transition: "background 0.15s"
          }}
            onMouseEnter={e => e.currentTarget.style.background = "#fde68a"}
            onMouseLeave={e => e.currentTarget.style.background = "#fef3c7"}
          >
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── STICKY CATEGORY SIDEBAR ─────────────────────────────────────────────────
const CategorySidebar = ({ selected, onSelect }) => (
  <div style={{
    width: 220, minWidth: 220, background: "#fff", borderRadius: 16, border: "1px solid #f3f4f6",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)", padding: "20px 14px",
    position: "sticky", top: 24, maxHeight: "calc(100vh - 48px)", overflowY: "auto"
  }}>
    <div style={{ fontSize: 11, fontWeight: 700, color: "#a8a29e", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, paddingLeft: 10 }}>
      Categories
    </div>
    {CATEGORIES.map((cat) => {
      const active = selected === cat.id;
      return (
        <button key={cat.id} onClick={() => onSelect(cat.id)} style={{
          width: "100%", display: "flex", alignItems: "center", gap: 10, textAlign: "left",
          padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer", marginBottom: 3,
          background: active ? "linear-gradient(135deg, #fef3c7, #fde68a)" : "transparent",
          color: active ? "#92400e" : "#57534e", fontWeight: active ? 700 : 500, fontSize: 14,
          transition: "background 0.2s, color 0.2s", boxShadow: active ? "inset 0 0 0 1.5px #fcd34d" : "none"
        }}
          onMouseEnter={e => { if (!active) e.currentTarget.style.background = "#faf9f7"; }}
          onMouseLeave={e => { if (!active) e.currentTarget.style.background = "transparent"; }}
        >
          <span style={{ fontSize: 16 }}>{cat.icon}</span>
          <span>{cat.label}</span>
          <span style={{ marginLeft: "auto", fontSize: 11, color: "#a8a29e", fontWeight: 600 }}>
            {cat.id === "all" ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat.id).length}
          </span>
        </button>
      );
    })}
  </div>
);

// ─── FILTER BAR ──────────────────────────────────────────────────────────────
const inputStyle = {
  padding: "9px 13px", borderRadius: 10, border: "1px solid #e5e7eb", fontSize: 13,
  outline: "none", background: "#fff", color: "#292524", transition: "border-color 0.2s"
};

const FilterBar = ({ filters, setFilters, onClear }) => (
  <div style={{
    background: "#fff", borderRadius: 14, border: "1px solid #f3f4f6", padding: "14px 18px",
    display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
  }}>
    {/* Search */}
    <div style={{ position: "relative", flex: "1 1 200px", minWidth: 180 }}>
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#a8a29e" strokeWidth={2} strokeLinecap="round"
        style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }}>
        <circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2={16.65} y2={16.65} />
      </svg>
      <input value={filters.search}
        onChange={e => setFilters(f => ({ ...f, search: e.target.value }))}
        placeholder="Search products…"
        style={{ ...inputStyle, paddingLeft: 36, width: "100%", boxSizing: "border-box" }}
        onFocus={e => e.target.style.borderColor = "#d97706"}
        onBlur={e => e.target.style.borderColor = "#e5e7eb"}
      />
    </div>
    {/* Min Price */}
    <input type="number" value={filters.minPrice}
      onChange={e => setFilters(f => ({ ...f, minPrice: e.target.value }))}
      placeholder="Min ₹" style={{ ...inputStyle, width: 100 }}
      onFocus={e => e.target.style.borderColor = "#d97706"}
      onBlur={e => e.target.style.borderColor = "#e5e7eb"}
    />
    {/* Max Price */}
    <input type="number" value={filters.maxPrice}
      onChange={e => setFilters(f => ({ ...f, maxPrice: e.target.value }))}
      placeholder="Max ₹" style={{ ...inputStyle, width: 100 }}
      onFocus={e => e.target.style.borderColor = "#d97706"}
      onBlur={e => e.target.style.borderColor = "#e5e7eb"}
    />
    {/* Min Rating */}
    <select value={filters.minRating}
      onChange={e => setFilters(f => ({ ...f, minRating: e.target.value }))}
      style={{ ...inputStyle, width: 130 }}
      onFocus={e => e.target.style.borderColor = "#d97706"}
      onBlur={e => e.target.style.borderColor = "#e5e7eb"}
    >
      <option value="">Rating</option>
      <option value="1">★ 1+</option>
      <option value="2">★★ 2+</option>
      <option value="3">★★★ 3+</option>
      <option value="4">★★★★ 4+</option>
    </select>
    {/* Sort */}
    <select value={filters.sort || "default"}
      onChange={e => setFilters(f => ({ ...f, sort: e.target.value }))}
      style={{ ...inputStyle, width: 150 }}
      onFocus={e => e.target.style.borderColor = "#d97706"}
      onBlur={e => e.target.style.borderColor = "#e5e7eb"}
    >
      <option value="default">Sort by</option>
      <option value="price-asc">Price: Low → High</option>
      <option value="price-desc">Price: High → Low</option>
      <option value="rating">Rating</option>
      <option value="name">Name A–Z</option>
    </select>
    {/* Clear */}
    <button onClick={onClear} style={{
      padding: "9px 16px", borderRadius: 10, border: "1px solid #e5e7eb", background: "#f9fafb",
      color: "#78716c", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "background 0.15s"
    }}
      onMouseEnter={e => e.currentTarget.style.background = "#f3f4f6"}
      onMouseLeave={e => e.currentTarget.style.background = "#f9fafb"}
    >Clear</button>
  </div>
);

// ─── TOAST ───────────────────────────────────────────────────────────────────
const Toast = ({ show, product }) => (
  <div style={{
    position: "fixed", bottom: 24, left: "50%", transform: show ? "translate(-50%, 0)" : "translate(-50%, 120%)",
    transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)", zIndex: 100,
    background: "#1c1917", color: "#fff", padding: "12px 22px", borderRadius: 12,
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)", display: "flex", alignItems: "center", gap: 10,
    fontSize: 14, fontWeight: 600, pointerEvents: "none", whiteSpace: "nowrap"
  }}>
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
    <span style={{ color: "#fbbf24" }}>{product?.name}</span> added to cart
  </div>
);

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filters, setFilters] = useState({ search: "", minPrice: "", maxPrice: "", minRating: "", sort: "default" });
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState({ show: false, product: null });
  const sectionRefs = useRef({});

  // ── filtering + sorting ──
  const filteredProducts = useCallback(() => {
    let list = selectedCategory === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === selectedCategory);
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
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      return exists
        ? prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...product, qty: 1 }];
    });
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
        ([entry]) => { if (entry.isIntersecting) setSelectedCategory(cat.id); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const clearFilters = () => setFilters({ search: "", minPrice: "", maxPrice: "", minRating: "", sort: "default" });

  // ── group products by category for "All" view ──
  const groupedCategories = CATEGORIES.filter(c => c.id !== "all");

  return (
    <div style={{ minHeight: "100vh", background: "#faf9f7", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <CartBadge count={cart.reduce((s, i) => s + i.qty, 0)} />
      <Toast show={toast.show} product={toast.product} />
      {/* ── PAGE WRAPPER ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 24px" }}>
        {/* Banner */}
        <HeroBanner />

        {/* Top Sellers */}
        <div style={{ marginTop: 36 }}>
          <SectionHeading>⚡ Top Sellers</SectionHeading>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16
          }}>
            {TOP_SELLERS.map(p => (
              <div key={p.id} style={{
                background: "#fff", borderRadius: 12, border: "1px solid #f3f4f6", overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)", cursor: "pointer", transition: "box-shadow 0.2s"
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"}
              >
                <div style={{ position: "relative" }}>
                  <img src={p.image} alt={p.name} style={{ width: "100%", height: 130, objectFit: "cover" }} loading="lazy" />
                  <span style={{
                    position: "absolute", top: 8, left: 8, background: "linear-gradient(135deg, #d97706, #b45309)",
                    color: "#fff", fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 5, letterSpacing: "0.06em"
                  }}>⚡ TOP</span>
                </div>
                <div style={{ padding: "10px 12px 12px" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#292524", lineHeight: 1.35, marginBottom: 4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.name}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: "#1c1917" }}>₹{p.price.toLocaleString()}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                      <StarRating value={p.rating} size={11} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MAIN LAYOUT: sidebar + products ── */}
        <div style={{ marginTop: 40, display: "flex", gap: 24, alignItems: "flex-start" }}>
          {/* Sticky Sidebar */}
          <CategorySidebar selected={selectedCategory} onSelect={scrollToCategory} />

          {/* Products column */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Filter Bar */}
            <FilterBar filters={filters} setFilters={setFilters} onClear={clearFilters} />

            {/* If a specific (non-all) category + no search — show that category's section */}
            {/* If "all" or has search/filter active — show grouped sections */}
            {filters.search || filters.minPrice || filters.maxPrice || filters.minRating || filters.sort !== "default" ? (
              <>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 22, marginBottom: 14 }}>
                  <span style={{ fontSize: 13, color: "#78716c", fontWeight: 600 }}>{filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 18 }}>
                  {filteredProducts.map(p => <ProductCard key={p.id} product={p} onAddToCart={addToCart} />)}
                </div>
                {filteredProducts.length === 0 && (
                  <div style={{ textAlign: "center", padding: 60, color: "#a8a29e", fontSize: 15 }}>
                    No products match your filters. <button onClick={clearFilters} style={{ color: "#d97706", background: "none", border: "none", cursor: "pointer", fontWeight: 700 }}>Clear filters</button>
                  </div>
                )}
              </>
            ) : (
              // Grouped view — scroll reveals categories
              groupedCategories.map(cat => {
                const catProducts = PRODUCTS.filter(p => p.category === cat.id);
                return (
                  <div key={cat.id} ref={el => (sectionRefs.current[cat.id] = el)} style={{ marginTop: 32, scrollMarginTop: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                      <span style={{ fontSize: 20 }}>{cat.icon}</span>
                      <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "#1c1917" }}>{cat.label}</h3>
                      <span style={{ fontSize: 12, color: "#a8a29e", fontWeight: 600 }}>({catProducts.length})</span>
                      <div style={{ flex: 1, height: 1, background: "#e7e5e4", marginLeft: 8 }} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 18 }}>
                      {catProducts.map(p => <ProductCard key={p.id} product={p} onAddToCart={addToCart} />)}
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