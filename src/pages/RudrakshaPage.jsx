import React, { useState } from 'react';
import OurProduct from "../components/Ourproduct";
import { rudraksha } from "../Data/Data";

const RudrakshaPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b">
      {/* Information Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm md:text-base">
            ✨ Each Rudraksha is carefully selected and energized through Vedic rituals ✨
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-orange-900 mb-12">
          Benefits of Rudraksha
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
            <div className="text-4xl mb-4">🧘</div>
            <h3 className="text-2xl font-semibold text-orange-800 mb-4">Spiritual Growth</h3>
            <p className="text-gray-700 leading-relaxed">
              Enhances meditation, promotes inner peace, and deepens spiritual connection
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-500">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-2xl font-semibold text-orange-800 mb-4">Health Benefits</h3>
            <p className="text-gray-700 leading-relaxed">
              Reduces stress, balances blood pressure, and improves overall well-being
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-600">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-semibold text-orange-800 mb-4">Protection</h3>
            <p className="text-gray-700 leading-relaxed">
              Shields from negative energies and brings divine blessings into your life
            </p>
          </div>
        </div>
      </div>



      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-0 md:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-0 md:p-8">
          <h2 className="text-3xl font-bold text-center text-orange-900 mb-8">
            Our Sacred Collection
          </h2>
          <OurProduct products={rudraksha} />
        </div>
      </div>

      {/* How to Use Section */}
      <div className="bg-gradient-to-r from-orange-100 to-amber-100 py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-orange-900 mb-12">
            How to Wear Rudraksha
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-orange-900 mb-2">Purification</h4>
                  <p className="text-gray-700">Clean with Ganga jal or pure water and wipe with clean cloth</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-orange-900 mb-2">Energization</h4>
                  <p className="text-gray-700">Chant "Om Namah Shivaya" 108 times before wearing</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-orange-900 mb-2">Best Time</h4>
                  <p className="text-gray-700">Wear on Monday morning during Brahma Muhurta for maximum benefits</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-orange-900 mb-2">Care</h4>
                  <p className="text-gray-700">Keep clean, oil occasionally, and remove during sleep</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gradient-to- via-amber-500 py-12 px-8">
        <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-bold text-center text-orange-900 mb-12">Why Choose Our Gemstones?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">📜</div>
              <p className="font-semibold text-orange-900">Lab Certified</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🙏</div>
              <p className="font-semibold text-orange-900">Vedic Blessed</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🌿</div>
              <p className="font-semibold text-orange-900">100% Natural</p>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">✨</div>
              <p className="font-semibold text-orange-900">Energized</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RudrakshaPage;