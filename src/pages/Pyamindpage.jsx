import React from "react";
import OurProduct from "../components/Ourproduct";
import { pyramids } from "../Data/Data";

const PyramidPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to">

      {/* Info Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-sm md:text-base font-medium">
            🔺 Powerful Energy Pyramids to Balance, Heal & Protect Your Space 🔺
          </p>
        </div>
      </div>

      {/* What is Pyramid Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-10 md:p-12 border-2 border-orange-200 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-orange-900 mb-4">
              Energy Pyramids
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full mb-6"></div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-8">
            Pyramids are powerful energy tools used to amplify positive vibrations
            and neutralize negative energies. Their sacred geometric shape helps
            in healing, meditation, vastu correction, and spiritual growth.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold text-orange-800 mb-2">
                Energy Amplifier
              </h4>
              <p className="text-sm text-gray-600">
                Boosts positive vibrations in surroundings
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">🧘‍♀️</div>
              <h4 className="font-bold text-orange-800 mb-2">
                Healing Support
              </h4>
              <p className="text-sm text-gray-600">
                Helps in meditation & mental calmness
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-3">🏠</div>
              <h4 className="font-bold text-orange-800 mb-2">
                Vastu Balance
              </h4>
              <p className="text-sm text-gray-600">
                Corrects vastu defects & enhances harmony
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Pyramids */}
      <div className="max-w-7xl mx-auto px-8 pb-15">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-900 mb-12">
          Types of Pyramids
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-orange-500">
            <div className="text-5xl mb-4 text-center">🔮</div>
            <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">
              Crystal Pyramid
            </h3>
            <p className="text-gray-700 text-center text-sm">
              Enhances healing energy and spiritual awareness.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-amber-500">
            <div className="text-5xl mb-4 text-center">🏠</div>
            <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">
              Vastu Pyramid
            </h3>
            <p className="text-gray-700 text-center text-sm">
              Used to correct vastu defects and improve harmony.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-orange-600">
            <div className="text-5xl mb-4 text-center">💫</div>
            <h3 className="text-xl font-bold text-orange-800 mb-3 text-center">
              Energy Pyramid
            </h3>
            <p className="text-gray-700 text-center text-sm">
              Amplifies positive energy and reduces negativity.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="bg-white rounded-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-3">
              Our Pyramid Collection
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked pyramids designed to uplift energy and bring
              balance into your life.
            </p>
          </div>

          <OurProduct products={pyramids} title="Pyramids" />
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-white  px-8">
                  <h3 className="text-3xl font-bold text-center text-orange-900 mb-12">Why Choose Our Gemstones?</h3>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          
          <div>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">🔺</span>
            </div>
            <p className="font-semibold text-orange-900">Sacred Geometry</p>
          </div>

          <div>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">✨</span>
            </div>
            <p className="font-semibold text-orange-900">High Energy</p>
          </div>

          <div>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">🏠</span>
            </div>
            <p className="font-semibold text-orange-900">Vastu Friendly</p>
          </div>

          <div>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">🎁</span>
            </div>
            <p className="font-semibold text-orange-900">Safe Packaging</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PyramidPage;
