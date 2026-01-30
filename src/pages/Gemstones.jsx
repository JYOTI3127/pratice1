import React from 'react'
import OurProduct from "../components/Ourproduct";
import { gemstones } from "../Data/Data";

const Gemstones = () => {
  return (
    <div className="min-h-screen bg-gradient-to-">
      {/* Premium Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="text-lg">🌟</span>
              <span>Ethically Sourced</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/40"></div>
            <div className="flex items-center gap-2">
              <span className="text-lg">💎</span>
              <span>Expert Gem Selection</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/40"></div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🔬</span>
              <span>Laboratory Tested</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/40"></div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🎁</span>
              <span>Luxury Packaging</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Gemstones Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-orange-900 mb-4">
            The Power of Gemstones
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            For thousands of years, gemstones have been revered for their metaphysical properties, 
            healing energies, and ability to influence planetary vibrations in Vedic astrology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-t-4 border-orange-500">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
              🌙
            </div>
            <h3 className="text-2xl font-bold text-orange-800 mb-3 text-center">Astrological Benefits</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Each gemstone corresponds to a planet and can strengthen its positive influence while reducing malefic effects
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-t-4 border-amber-500">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
              💫
            </div>
            <h3 className="text-2xl font-bold text-orange-800 mb-3 text-center">Healing Properties</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Natural gemstones emit unique vibrations that can promote physical, emotional, and spiritual healing
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-t-4 border-orange-600">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
              ⚡
            </div>
            <h3 className="text-2xl font-bold text-orange-800 mb-3 text-center">Energy Amplification</h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Gemstones act as powerful energy conductors, enhancing your intentions and manifesting desires
            </p>
          </div>
        </div>
      </div>

      {/* Popular Gemstones Grid */}
      <div className="bg-gradient-to-br pb-5 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-orange-900 mb-4">
            Popular Gemstones & Their Benefits
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore the unique properties and planetary associations of our most sought-after gemstones
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform border-l-4 border-red-500">
              <div className="text-center">
                <div className="text-5xl mb-3">🔴</div>
                <h4 className="font-bold text-orange-800 mb-2 text-lg">Ruby (Manik)</h4>
                <p className="text-xs text-gray-500 mb-2">Planet: Sun ☀️</p>
                <p className="text-sm text-gray-600">Leadership, confidence, vitality</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform border-l-4 border-blue-500">
              <div className="text-center">
                <div className="text-5xl mb-3">🔵</div>
                <h4 className="font-bold text-orange-800 mb-2 text-lg">Blue Sapphire (Neelam)</h4>
                <p className="text-xs text-gray-500 mb-2">Planet: Saturn 🪐</p>
                <p className="text-sm text-gray-600">Discipline, focus, prosperity</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform border-l-4 border-green-500">
              <div className="text-center">
                <div className="text-5xl mb-3">🟢</div>
                <h4 className="font-bold text-orange-800 mb-2 text-lg">Emerald (Panna)</h4>
                <p className="text-xs text-gray-500 mb-2">Planet: Mercury ☿️</p>
                <p className="text-sm text-gray-600">Intelligence, communication, wisdom</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform border-l-4 border-yellow-500">
              <div className="text-center">
                <div className="text-5xl mb-3">🟡</div>
                <h4 className="font-bold text-orange-800 mb-2 text-lg">Yellow Sapphire (Pukhraj)</h4>
                <p className="text-xs text-gray-500 mb-2">Planet: Jupiter ♃</p>
                <p className="text-sm text-gray-600">Wealth, knowledge, good fortune</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform border-l-4 border-pink-500">
              <div className="text-center">
                <div className="text-5xl mb-3">💗</div>
                <h4 className="font-bold text-orange-800 mb-2 text-lg">Diamond (Heera)</h4>
                <p className="text-xs text-gray-500 mb-2">Planet: Venus ♀</p>
                <p className="text-sm text-gray-600">Love, luxury, artistic talent</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform border-l-4 border-orange-500">
              <div className="text-center">
                <div className="text-5xl mb-3">🟠</div>
                <h4 className="font-bold text-orange-800 mb-2 text-lg">Coral (Moonga)</h4>
                <p className="text-xs text-gray-500 mb-2">Planet: Mars ♂</p>
                <p className="text-sm text-gray-600">Courage, energy, protection</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform border-l-4 border-purple-500">
              <div className="text-center">
                <div className="text-5xl mb-3">🟣</div>
                <h4 className="font-bold text-orange-800 mb-2 text-lg">Amethyst</h4>
                <p className="text-xs text-gray-500 mb-2">Planet: Neptune 🔱</p>
                <p className="text-sm text-gray-600">Intuition, peace, spirituality</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform border-l-4 border-gray-500">
              <div className="text-center">
                <div className="text-5xl mb-3">⚪</div>
                <h4 className="font-bold text-orange-800 mb-2 text-lg">Pearl (Moti)</h4>
                <p className="text-xs text-gray-500 mb-2">Planet: Moon 🌙</p>
                <p className="text-sm text-gray-600">Calmness, emotions, mental peace</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-0 md:px-8 ">
        <div className="bg-white rounded-3xl p-0 md:p-12 ">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-orange-900 mb-3">
              Our Premium Gemstone Collection
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each gemstone is carefully selected, certified, and energized to bring you the maximum astrological and healing benefits
            </p>
          </div>
          <OurProduct products={gemstones} />
        </div>
      </div>


      {/* Care Instructions */}
      <div className="">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-10 border-2 border-orange-200">
          <h2 className="text-3xl font-bold text-center text-orange-900 mb-10">
            Gemstone Care & Maintenance
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start bg-white rounded-xl p-6 shadow-md">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-orange-900 mb-1">Regular Cleaning</h4>
                <p className="text-gray-600 text-sm">Clean with soft brush and mild soap water. Dry with soft cloth</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start bg-white rounded-xl p-6 shadow-md">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-orange-900 mb-1">Avoid Chemicals</h4>
                <p className="text-gray-600 text-sm">Keep away from harsh chemicals, perfumes, and cosmetics</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start bg-white rounded-xl p-6 shadow-md">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-orange-900 mb-1">Proper Storage</h4>
                <p className="text-gray-600 text-sm">Store separately in soft pouches to prevent scratches</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start bg-white rounded-xl p-6 shadow-md">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-orange-900 mb-1">Re-energization</h4>
                <p className="text-gray-600 text-sm">Recharge monthly under moonlight or sunlight as recommended</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-orange-900 mb-12">Why Choose Our Gemstones?</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl">🔬</span>
              </div>
              <p className="font-semibold text-orange-900 text-sm">Lab Certified</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl">🌿</span>
              </div>
              <p className="font-semibold text-orange-900 text-sm">100% Natural</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl">✨</span>
              </div>
              <p className="font-semibold text-orange-900 text-sm">Energized</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl">👨‍🔬</span>
              </div>
              <p className="font-semibold text-orange-900 text-sm">Expert Verified</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-3xl">📦</span>
              </div>
              <p className="font-semibold text-orange-900 text-sm">Premium Packaging</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Gemstones;