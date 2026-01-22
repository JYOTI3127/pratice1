import React from "react";

const AstrologicalSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="https://prophet.ancorathemes.com/wp-content/uploads/elementor/thumbs/image-1-pok0kyf7hk1c8xw1qztqg0xov20w4zaj93df7r01ou.jpg" 
            alt="Astrological Consultation"
            className="w-full h-130 rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-4">
          <p className="text-sm text-yellow-600 uppercase font-semibold">Ask the Stars</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">
            Astrological Consultation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AstrologicalSection;
