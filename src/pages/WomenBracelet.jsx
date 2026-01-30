import React, { useEffect, useState } from "react";
import OurProduct from "../components/Ourproduct";
import { ProductData } from "../Data/Data";

const WomenBracelet = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const section = ProductData.filter(
      (item) => item.category === "Bracelets"
    );
    setItems(section);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b">
      
      {/* Info Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-sm md:text-base font-medium">
            ✨ Elegant & Energized Bracelets crafted for Grace, Style & Positivity ✨
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-10 md:p-12 border-2 border-orange-200 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-orange-900 mb-4">
              Women Bracelets
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-6"></div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Our women’s bracelets are designed to blend beauty, spirituality, and positive
            energy. Each bracelet is thoughtfully crafted to enhance your style while
            promoting balance, confidence, and inner peace.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">💖</div>
              <h4 className="font-bold text-orange-800 mb-2">Elegant Design</h4>
              <p className="text-sm text-gray-600">
                Crafted to complement every outfit
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">🔮</div>
              <h4 className="font-bold text-orange-800 mb-2">Positive Energy</h4>
              <p className="text-sm text-gray-600">
                Designed for peace, confidence & calm
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">🎁</div>
              <h4 className="font-bold text-orange-800 mb-2">Perfect Gift</h4>
              <p className="text-sm text-gray-600">
                Ideal for loved ones & special occasions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-3 md:px-8 pb-16">
        <div className="bg-white rounded-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-3">
              Our Bracelet Collection
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover beautifully crafted bracelets made for elegance and positive vibes
            </p>
          </div>

          {items.length > 0 ? (
            <OurProduct products={items} title="Women Bracelet" />
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛍️</div>
              <p className="text-gray-500 text-lg">
                No bracelets available at the moment
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default WomenBracelet;
