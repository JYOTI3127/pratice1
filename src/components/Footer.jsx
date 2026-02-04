import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import logo from "../assets/logo.png";
import { FaAnglesRight } from "react-icons/fa6";
import { api } from "../api/api";


const Footer = () => {

  const [horoscope, setHoroscope] = useState([]);
  const [horosType, setHorosType] = useState([]);

  /* ---------------- FETCH HOROSCOPES ---------------- */
  useEffect(() => {
    const fetchHoroscopes = async () => {
      try {
        const res = await api.get("/horoscopes"); // confirm endpoint
        setHoroscope(res.data.data);

      } catch (error) {
        console.log(error.message);
      }
    };

    fetchHoroscopes();
  }, []);

  /* ----------- GENERATE HOROSCOPE TYPES MENU ----------- */
  useEffect(() => {
    if (horoscope?.length > 0) {
      try {
        const horosSet = new Set();
        const horos = [];

        horoscope.forEach((ele) => {
          if (ele.type && !horosSet.has(ele.type)) {
            horosSet.add(ele.type);

            horos.push({
              label:
                ele.type.charAt(0).toUpperCase() +
                ele.type.slice(1) +
                " Horoscope",
              path: `/horoscopes/${ele.type.toLowerCase()}`,
            });
          }
        });

        setHorosType(horos);
      
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [horoscope]);

  return (
    <footer className='bg-accent-foreground pt-10 pb-0 bg-[#f7f5f2] border-t border-gray-300 mt-10'>
      <div className="container pl-15 lg:pl-[70px]">
        <div>
          <div className="border-b border-gray-500 pb-4 mb-4">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10 mb-5 " />
            </Link>
            <div className='space-y-2'>

              <h2 className='text-[#000]-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-[#000]-lg '>About Astrology</h2>
              <p className='text-[#000]-black text-[#000]-sm! '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit consequatur ipsam ex atque delectus nulla animi nostrum? Error, voluptatem? Aspernatur asperiores alias eum temporibus pariatur ipsam cumque facilis repellendus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt eveniet sunt ut dolor laudantium iure omnis soluta laboriosam enim quae.</p>
            </div>
          </div>

          <div className="grid xl:grid-cols-4 md:grid-cols-3  grid-cols-1 gap-4 pb-10">
            <div className='space-y-5'>
              <div>
                <h2 className='text-[#000]-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-[#000]-lg '>About Astrology</h2>

                <ul className="mt-2">
                  {horosType.map((horos) => (
                    <li
                      key={horos.path}
                      className="text-black text-sm mb-2 transition-all duration-300 hover:translate-x-2"
                    >
                      <Link to={horos.path}>
                        
                        {horos.label}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
              <div>
                <h2 className='text-[#000]-black  border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-[#000]-lg '>Shubh Muhurat 2025</h2>

                <ul className='mt-2'>
                  <li className='text-[#000] text-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to="/annanprashan-muhurat" > Annanprashan Muhurat 2026</Link></li>
                  <li className='text-[#000] text-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to="/aamkaran-muhurat" > Naamkaran Muhurat 2026</Link></li>
                  <li className='text-[#000] text-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to="/car-bike-muhurat" > Car/Bike Muhurat 2026</Link></li>
                  <li className='text-[#000] text-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to="/marriage-muhurat" > Marriage Muhurat 2026</Link></li>
                  <li className='text-[#000] text-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to="/bhumiPuja-muhurat" > Bhoomi Pujan Muhurat 2026</Link></li>
                  <li className='text-[#000] text-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to="/griha-pravesh-muhurat" > Griha Pravesh Muhurat 2026</Link></li>
                  <li className='text-[#000] text-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to="/mundan-muhurat" > Mundan Muhurat 2026</Link></li>

                </ul>
              </div>
            </div>
            <div className="space-y-5">
              <div>
                <h2 className="text-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-lg">
                  Important Links
                </h2>

                <ul className="mt-3 space-y-2">
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Astromall</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Astrotalk Store</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Today Panchang</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Live Astrologers</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">How to read kundali</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Free Kundli</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Kundli Matching</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Chat with Astrologer</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Talk to Astrologer</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Astrotalk Reviews</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Astrology Yoga</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400 ">
                    <Link to="">Kaalsarp Doshas</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Child Astrology</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Ascendant Sign Gemstone</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Nakshatras Constellations</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Numerology</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Mantras</Link>
                  </li>

                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-grey-400">
                    <Link to="">Astrological remedies for job promotion</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              {/* Important Links */}
              <div>
                <h2 className="text-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-lg">
                  Important Links
                </h2>

                <ul className="mt-3 space-y-2">
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Collaboration</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Tarot</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ]">
                    <Link to="">Zodiac Signs</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Vastu Shastra</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Love Calculator</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Guru Purnima 2025</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Astrotalk Sitemap</Link>
                  </li>
                </ul>
              </div>

              {/* Shop our products */}
              <div>
                <h2 className="text-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-lg">
                  Shop our products
                </h2>

                <ul className="mt-3 space-y-2">
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Evil Eye</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ]">
                    <Link to="">Rudraksha</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Karungali</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Buy Gemstones</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Pyrite</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Selenite</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Rudraksha Bracelet For Men</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Rudraksha Bracelet For Women</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Murtis and Idols</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Raw Pyrite Stone</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Money Magnet Bracelet</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 ">
                    <Link to="">Joint Pain Oil</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              {/* Astrologer */}
              <div>
                <h2 className="text-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-lg">
                  Astrologer
                </h2>

                <ul className="mt-3 space-y-2">
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-[GREY-400]">
                    <Link to="/astro-login">Astrologer Login</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-[GREY-400]">
                    <Link to="/astro-register">Astrologer Registration</Link>
                  </li>
                </ul>
              </div>

              {/* Corporate Info */}
              <div>
                <h2 className="text-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-lg">
                  Corporate Info
                </h2>

                <ul className="mt-3 space-y-2">
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-[GREY-400]">
                    <Link to="">Refund & Cancellation Policy</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-[GREY-400]">
                    <Link to="">Terms & Conditions</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-[GREY-400]">
                    <Link to="">Privacy Policy</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-[GREY-400]">
                    <Link to="">Disclaimer</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-[GREY-400]">
                    <Link to="">About Us</Link>
                  </li>
                  <li className="text-sm text-black transition-all duration-300 hover:translate-x-2 hover:text-[GREY-400]">
                    <Link to="">Pricing Policy</Link>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="text-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-lg">
                  Contact us
                </h2>

                <ul className="mt-3 space-y-3">
                  <li className="text-sm text-black flex gap-3 items-start">
                    <MapPin className="border-2 border-secondary shrink-0 size-9 p-1.5 rounded-full" />
                    <p>
                      711, Plot A09, ITL Towers, Netaji Subhash Place, Pitampura,
                      Delhi 110034
                    </p>
                  </li>

                  <li className="text-sm text-black flex gap-3 items-center">
                    <Mail className="border-2 border-secondary shrink-0 size-9 p-1.5 rounded-full" />
                    <p>reachus@krayons.co.in</p>
                  </li>

                  <li className="text-sm text-black flex gap-3 items-center">
                    <Phone className="border-2 border-secondary shrink-0 size-9 p-1.5 rounded-full" />
                    <p>+91 23465 12356</p>
                  </li>
                </ul>

                {/* Social Links */}
                <h2 className="mt-6 text-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-lg">
                  Social Links
                </h2>

                <div className="flex gap-3 mt-4">
                  {[TiSocialFacebook, SlSocialInstagram, TiSocialTwitter, TiSocialYoutube].map(
                    (Icon, i) => (
                      <Link key={i}>
                        <div className="border border-black rounded-full h-10 w-10 grid place-items-center hover:bg-black hover:text-white transition">
                          <Icon className="size-5" />
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className=" bg-black text-white text-center py-5 mt-5">
        Copyright  {new Date().getFullYear()} Astrology (Powered by Astrology Services Private Limited). All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer;
