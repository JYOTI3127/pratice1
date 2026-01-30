import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HorizontalProductRow = ({ products }) => {
  const containerRef = useRef(null);

  const scrollBy = (dir = "next") => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const gap = 16; // match tailwind gap-4
    const cardWidth = card ? card.getBoundingClientRect().width : el.clientWidth / 4;
    const scrollAmount = (cardWidth + gap) * 4; // move by 4 cards
    el.scrollBy({ left: dir === "next" ? scrollAmount : -scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scrollBy("prev")}
        aria-label="Previous"
        className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-2 rounded-full shadow ml-2"
      >
        <ChevronLeft />
      </button>

      <div
        ref={containerRef}
        className="overflow-x-auto no-scrollbar scroll-smooth py-4 px-2"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex gap-4 items-stretch" style={{ minWidth: "max-content" }}>
          {products.map((p) => (
            <div key={p.id} data-card className="w-[280px] flex-shrink-0">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollBy("next")}
        aria-label="Next"
        className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-2 rounded-full shadow mr-2"
      >
        <ChevronRight />
      </button>

      {/* Mobile: show 2 cards width */}
      <style>{`
        @media (min-width: 768px) {
          .no-scrollbar::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </div>
  );
};

export default HorizontalProductRow;
