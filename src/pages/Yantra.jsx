import React, { useEffect, useState } from "react";
import OurProduct from "../components/Ourproduct";
import { YantraData } from "../Data/Data";

const Yantra = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const yantras = YantraData.filter((item) => item.category === "Yantra");
    setItems(yantras);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b  ">
      {/* Info Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-sm md:text-base font-medium">
            ⭐ Each Yantra is consecrated with proper Vedic rituals for maximum spiritual potency ⭐
          </p>
        </div>
      </div>

      {/* What is Yantra Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-10 md:p-12 border-2 border-orange-200 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-orange-900 mb-4">What is a Yantra?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-8">
            A Yantra is a sacred geometric diagram used in Hindu and Buddhist traditions as a tool for meditation and worship.
            These mystical symbols represent the cosmic energy of deities and serve as powerful instruments for manifestation,
            protection, and spiritual growth. Each line, curve, and intersection holds deep spiritual significance.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">🔺</div>
              <h4 className="font-bold text-orange-800 mb-2">Sacred Geometry</h4>
              <p className="text-sm text-gray-600">Mathematical precision meets divine design</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold text-orange-800 mb-2">Energy Conductor</h4>
              <p className="text-sm text-gray-600">Channels cosmic forces into your space</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-orange-800 mb-2">Manifestation Tool</h4>
              <p className="text-sm text-gray-600">Helps materialize desires and goals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Yantras */}
      <div className="max-w-7xl mx-auto px-8 pb-10">
        <h2 className="text-4xl md:text-4xl font-bold text-center text-orange-900 mb-12">
          Types of Yantras
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-l-4 border-orange-500">
            <div className="text-5xl mb-4 text-center">🕉️</div>
            <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">Sri Yantra</h3>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              The most powerful yantra for wealth, prosperity, and spiritual growth. Contains 9 interlocking triangles.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-l-4 border-amber-500">
            <div className="text-5xl mb-4 text-center">💰</div>
            <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">Kuber Yantra</h3>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              For attracting wealth and financial abundance. Invokes Lord Kuber, the god of riches.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-l-4 border-orange-600">
            <div className="text-5xl mb-4 text-center">🙏</div>
            <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">Ganesha Yantra</h3>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              Removes obstacles and brings success in new ventures. Blessed by Lord Ganesha's energy.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-l-4 border-amber-600">
            <div className="text-5xl mb-4 text-center">🌺</div>
            <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">Mahalaxmi Yantra</h3>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              Attracts prosperity, good fortune and blessings of Goddess Lakshmi into your home.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-l-4 border-orange-500">
            <div className="text-5xl mb-4 text-center">🛡️</div>
            <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">Vastu Yantra</h3>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              Corrects Vastu defects and brings harmony, peace, and positive energy to spaces.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-l-4 border-amber-500">
            <div className="text-5xl mb-4 text-center">💫</div>
            <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">Navagraha Yantra</h3>
            <p className="text-gray-700 text-center text-sm leading-relaxed">
              Balances planetary influences and reduces malefic effects of all nine planets.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-0 md:px-8 ">
        <div className="bg-white rounded-3xl   ">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-3">
              Our Yantra Collection
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our authentic collection of energized yantras for various spiritual and material purposes
            </p>
          </div>

          {items.length > 0 ? (
            <OurProduct products={items} title="Yantra" />
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-500 text-lg">No yantras available at the moment</p>
            </div>
          )}
        </div>
      </div>
      {/* Trust Badges */}
      <div className="bg-white px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-orange-900 mb-12">Why Choose Our Gemstones?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl">📜</span>
              </div>
              <p className="font-semibold text-orange-900">Vedic Authentic</p>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl">🙏</span>
              </div>
              <p className="font-semibold text-orange-900">Priest Energized</p>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl">✨</span>
              </div>
              <p className="font-semibold text-orange-900">High Quality</p>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl">🎁</span>
              </div>
              <p className="font-semibold text-orange-900">Safe Packaging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yantra;