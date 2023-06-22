import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import SingleFood from "./pages/SingleFood";
import Banner from "./components/Banner";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

function App() {
  const [data, setData] = useState<any>([]);

  return (
    <div>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals/:name" element={<SearchResults />} />
        <Route path="/meal/:id" element={<SingleFood />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
