import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS.</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>AIHub.</h1>
        <p>We aim to provide you hands-on experience with various AI models.</p>

        <p>Copyrights 2024 &copy; SoojalSingh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/soojal777">Instagram</a>
        <a href="https://www.linkedin.com/in/soojal-singh-2a62b2225/">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;