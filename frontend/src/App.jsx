import { Routes, Route } from "react-router";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Catalog from "./Catalog/Catalog";
import Footer from "./Footer/Footer";
import { createContext, useState } from "react";
export const CartProps = createContext(() => {});
function App() {
  const [cartCount, setCount] = useState(0);
  return (
    <CartProps.Provider value={{ setCount, cartCount }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </CartProps.Provider>
  );
}
export default App;
