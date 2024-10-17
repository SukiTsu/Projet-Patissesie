import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home/home';
import Shop from './page/shop/shop';
import InstagramFeed from './page/shop/shop2';
import Blog from './page/blog/blog';
import Contact from './page/contact/contact';
import ShopCategoryCake from './page/shop/shopCakeCategory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/rollcake" element={<ShopCategoryCake categoryCake='rollcake' />} />
        <Route path="/shop/cakedesign" element={<ShopCategoryCake categoryCake='cakedesign' />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
