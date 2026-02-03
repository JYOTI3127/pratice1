import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageBanner from '../components/PageBanner'

const Layout = () => {
  const location = useLocation();

  // Jin pages pe navbar aur page banner hide karna hai
  const hideOnPages = ['/Addtocartpage', '/product'];

  // Agar current path hideOnPages me hai to true, warna false
  const hideNavbarAndBanner = hideOnPages.some(path => location.pathname.includes(path));

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {!hideNavbarAndBanner && <Navbar />}
      {!hideNavbarAndBanner && <PageBanner />}

      {/* Page Content */}
      <main className="flex-grow container mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
