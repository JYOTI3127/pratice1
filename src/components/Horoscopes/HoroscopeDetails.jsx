import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeadWithLogo from "../HeadWithLogo";
import { api } from "../../api/api";



const TABS = [
    "today",
    "tomorrow",
    "yesterday",
    "daily",
    "weekly",
    "monthly",
    "yearly",
];

const HOROSCOPES = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
];

const HoroscopeDetails = () => {
    const navigate = useNavigate();
    const { time, horos } = useParams();

    const [horoscope, setHoroscope] = useState([]);
    const [loading, setLoading] = useState(false);

    /* ---------------- FETCH HOROSCOPES ---------------- */
    useEffect(() => {
        const fetchHoroscopes = async () => {
            try {
                setLoading(true);
                const res = await api.get("/horoscope"); // confirm endpoint
                setHoroscope(res.data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHoroscopes();
    }, []);

    /* 🔹 Filtered horoscope based on URL */
    const singleHoroscope = useMemo(() => {
        if (!horoscope?.length) return null;

        return horoscope.find(
            (h) =>
                h.type?.toLowerCase() === time?.toLowerCase() &&
                h.title?.toLowerCase().includes(horos?.toLowerCase())
        );
    }, [horoscope, time, horos]);

    const handleHoroscopeChange = (value) => {
        navigate(`/horoscopes/${time}/${value}`);
    };

    if (loading) {
        return <p className="text-center py-10">Loading horoscope...</p>;
    }

    return (
        <section className="py-10">
            <div className="container">
                <HeadWithLogo time={time} title={horos?.toUpperCase()} />

                <div className="grid md:grid-cols-6 gap-6 mb-6">
                    {/* LEFT SIDE */}
                    <div className="md:col-span-2">
                        <div className="border border-gray-400 rounded-xl p-4 bg-white shadow-sm">

                            <h4 className="mb-3 font-semibold text-2xl text-primary">
                                Horoscopes
                            </h4>

                            {/* CUSTOM SELECT */}
                            <select
                                value={horos}
                                onChange={(e) => handleHoroscopeChange(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="">Select Horoscope</option>
                                {HOROSCOPES.map((h) => (
                                    <option key={h} value={h}>
                                        {h.charAt(0).toUpperCase() + h.slice(1)}
                                    </option>
                                ))}
                            </select>

                            {/* TIME TABS */}
                            <ul className="mt-4">
                                {TABS.map((tab) => (
                                    <li
                                        key={tab}
                                        className={`mb-1 rounded-md transition ${time === tab
                                                ? "bg-primary/30 text-black"
                                                : "bg-gray-200 hover:bg-gray-300"
                                            }`}
                                    >
                                        <Link
                                            to={`/horoscopes/${tab}/${horos}`}
                                            className="block w-full p-2"
                                        >
                                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>


                    {/* RIGHT CONTENT */}
                    <div className="md:col-span-4">
                        {singleHoroscope ? (
                            <>
                                <h2 className="text-2xl font-semibold mb-2">
                                    {singleHoroscope.title}
                                </h2>
                                <p className="mb-6">{singleHoroscope.description}</p>

                                {singleHoroscope.love && (
                                    <div className="mb-4">
                                        <h3 className="font-semibold">Love and Relationships</h3>
                                        <p>{singleHoroscope.love}</p>
                                    </div>
                                )}

                                {singleHoroscope.health && (
                                    <div className="mb-4">
                                        <h3 className="font-semibold">Health and Wellness</h3>
                                        <p>{singleHoroscope.health}</p>
                                    </div>
                                )}

                                {singleHoroscope.career && (
                                    <div className="mb-4">
                                        <h3 className="font-semibold">Career and Education</h3>
                                        <p>{singleHoroscope.career}</p>
                                    </div>
                                )}

                                {singleHoroscope.finance && (
                                    <div className="mb-4">
                                        <h3 className="font-semibold">Money and Finances</h3>
                                        <p>{singleHoroscope.finance}</p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <p>No horoscope data found.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HoroscopeDetails;