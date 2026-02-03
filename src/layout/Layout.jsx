import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ProductLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />   {/* ✅ Navbar added */}

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default ProductLayout