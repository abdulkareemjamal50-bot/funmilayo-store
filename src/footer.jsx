import React from "react";
import funmi from "./assets/funmi.png";
import { RiEBike2Fill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { GiReceiveMoney } from "react-icons/gi";
const Footer = () => {
  return (
    <div>
      <footer>
        <section>
          <div className="flex0">
            <img className="funm" src={funmi} alt="" />
            <h4 className="foot">
              Funmilayo Store provides fresh groceries, beverages, dairy
              products, snacks, and household essentials at affordable prices
              for every home.
            </h4>
          </div>
          <div className="flex3">
            <div>
              <h2>Quick Navigation Links</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
                <li>Cart</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h2>Product Categories Section</h2>
              <ul>
                <li>Beverages</li>
                <li>Diary Products</li>
                <li>Snacks</li>
                <li>Groceries</li>
                <li>Household Essentials</li>
              </ul>
            </div>
            <div>
              <h2>Contact Information</h2>
              <ul>
                <li>Location: 58,Adeshina Street,ijeshatedo,Lagos</li>
                <li>Phone: (+234) 8027581870</li>
                <li>Email: abdulkareemjamal50@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="flex6">
            <div className="flex4">
              <TiShoppingCart className="del" />
              <h4>Shop With Us</h4>
            </div>
            <div className="flex4">
              <GiReceiveMoney className="del" />
              <h4>Affordable Prices</h4>
            </div>
            <div className="flex4">
              <RiEBike2Fill className="del" />
              <h4>Fast Delivery Within Lagos</h4>
            </div>
          </div>
          <hr />
        </section>
        <div className="dive">
          <h4 style={{ color: "aliceblue" }}>
            Allright Reserved © {new Date().getFullYear()}
            <span style={{ color: "skyblue" }}> IYANDA001</span>
          </h4>
          <ul className="sixth-selection">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
