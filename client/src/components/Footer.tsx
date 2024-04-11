import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Footer.css";
import instagram from "../assets/Contact/instagram.svg";
import whatsapp from "../assets/Contact/whatsapp.svg";
import maps from "../assets/Contact/map.svg";

const Footer: React.FC = () => {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const at_top = window.scrollY !== 0;
      setShowBackToTop(at_top);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <footer className="footer">
      <div className="footer_bottom">
        <p className="address_footer">Владивосток, ул. Жмышенковская</p>
        <div className="footer_social">
          <div className="footer_social_whatsapp">
            <li>
              <a href="https://www.instagram.com/sergei.kechemaev/">
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
          </div>
          <div className="footer_social_inst">
            <li>
              <a href="https://wa.me/79282281337">
                <img src={whatsapp} alt="WhatsApp" />
              </a>
            </li>
          </div>
          <div className="footer_social_maps">
            <li>
              <a href="https://www.google.com/maps/place/Chebureki+S+Pylu+S+Zharu/@43.1064372,131.9390963,17.25z/data=!4m6!3m5!1s0x5fb393b680763adb:0xc8f662549a92f128!8m2!3d43.106183!4d131.9415515!16s%2Fg%2F11p4zg26wk?entry=ttu">
                <img src={maps} alt="Location" />
              </a>
            </li>
          </div>
        </div>
        <p className="web_rights">
          © 2024 Sergey's Photographer Website. All rights reserved.
        </p>
      </div>
      <button
        id="back_to_top"
        className={
          showBackToTop
            ? "bring_to_top_button show"
            : "bring_to_top_button hide"
        }
        title="Go to top"
        onClick={scrollToTop}
      >
        &#8593;
      </button>
    </footer>
  );
};

export default Footer;
