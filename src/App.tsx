import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home/home';
import Shop from './page/shop/shop';
import InstagramFeed from './page/shop/shop2';
import Blog from './page/blog/blog';
import Contact from './page/contact/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
