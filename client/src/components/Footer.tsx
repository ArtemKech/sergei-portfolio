import React from "react";
import "../styles/Footer.css";
import instagram from "../assets/Contact/instagram.svg";
import whatsapp from "../assets/Contact/whatsapp.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer_social">
        <div className="footer_social_whatsapp">
          <img src={whatsapp} alt="WhatsApp" />
          <li>
            <a href="https://wa.me/79282281337">+7(928)-228-13-37</a>
          </li>
        </div>
        <div className="footer_social_inst">
          <img src={instagram} alt="Instagram" />
          <li>
            <a href="https://www.instagram.com/sergei.kechemaev/">
              sergei.kechemaev
            </a>
          </li>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="address_footer">Владивосток, ул. Жмышенковская</p>
        <p className="web_rights">
          © 2024 Sergey's Photographer Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
