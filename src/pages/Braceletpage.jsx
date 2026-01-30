import React, { useEffect, useState } from "react";
import OurProduct from "../components/Ourproduct";
import { ProductData } from "../Data/Data";

const Braceletpage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const section = ProductData.filter(
      (item) => item.category === "Bracelets"
    );
    setItems(section);
  }, []);

  return (
    <div className="min-h-screen ">
      {/* Features Strip */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="text-lg">🎁</span>
              <span>Free Gift Packaging</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-[#726e6d]/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🚚</span>
              <span>Fast Delivery</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-[#726e6d]/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-lg">💎</span>
              <span>Premium Quality</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-[#726e6d]/30"></div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🔄</span>
              <span>Easy Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Types of Bracelets */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-orange-900 mb-4">
            Explore Our Collection
          </h2>
          <p className="text-gray-600 text-lg">Find the perfect bracelet that resonates with your soul</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <div className="group relative bg-gradient-to-br rounded-3xl p-6 text-white overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="text-4xl mb-3" >🔮</div>
              <h3 className="text-xl font-bold mb-2 text-orange-900">Crystal Bracelets</h3>
              <p className="text-black text-sm">Healing & Energy</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br  rounded-3xl p-6 text-white overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 from-amber-600 10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="text-4xl mb-3">📿</div>
              <h3 className="text-xl font-bold mb-2 text-orange-900">Beaded Bracelets</h3>
              <p className="text-black text-sm">Traditional & Spiritual</p>
            </div>
          </div> 

          <div className="group relative bg-gradient-to-br   rounded-3xl p-6 text-white overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold mb-2 text-orange-900">Gemstone Bracelets</h3>
              <p className="text-black text-sm">Luxury & Elegance</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br  rounded-3xl p-6 text-white overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc000]/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="text-4xl mb-3">🌙</div>
              <h3 className="text-xl font-bold mb-2 text-orange-900">Charm Bracelets</h3>
              <p className="text-black text-sm">Personalized & Unique</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-0 md:px-8 pb-16">
        <div className="bg-white rounded-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-3">
              Our Beautiful Bracelets
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ffc000] to-[#e6ac00] mx-auto rounded-full"></div>
          </div>
          <OurProduct products={items} />
        </div>
      </div>


      {/* Care Tips */}
      <div className="">
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-3xl p-10 border-2 border-[#ffc000]/50">

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <div className="bg-[#ffc000] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-[#726e6d] mb-1">Clean Regularly</h4>
                <p className="text-gray-600 text-sm">Wipe with soft cloth after each use</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#ffc000] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-[#726e6d] mb-1">Avoid Chemicals</h4>
                <p className="text-gray-600 text-sm">Keep away from perfumes and lotions</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#ffc000] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-[#726e6d] mb-1">Store Safely</h4>
                <p className="text-gray-600 text-sm">Keep in a dry, cool place when not wearing</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#ffc000] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-[#726e6d] mb-1">Recharge Energy</h4>
                <p className="text-gray-600 text-sm">Place under moonlight monthly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Braceletpage;