import React, { use, useEffect } from 'react'
import Home from './pages/Home'
import { Routes, Route, useLocation } from "react-router-dom";
import About from './pages/About'

import Gift from './pages/Gift'
import Layout from './layout/Layout'
import Gemstones from './pages/Gemstones'
import Shopbuypurpose from './pages/Shopbuypurpose'
import Product from './pages/Product';
import RudrakshaPage from './pages/RudrakshaPage';
import Pyamindpage from './pages/Pyamindpage';
import Addtocartpage from './pages/Addtocartpage';
import ProductDetailsPage from './pages/Productdetails';
import Braceletpage from './pages/Braceletpage';
import ComboBraceletPage from './pages/ComboBraceletPage';
import Yantra from './pages/Yantra';
import WomenBracelet from './pages/WomenBracelet';
import Gemstoneconsultation from './pages/Gemstoneconsultation';
import Rudrakhaconsultation from './pages/Rudrakhaconsultation';



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
        <Route path="/Addtocartpage" element={<Addtocartpage />} />
        <Route path="/rudraksha" element={<RudrakshaPage />} />
        <Route path="/gemstones" element={<Gemstones />} />
        <Route path="/bracelets" element={<Braceletpage />} />
        <Route path="/shopbuypurpose" element={<Shopbuypurpose />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/combobracelets" element={<ComboBraceletPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pyamind" element={<Pyamindpage />} />
        <Route path="/yantra" element={<Yantra />} />
        <Route path="/gemstoneconsultation" element={<Gemstoneconsultation />} />
        <Route path="/rudrakhaconsultation" element={<Rudrakhaconsultation />} />

        <Route path="/womenbracelet" element={<WomenBracelet />} />


        <Route path="/Addtocartpage" element={<Addtocartpage />} />
      </Route>

    </Routes>
  )
}

export default App
