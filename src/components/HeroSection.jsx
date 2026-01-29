const HeroSection = () => {
  return (
    <section className="w-full bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 py-16">
        
        {/* LEFT IMAGE */}
        <div className="w-full">
          <img
            src="https://astrotalk.store/cdn/shop/files/Karungali_Rudraksha_Mala_1_1.webp?v=1767069413&width=750"
            alt="Rudraksha Mala"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className=" sm:p-6 md:p-8 lg:p-10  rounded-lg  max-w-md">
          <p className="text-sm text-gray-500 mb-2">Best-Selling</p>

          <h1 className="text-3xl font-serif font-semibold leading-snug mb-4">
            Divya Raksha Rudraksha <br />
            & Karungali Mala with <br />
            Silver Capping
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            This mala brings peace, protection, and positivity. 
            5 Mukhi Rudraksha calms the mind and improves focus. 
            Karungali protects from negativity. Natural beads may vary. 
            Silver-plated caps add a premium look.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
            Buy Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
