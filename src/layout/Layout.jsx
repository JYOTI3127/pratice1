import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";

const Layout = () => {
  const location = useLocation();

  // Sirf in exact pages pe navbar & banner hide honge
  const hideNavbarAndBanner =
  
    location.pathname === "/product";

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Navbar & Banner */}
      {!hideNavbarAndBanner && <Navbar />}
      {!hideNavbarAndBanner && <PageBanner />}

      {/* Page Content */}
      <main className="flex-grow container mx-auto">
        <Outlet />
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
};

export default Layout;
