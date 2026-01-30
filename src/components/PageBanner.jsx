import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageBanner = () => {
    const location = useLocation();
    const [bannerData, setBannerData] = useState(null);

    // Banner data for different pages
    const pageBanners = {
        "/product": {
            title: "All Products",
            subtitle: "Discover our complete collection of spiritual products",
            image: "https://astrology.nicdark.com/astrology-wordpress-theme/wp-content/uploads/sites/2/2024/06/healing-crystals-on-brown-background-2023-11-27-05-23-43-utc.jpg",
        },
        "/rudraksha": {
            title: "Rudraksha Beads",
            subtitle: "Sacred beads for spiritual growth and positive energy",
            image: "https://astrology.nicdark.com/astrology-wordpress-theme/wp-content/uploads/sites/2/2024/06/healing-crystals-on-brown-background-2023-11-27-05-23-43-utc.jpg",
        },
        "/bracelets": {
            title: "Crystal Bracelets",
            subtitle: "Energized bracelets for wellness and balance",
            image: "https://astrology.nicdark.com/astrology-wordpress-theme/wp-content/uploads/sites/2/2024/06/healing-crystals-on-brown-background-2023-11-27-05-23-43-utc.jpg",
        },
        "/combobracelets": {
            title: "Combo Bracelet Deals",
            subtitle: "Special combo offers on multiple bracelets",
            image: "https://astrology.nicdark.com/astrology-wordpress-theme/wp-content/uploads/sites/2/2024/06/healing-crystals-on-brown-background-2023-11-27-05-23-43-utc.jpg",
        },
        "/yantra": {
            title: "Yantras",
            subtitle: "Sacred geometric patterns for manifestation",
            image: "https://astrology.nicdark.com/astrology-wordpress-theme/wp-content/uploads/sites/2/2024/06/healing-crystals-on-brown-background-2023-11-27-05-23-43-utc.jpg",
        },
        "/Gemstones": {
            title: "Gemstones",
            subtitle: "Natural gemstones for astrological benefits",
            image: "https://astrology.nicdark.com/astrology-wordpress-theme/wp-content/uploads/sites/2/2024/06/healing-crystals-on-brown-background-2023-11-27-05-23-43-utc.jpg",
        },
        "/womenbracelet": {
            title: "Women's Bracelets",
            subtitle: "Elegant bracelets specially designed for women",
            image: "https://astrology.nicdark.com/astrology-wordpress-theme/wp-content/uploads/sites/2/2024/06/healing-crystals-on-brown-background-2023-11-27-05-23-43-utc.jpg",
        },
        "/pyamind": {
            title: "Pyramids",
            subtitle: "Powerful pyramids for energy amplification",
            image: "https://astrology.nicdark.com/astrology-wordpress-theme/wp-content/uploads/sites/2/2024/06/healing-crystals-on-brown-background-2023-11-27-05-23-43-utc.jpg",
        },
        "/gemstoneconsultation": {
            title: "Gemstone Consultation",
            subtitle: "Get expert advice on choosing the right gemstones",
            image: "https://astrology.nicdark.com/astrology-wordpress-theme/wp-content/uploads/sites/2/2024/06/healing-crystals-on-brown-background-2023-11-27-05-23-43-utc.jpg",
        },
        "/rudrakhaconsultation": {
            title: "Rudraksha Consultation",
            subtitle: "Expert guidance on Rudraksha selection and usage",
            image: "https://astrology.nicdark.com/astrology-wordpress-theme/wp-content/uploads/sites/2/2024/06/healing-crystals-on-brown-background-2023-11-27-05-23-43-utc.jpg",
        },
    };

    useEffect(() => {
        console.log("Current Path:", location.pathname);
        const currentPageBanner = pageBanners[location.pathname];
        setBannerData(currentPageBanner);
    }, [location.pathname]);

    // Don't render if no banner data found for this page
    if (!bannerData) {
        return null;
    }

    return (
        <section
            className="relative h-[300px] md:h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerData.image})` }}
        >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {bannerData.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-100 max-w-2xl">
                    {bannerData.subtitle}
                </p>
            </div>
        </section>

    );
};

export default PageBanner;
