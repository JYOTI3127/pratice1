import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";


const Footer = () => {
  return (
    <footer className='bg-accent-foreground pt-10 pb-0 bg-[#f7f5f2] border-t border-gray-300 mt-10'>
      <div className="container pl-5 ">
        <div>
          <div className="border-b border-gray-500 pb-4 mb-4">
            {/* <Link to="/">
              <img src={faviconlogo} className="xl:h-15 md:h-12  h-10 mb-2" alt="" />
            </Link> */}
            <div className='space-y-2'>

              <h2 className='text-[#FFc000]-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-[#FFc000]-lg '>About Astrology</h2>
              <p className='text-[#FFc000]-black text-[#FFc000]-sm! '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit consequatur ipsam ex atque delectus nulla animi nostrum? Error, voluptatem? Aspernatur asperiores alias eum temporibus pariatur ipsam cumque facilis repellendus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt eveniet sunt ut dolor laudantium iure omnis soluta laboriosam enim quae.</p>
            </div>
          </div>

          <div className="grid xl:grid-cols-4 md:grid-cols-3  grid-cols-1 gap-4 pb-10">
            <div className='space-y-5'>
              <div>
                <h2 className='text-[#FFc000]-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-[#FFc000]-lg '>About Astrology</h2>

                <ul className='mt-2'>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2  '><Link to={""} > Today's Horoscope</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Today's Love Horoscope</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Yesterday's Horoscope</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Tomorrow's Horoscope</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Weekly Horoscope</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Monthly Horoscope</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Yearly Horoscope</Link></li>
                </ul>
              </div>
              <div>
                <h2 className='text-[#FFc000]-black  border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-[#FFc000]-lg '>Shubh Muhurat 2025</h2>

                <ul className='mt-2'>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Annanprashan Muhurat 2025</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Naamkaran Muhurat 2025</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Car/Bike Muhurat 2025</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Marriage Muhurat 2025</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Gold Buying Muhurat 2025</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Bhoomi Pujan Muhurat 2025</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Griha Pravesh Muhurat 2025</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Mundan Muhurat 2025</Link></li>

                </ul>
              </div>
            </div>
            <div className='space-y-5'>
              <div>
                <h2 className='text-[#FFc000]-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-[#FFc000]-lg '>Important Links</h2>

                <ul className='mt-2'>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Astromall</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Astrotalk Store</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Today Panchang</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Live Astrologers</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > How to read kundali</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Free Kundli</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Kundli Matching</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Chat with Astrologer</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Talk to Astrologer</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Astrotalk Reviews</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Astrology Yoga</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Kaalsarp Doshas</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Child Astrology</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Ascendant Sign Gemstone</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Nakshatras Constellations</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Numerology</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Mantras</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Astrological remedies for job promotion</Link></li>

                </ul>
              </div>

            </div>
            <div className='space-y-5'>
              <div>
                <h2 className='text-[#FFc000]-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-[#FFc000]-lg '>Important Links</h2>

                <ul className='mt-2'>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Collaboration</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Tarot</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Zodiac Signs</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Vastu Shastra</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Love Calculator</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Guru Purnima 2025</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Astrotalk Sitemap</Link></li>

                </ul>
              </div>
              <div>
                <h2 className='text-[#FFc000]-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-[#FFc000]-lg '>Shop our products</h2>

                <ul className='mt-2'>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Evil Eye</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Rudraksha</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Karungali</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Buy Gemstones </Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Pyrite</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Selenite</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Rudraksha Bracelet For Men</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Rudraksha Bracelet For Women</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Murtis and Idols</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Raw Pyrite Stone</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Money Magnet Bracelet</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Joint Pain Oil</Link></li>


                </ul>
              </div>
            </div>
            <div className='space-y-5'>
              <div>
                <h2 className='text-[#FFc000]-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-[#FFc000]-lg '>Astrologer</h2>
                <ul className='mt-2'>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={"/astro-login"} >  Astrologer Login</Link></li>
                    <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={"/astro-register"} >     Astrologer Registration</Link></li>
                </ul>
              </div>
              <div>
                <h2 className='text-[#FFc000]-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-[#FFc000]-lg '>Corporate Info</h2>
                <ul className='mt-2'>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Refund & Cancellation Policy</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Terms & Conditions</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Privacy Policy</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Disclaimer</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > About Us</Link></li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2'><Link to={""} > Pricing Policy</Link></li>
                </ul>
              </div>
              <div>
                <h2 className='text-[#FFc000]-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-[#FFc000]-lg '>Contact us</h2>
                <ul className='mt-2'>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2 flex gap-2 items-center'>
                    <MapPin className='border-2 border-secondary shrink-0 size-9 p-1.5 rounded-full' />
                    <p>
                      711, Plot A09, ITL Towers, Netaji Subhash Place, Pitampura,
                      Delhi 110034
                    </p>
                  </li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2 flex items-center gap-2'>
                    <Mail className='border-2 border-secondary shrink-0 size-9 p-1.5 rounded-full' />
                    <p>reachus@krayons.co.in</p>
                  </li>
                  <li className='text-[#FFc000]-black text-[#FFc000]-sm mb-2   transition-all duration-300 hover:translate-x-2 flex items-center gap-2'>
                    <Phone className='border-2 border-secondary shrink-0 size-9 p-1.5 rounded-full' />
                    <p>+91 23465 12356</p>
                  </li>
                </ul>
                <h2 className='text-[#FFc000]-black border-b-2 border-b-primary/80 inline-block pb-1 font-semibold text-[#FFc000]-lg '>Social Links</h2>
                <div className="flex gap-3 mt-3">
                  <Link>
                    <div className="border border-black rounded-full text-[#FFc000]-black h-10 w-10 grid place-items-center " >
                      <TiSocialFacebook className="size-7 " />
                    </div>
                  </Link>
                  <Link>
                    <div className="border border-black rounded-full text-[#FFc000]-black h-10 w-10 grid place-items-center " >
                      <SlSocialInstagram className="size-5 " />
                    </div>
                  </Link>
                  <Link>
                    <div className="border border-black rounded-full text-[#FFc000]-black h-10 w-10 grid place-items-center " >
                      <TiSocialTwitter className="size-6 " />
                    </div>
                  </Link>
                  <Link>
                    <div className="border border-black rounded-full text-[#FFc000]-black h-10 w-10 grid place-items-center " >
                      <TiSocialYoutube className="size-5 " />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className=" bg-black text-[#FFc000]-white text-[#FFc000]-center py-5 mt-5">
        Copyright  { new Date().getFullYear() } Astrology (Powered by Astrology Services Private Limited). All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer;
