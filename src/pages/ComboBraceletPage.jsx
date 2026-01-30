import React, { useEffect, useState } from "react";
import OurProduct from "../components/Ourproduct";
import { ProductData } from "../Data/Data";

const ComboBraceletPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const section = ProductData.filter(
      (item) => item.category === "ComboBracelets"
    );
    setItems(section);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-red-50">


      {/* Benefits Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎯</span>
              <span>Double Benefits</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/40"></div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <span>Enhanced Energy</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/40"></div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🌟</span>
              <span>Synergistic Power</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/40"></div>
            <div className="flex items-center gap-2">
              <span className="text-xl">💎</span>
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Combo Section */}
      <div className=" mx-auto py-10 px-5 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-orange-900 mb-4">
            Why Choose Combo Bracelets?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Harness the combined power of multiple sacred elements for enhanced spiritual and physical benefits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-t-4 border-orange-500">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
              🔗
            </div>
            <h3 className="text-2xl font-bold text-orange-800 mb-3 text-center">Synergy Effect</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              When two powerful elements combine, their effects multiply, creating exponential benefits
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-t-4 border-amber-500">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
              ⚖️
            </div>
            <h3 className="text-2xl font-bold text-orange-800 mb-3 text-center">Perfect Balance</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Carefully paired combinations that balance different energies and chakras harmoniously
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-t-4 border-red-500">
            <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
              💰
            </div>
            <h3 className="text-2xl font-bold text-orange-800 mb-3 text-center">Value for Money</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Get two powerful bracelets at a special combo price - more benefits, less cost
            </p>
          </div>
        </div>
      </div>

      {/* Popular Combinations */}
      <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-red-100 pt-0 md:pt-16 pb-16 px-8
>">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-900 mb-12">
            Popular Combination Pairs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-4xl mb-3">🔮+📿</div>
                <h4 className="font-bold text-orange-800 mb-2">Crystal + Rudraksha</h4>
                <p className="text-sm text-gray-600">Spiritual growth & healing</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-4xl mb-3">💎+🌙</div>
                <h4 className="font-bold text-orange-800 mb-2">Gemstone + Moonstone</h4>
                <p className="text-sm text-gray-600">Emotional balance & prosperity</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-4xl mb-3">🧿+📿</div>
                <h4 className="font-bold text-orange-800 mb-2">Evil Eye + Rudraksha</h4>
                <p className="text-sm text-gray-600">Protection & divine blessings</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-4xl mb-3">🌿+💫</div>
                <h4 className="font-bold text-orange-800 mb-2">Chakra + Energy</h4>
                <p className="text-sm text-gray-600">Complete chakra alignment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className=" mx-auto">
        <div className="bg-white rounded-3xl px-0 md:px-12 py-8 ">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-3">
              Our Combo Collection
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Expertly curated combinations for maximum spiritual and physical benefits
            </p>
          </div>
          <OurProduct products={items} />
        </div>
      </div>


      {/* Trust Indicators */}
      <div className="bg-gradient-to- via-amber-500 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-orange-900 mb-12">Why Choose Our Gemstones?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎁</span>
              </div>
              <h4 className="font-bold text-orange-800 mb-1">Special Packaging</h4>
              <p className="text-sm text-gray-600">Beautiful combo sets</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">✨</span>
              </div>
              <h4 className="font-bold text-orange-800 mb-1">Energized Together</h4>
              <p className="text-sm text-gray-600">Blessed as a pair</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📋</span>
              </div>
              <h4 className="font-bold text-orange-800 mb-1">Combo Guide</h4>
              <p className="text-sm text-gray-600">Usage instructions</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">💝</span>
              </div>
              <h4 className="font-bold text-orange-800 mb-1">Perfect Gift</h4>
              <p className="text-sm text-gray-600">Ideal for loved ones</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ComboBraceletPage;