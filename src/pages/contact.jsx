import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

function Contact() {
  return (
    <div className="con">
      <div className="loc">
        <h1>Locate Us </h1>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.224504565368!2d3.325181073974562!3d6.493233523516427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ebaa391748b%3A0x982d9a70d2c0d5!2s58%20Adeshina%20St%2C%20Ijesha%20Rd%2C%20Surulere%2C%20Lagos%20101283%2C%20Lagos!5e0!3m2!1sen!2sng!4v1776250929332!5m2!1sen!2sng"
            className="map"
            width=""
            height=""
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="row submit pb-4">
        {/* LEFT SIDE - FORM */}
        <h1 className="  contact pt-5 pb-5  text-center">Contact Us</h1>

        <h2 className=" rch pb-3 ps-5 ">
          Reach out to us at FUNMILAYO STORE :
        </h2>
        <div className=" form col-md-7 ps-3">
          <form className="frm">
            {/* Username */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Customer Name"
                style={{
                  height: "55px",
                  borderRadius: "6px",
                  backgroundColor: "#e9e9e9",
                }}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="email"
                style={{
                  height: "55px",
                  borderRadius: "6px",
                  backgroundColor: "#e9e9e9",
                }}
              />
            </div>

            {/* Subject */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="product"
                style={{
                  height: "55px",
                  borderRadius: "6px",
                  backgroundColor: "#e9e9e9",
                }}
              />
            </div>

            {/* Message */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="message"
                style={{
                  height: "55px",
                  borderRadius: "6px",
                  backgroundColor: "#e9e9e9",
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="contact-button w-100"
              style={{
                height: "50px",
                borderRadius: "6px",
              }}
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - CONTACT INFO */}
        <div
          className="col-md-5 d-flex flex-column justify-content-center"
          style={{ paddingLeft: "40px" }}
        >
          <div className="pb-2">
            <div className="d-flex align-items-center gap-1">
              <IoLogoWhatsapp className="fs-2" />
              <h5 style={{ fontWeight: "600" }}>Chat on WhatsApp</h5>
            </div>
            <p  className="text" style={{ margin: 0 }}>
              <a href="https://Wa.me/+2349024759576" target="_blank">
                (+234) 9024759576
              </a>
            </p>
          </div>
          <div className="pb-2">
            <div className="d-flex align-items-center gap-1">
              <FaFacebook className="fs-2" />
              <h5 style={{ fontWeight: "600" }}>Facebook</h5>
            </div>
            <p className="text" style={{ margin: 0 }}>
              <a
                href="https://www.facebook.com/share/1Dk782d8uC/?mibextid=wwXIfr"
                target="_blank"
              >
                {" "}
                Funmilayo Store
              </a>
            </p>
          </div>
          <div className="pb-2">
            <div className="d-flex align-items-center gap-1">
              <FaSquareInstagram className="fs-2" />
              <h5 style={{ fontWeight: "600" }}>Instagram</h5>
            </div>
            <p className="text" style={{ margin: 0 }}>
              <a href="https://www.instagram.com/iyanda_0.0.1?igsh=NzV0bDN6cWJwY2xn&utm_source=qr">
                FunmilayoStore058
              </a>
            </p>
          </div>
          {/* Phone */}
          <div className="pb-2">
            <div className="d-flex align-items-center gap-1">
              <FaPhoneVolume className="fs-2" />
              <h5 style={{ fontWeight: "600" }}>Phone</h5>
            </div>
            <p className="text" style={{ margin: 0 }}>
              (+234) 7065345712
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="d-flex align-items-center gap-1">
              <MdMarkEmailUnread className="fs-2" />
              <h5 style={{ fontWeight: "600" }}>Email</h5>
            </div>
            <p className="text" style={{ margin: 0 }}>
              <a href="mailto:abdulkareemjamal50@gmail.com">
                abdulkareemjamal50@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
