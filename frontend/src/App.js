import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Header from "./component/layout/header/Header.js"
import Footer from "./component/layout/footer/Footer.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import WebFont from "webfontloader"
import Home from "./component/home/Home.js"
import About from "./component/layout/about/About.js";
import Contact from './component/layout/contact/Contact.js';
import Popular from './component/popular/Popular.js';
import ProductDetails from "./component/Product/ProductDetails.js"
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, [])

  return (
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/product/:id" element={<ProductDetails/>} />
          <Route exact path="/popular" element={<Popular/>} />
        </Routes>
        <ScrollToTop/>
      <Footer />
    </Router>
  );
}

export default App;
