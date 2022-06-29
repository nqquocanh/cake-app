import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <img alt="" src={require("../../assets/logo-1.png")}></img>
          <p>Copyrights © 2019 by Poeme Bakery.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
