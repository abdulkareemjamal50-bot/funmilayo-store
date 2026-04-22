import React from "react";
import pic from "./assets/whole.jpg";
import logo from "./assets/reta.png";
import omni from "./assets/omni.png";
import money from "./assets/money.png";

const About = () => {
  return (
    <div>
      <div className="about"></div>
      <div className="flex2">
        <img className="autorotate"
          style={{ width: "400px", height: "430px", paddingTop: "40px" }}
          src={logo}
          alt=""
        />
        <div>
          <h6 style={{ color: "orange" }}>EASE & SPEED</h6>
          <h1
            style={{
              color: "lightseagreen",
              lineHeight: "1.5",
              gap: "3",
              fontFamily: "-apple-system",
            }}
          >
            {" "}
            A simpler and smarter way <br /> to do business
          </h1>
          <p>
            <span style={{ color: "darkgreen" }}>FUNMILAYO STORE</span> makes it easy for retailers to restock their <br />{" "}
            inventory in record time and at no cost
          </p>
        </div>
      </div>
      <div className="flex2">
        <div>
          <h6 style={{ color: "orange" }}>WIDE INVENTORY</h6>
          <h1
            style={{
              color: "lightseagreen",
              lineHeight: "1.5",
              gap: "3",
              fontFamily: "-apple-system",
            }}
          >
            Gain access to broad <br /> range of products
          </h1>
          <p>
            Get access to a wide range of products from your favourite <br />
            brands in one convenient place
          </p>
        </div>
        <div>
          <img className="autorotate"
            style={{ width: "400px", height: "430px", paddingTop: "40px" }}
            src={omni}
            alt=""
          />
        </div>
      </div>
      <div className="flex2">
        <img className="autorotate"
          style={{ width: "400px", height: "430px", paddingTop: "40px" }}
          src={money}
          alt=""
        />
        <div>
          <h6 style={{ color: "orange" }}>BUY NOW, PAY LATER</h6>
          <h1
            style={{
              color: "lightseagreen",
              lineHeight: "1.5",
              gap: "3",
              fontFamily: "-apple-system",
            }}
          >
            Do even more with your <br /> Credit option
          </h1>
          <p>
            Never run out of stock because you are low on cash. <br /> With <span style={{ color: "darkgreen" }}>FUNMILAYO STORE,</span> you can buy now and pay later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
