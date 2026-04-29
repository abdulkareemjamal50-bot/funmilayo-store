import React from "react";
import  Carousel from "react-bootstrap/Carousel";
import funmi from "../assets/life.jpg"
import funmi2 from "../assets/funmi1.png"
import funmi3 from "../assets/funmi2.png"
import { NavLink } from "react-router";

const Header = () => {
  return(
   <header>
    <div>
     < Carousel data-bs-theme="light">
        <Carousel.Item>
          <div className="carousel-wrapper">
            <div>
              <img
                className="header-images d-block w-100"
                src={funmi}
                alt="First slide"
              />
            </div>
            <div className="overlay"></div>
            <Carousel.Caption>
               <h2 className="h2">
      WELCOME TO FUNMILAYO STORE
    </h2>
    <button className="but">
      <NavLink to="/cart"> Order from us &rarr;</NavLink>
    </button>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <div className="carousel-wrapper">
              <img
                className="header-images d-block w-100"
                src={funmi2}
                alt="Second slide"
              />
            </div>
            <div className="overlay"></div>
            <Carousel.Caption>
              <h1 className="h1">Buy From us now without hesitation</h1>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <div className="carousel-wrapper">
              <img
                className="header-images d-block w-100"
                src={funmi3}
                alt="Third slide"
              />
            </div>
            <div className="overlay"></div>
            <Carousel.Caption>
              <h1 className="h1">Quality goods & items you can trust</h1>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  </header>);
};

export default Header;
