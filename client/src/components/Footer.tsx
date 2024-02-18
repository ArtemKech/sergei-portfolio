import React from "react";
import "../styles/Footer.css";
import instagram from "../assets/Contact/instagram.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <p>This is the footer of the website.</p>
        <div className="social-icons">
          {/* Add Instagram SVG here */}
          <img src={instagram} alt="Instagram" className="social-icon" />

          {/* Add other social media icons as needed */}
        </div>
        <p>© 2022 Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
