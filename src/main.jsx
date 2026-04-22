import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./navbar.jsx";
import About from "./About.jsx";
import Categories from "./categories.jsx";
import Cart from "./cart.jsx";
import Contact from "./contact.jsx";
import Footer from "./footer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="categories" element={<Categories />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="contact" element={<Contact />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>,
);
