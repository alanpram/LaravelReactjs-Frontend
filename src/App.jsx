import React from "react";
import Navbar from "./layout/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Store from "./pages/Store";
import Footer from "./layout/FooterComp";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product-list/:category" element={<ProductList />} />
          <Route path="/product-detail/:item_slug" element={<ProductDetail />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;