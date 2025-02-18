import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Product from "./pages/Product";
import Collection from "./pages/Collection";
import Care from "./pages/Care";

function App() {
  return (
    <div className="w-full">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/care" element={<Care />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
