import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageBanner from '../components/PageBanner'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      
      {/* Page Banner - Shows on specific pages */}
      <PageBanner />

      {/* Page Content */}
      <main className="flex-grow container mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout