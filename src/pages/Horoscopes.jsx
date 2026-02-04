import HeadWithLogo from "@/components/HeadWithLogo";
import HoroscopeBanner from "@/components/Horoscopes/HoroscopeBanner";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api/api";


const Horoscopes = () => {
  const { date } = useParams();

  const [horoscope, setHoroscope] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ---------------- FETCH HOROSCOPES ---------------- */
  useEffect(() => {
    const fetchHoroscopes = async () => {
      try {
        setLoading(true);
        const res = await api.get("/horoscope"); // adjust endpoint if needed
        setHoroscope(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHoroscopes();
  }, []);

  /* -------- FILTER BASED ON PARAM -------- */
  const horoscopeData = horoscope?.filter(
    (h) => h.type.toLowerCase() === date.toLowerCase()
  );

  console.log("PAGE", horoscopeData);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {/* <HeadWithLogo /> */}

      <HoroscopeBanner
        data={horoscopeData}
        title={`Horoscopes for ${date}`}
      />
    </>
  );
};

export default Horoscopes;