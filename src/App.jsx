import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import "./index.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Product from "./pages/Product";
import Collection from "./pages/Collection";
import OurCandles from "./pages/OurCandles";
import Footer from "./components/Footer";
import ProductInfo from "./pages/ProductInfo";
import CollectionInfo from "./pages/CollectionsInfo";

function App() {
  return (
    <div className="w-full">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/ourCandles" element={<OurCandles />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<ProductInfo />} />
        <Route path="/collection/:collectionId" element={<CollectionInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
