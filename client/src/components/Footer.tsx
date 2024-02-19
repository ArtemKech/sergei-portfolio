import React from "react";
import "../styles/Footer.css";
import instagram from "../assets/Contact/instagram.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer_social_icons">
        <img src={instagram} alt="Instagram" className="footer_social_inst" />
      </div>
      <p className="web_rights">
        © 2024 Sergey's Photographer Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
