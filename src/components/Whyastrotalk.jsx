import React from 'react'

import { useState } from "react";

const faqData = [
  {
    question: "Are these products 100% natural?",
    answer: "Yes, all our products are sourced naturally and energised for authenticity."
  },
  {
    question: "Who certifies the products?",
    answer: "Our products are certified by trusted government labs for purity and quality."
  },
  {
    question: "Are they handcrafted?",
    answer: "Absolutely! Skilled artisans carefully craft each product by hand."
  },
  {
    question: "How long does energisation take?",
    answer: "Each product is energised carefully by experts, taking several hours to ensure maximum potency."
  },
  {
    question: "Can I use these products daily?",
    answer: "Yes, these products are safe for daily use and maintain their energy with proper handling."
  },
];


const Whyastrotalk = () => {
  return (
    <section className="bg-[#f7f5f2] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP HEADING */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-black mb-2">
            Charged with Divine Energy
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Every product is energised and blessed by expert astrologers
            to ensure authenticity, purity, and positive impact.
          </p>
        </div>

        {/* CONTENT + VIDEO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT FAQ */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 group cursor-pointer hover:bg-gray-100 transition"
              >
                <h3 className="text-lg font-serif font-semibold flex justify-between items-center">
                  {faq.question}
                  <span className="transition-transform duration-300 group-hover:rotate-45 text-gray-400">+</span>
                </h3>
                <p className="mt-2 text-gray-600 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT VIDEO */}
      <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
   <video
    src="https://astrotalk.store/cdn/shop/videos/c/vp/a85a5eb7b4e34439b580fc1713451135/a85a5eb7b4e34439b580fc1713451135.HD-1080p-7.2Mbps-34749079.mp4?v=0"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default Whyastrotalk;

