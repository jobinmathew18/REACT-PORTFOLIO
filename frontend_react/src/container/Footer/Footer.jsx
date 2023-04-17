import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import images from "../../constants/images";
import "./Footer.scss";
import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  // console.log(name, email, message)

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);

    }); 
  };

  return (
    <>
      <h2 className="head-text light" style={{ color: "rgb(158, 149, 149)" }}>
        Take a coffee & chat with me
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email2} alt="email" />
          <a href="mailto:hello@gmail.com" className="p-text">
            jobin.mathew364@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91 9540992369" className="p-text">
            +91 9540992369
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              className="p-text"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              className="p-text"
            />
          </div>
          <div>
            <textarea
              name="message"
              onChange={handleChangeInput}
              className="p-text"
              placeholder="Your message"
              value={message}
              rows={7}
            />
          </div>
          {name && email && message ? (
            <button type="button" className="p-text" onClick={handleSubmit}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          ) : (
            <button
              disabled
              type="button"
              className="p-text"
              onClick={handleSubmit}
              style={{cursor: "not-allowed"}}
            >
              Send Message
            </button>
          )}
        </div>
      ) : (
        <div>
          <h3 className="head-text" style={{ color: "rgb(158, 149, 149)" }}>
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);
