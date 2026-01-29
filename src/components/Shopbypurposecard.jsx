import React from 'react'

const Shopbypurposecard = ({ item }) => {
  return (
   <div className="
 rounded-xl 
  flex flex-col 
  transform transition-all duration-300 ease-in-out
  hover:-translate-y-2 hover:scale-[1.03]
  hover:shadow-2xl hover:shadow-red-400/50 
">

      <img
        src={item.image}
        alt={item.title}
  className="
    w-full h-80 sm:h-40 object-cover rounded-t-lg 
    transition-transform duration-300
    group-hover:scale-110 
  "
/>
      <h1 className="text-sm font-semibold">{item.title}</h1>
    </div>
  );
};


export default Shopbypurposecard
