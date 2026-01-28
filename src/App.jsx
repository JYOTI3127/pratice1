import React, { use, useEffect } from 'react'
import Home from './pages/Home'
import { Routes, Route, useLocation } from "react-router-dom";
import About from './pages/About'
import ProductDetails from './pages/Productdetails'
import Gift from './pages/Gift'
import Layout from './layout/Layout'
import Gemstones from './pages/Gemstones'
import Sidhcollection from './pages/Sidhcollection'
import Shopbuypurpose from './pages/Shopbuypurpose'
import Product from './pages/Product';
import RudrakshaPage from './pages/RudrakshaPage';
import Pyamindpage from './pages/Pyamindpage';
import Addtocartpage from './pages/Addtocartpage';



const App = () => {
  const Location = useLocation();
  console.log(Location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [Location.pathname]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/rudraksha" element={<RudrakshaPage />} />
        <Route path="/gemstones" element={<Gemstones />} />
        <Route path="/sidhcollection" element={<Sidhcollection />} />
        <Route path="/shopbuypurpose" element={<Shopbuypurpose />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Product />} />
        <Route path="/pyamind" element={<Pyamindpage />} />
        <Route path="/Addtocartpage" element={<Addtocartpage />} />
      </Route>

    </Routes>
  )
}

export default App
