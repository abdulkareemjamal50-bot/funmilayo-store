import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router";
import { FaTruck, FaLock, FaTags, FaHeadset } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "../assets/products.jpg";
import Image2 from "../assets/ing.jpg";
import Image3 from "../assets/waw.webp";
import image from "../assets/juy.png";
import image4 from "../assets/arla.jpg";
import image5 from "../assets/dangote.svg";
import image6 from "../assets/golden.jpg";
import image7 from "../assets/indo.png";
import image8 from "../assets/dufil.jpg";
import image9 from "../assets/uni1.png";
import image10 from "../assets/pk.png";
import image11 from "../assets/nestle.png";
import { BiFontFamily } from "react-icons/bi";

const Main2 = () => {
  return (
    <div className="main">
      <h3 className="autoshow">
        <span style={{ color: "green" }}>FUNMILAYO STORE,</span> A PLACE WHERE
        YOUR<span style={{ color: "green" }}> SATISFACTION</span> IS OUR{" "}
        <span style={{ color: "green" }}> PRIORITY</span> <br /> & YOUR
        <span style={{ color: "green" }}> DEMAND</span> IS OUR{" "}
        <span style={{ color: "green" }}> SUPPLY</span>. <br />{" "}
        <span style={{ color: "green" }}>FUNMILAYO STORE</span> makes it easy
        for retailers to restock <br />
        their inventory in record time and at no{" "}
        <span style={{ color: "red" }}> extra costs.</span>
      </h3>
      <div className="nrow">
        <Row className="g-4">
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center p-3">
              <FaTruck size={40} className="text-success mx-auto mb-3" />
              <Card.Title>Fast Delivery</Card.Title>
              <Card.Text>
                Get your groceries delivered quickly to your doorstep.
              </Card.Text>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center p-3">
              <FaLock size={40} className="text-success mx-auto mb-3" />
              <Card.Title>Secure Payments</Card.Title>
              <Card.Text>
                Shop confidently with safe and protected transactions.
              </Card.Text>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="shadow-sm border-0 text-center p-3">
              <FaHeadset size={40} className="text-success mx-auto mb-3" />
              <Card.Title>24/7 Support</Card.Title>
              <Card.Text>
                Our support team is always ready to assist you anytime.
              </Card.Text>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center p-3">
              <FaTags size={40} className="text-success mx-auto mb-3" />
              <Card.Title>Affordable Prices</Card.Title>
              <Card.Text>
                Enjoy the best market prices on everyday essentials.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </div>

      <div>
        <h3 className="pro">OUR PRODUCTS</h3>
      </div>
      <div className="flex">
        <div>
          <img
            src={Image}
            alt=""
            style={{ width: "250px", height: "300px", borderRadius: "20px" }}
          />
          <p>BEVERAGES</p>
        </div>
        <div>
          <img
            src={Image2}
            alt=""
            style={{ width: "250px", height: "300px", borderRadius: "20px" }}
          />
          <p>GROCERIES</p>
        </div>
        <div>
          <img
            src={Image3}
            alt=""
            style={{ width: "270px", height: "300px", borderRadius: "20px" }}
          />
          <p>HOUSEHOLD ESSENTIALS</p>
        </div>
      </div>
      <div>
        <div className="fourth-style">
          <div>
            <h2>
              Join over <span style={{ color: "green" }}>120,000</span>{" "}
              retailers doing business the smarter and easier way.
            </h2>
            <button>
              <a href="http://www.w3schools.com" target="blank">
                Download the App &rarr;
              </a>
            </button>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="container text-center my-5">
        <h2 className=" prot mb-4 pt-5">Trusted By Top Brands</h2>

        <div className="row ">
          <div className="col">
            <img src={image11} alt="Nestle" width="150" />
          </div>

          <div className="col">
            <img src={image10} alt="Peak Milk" width="140" />
          </div>

          <div className="col">
            <img src={image9} alt="unilever" width="150" />
          </div>

          <div className="col">
            <img src={image5} alt="Dangote" width="150" />
          </div>
        </div>
      </div>
      <div style={styles.careerBox}>
        <h1>We’re Hiring!</h1>
        <h4>Interested in working with us? Apply today and join our team.</h4>

        <NavLink to="/JobApplication" style={styles.button}>
          <h5 style={{ color: "white" }}>Apply for a Job &rarr;</h5>
        </NavLink>
      </div>
    </div>
  );
};
const styles = {
  careerBox: {
    backgroundColor: "rgba(0, 0, 0, 0.171);",

    textAlign: "center",
    borderRadius: "10px",
    marginTop: "40px",
    color: "rgba(3, 58, 58, 0.842)",
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "lightseagreen",
    textColor: "white",
    textDecoration: "none",
    borderRadius: "7px",
    fontWeight: "bold",
  },
};
export default Main2;
