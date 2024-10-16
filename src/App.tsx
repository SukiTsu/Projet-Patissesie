import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home/home';
import Shop from './page/shop/shop';
import Blog from './page/blog/blog';
import Contact from './page/contact/contact';
import ShopCategoryCake from './page/shop/shopCakeCategory';
import manager from "./page/shop/getData";
import { ReactElement, JSXElementConstructor, ReactNode, useState, useEffect } from "react";
import { JSX } from "react/jsx-runtime";
import Design from "./page/design/design";

function App() {

  const [newRoute, setNewRoute] = useState<JSX.Element[]>([]);
  useEffect(() => {
    async function createRoute() {
      const routes: JSX.Element[] = [];
      for (const [categorie, cakes] of manager.categoryMap.entries()) {
        routes.push(
          <Route key={categorie} path={`/shop/${categorie}`} element={<ShopCategoryCake categoryCake={categorie} />}/>
        );
      }
      setNewRoute(routes);
    }

    createRoute();
  }, [manager]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {newRoute}
        <Route path="/blog" element={<Blog />} />
        <Route path="/cake-design" element={<Design />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
