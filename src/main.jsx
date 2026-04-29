import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/navbar.jsx";
import About from "./pages/About.jsx";
import Categories from "./pages/categories.jsx";
import Cart from "./components/cart.jsx";
import Contact from "./pages/contact.jsx";
import Footer from "./components/footer.jsx";
import JobApplication from "./pages/apply.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/categories" element={<Categories />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path= "/JobApplication" element={<JobApplication />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>,
);
