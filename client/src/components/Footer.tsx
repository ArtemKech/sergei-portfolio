import React, { useEffect } from "react";
import "../styles/Footer.css";
import instagram from "../assets/Contact/instagram.svg";
import whatsapp from "../assets/Contact/whatsapp.svg";
import maps from "../assets/Contact/map.svg";

const Footer: React.FC = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const back_to_top = document.getElementById("back_to_top");

    window.onscroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Checks if near the bottom of the page
      if (scrollY + windowHeight >= documentHeight - 1200) {
        if (back_to_top) {
          back_to_top.style.display = "block";
        }
      } else {
        if (back_to_top) {
          back_to_top.style.display = "none";
        }
      }
    };

    back_to_top?.addEventListener("click", scrollToTop);

    return () => {
      window.onscroll = null; // Remove the scroll event listener when the component unmounts
      back_to_top?.removeEventListener("click", scrollToTop);
    };
  }, []);

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
        className="bring_to_top_button"
        title="Go to top"
      >
        &#8593;
      </button>
    </footer>
  );
};

export default Footer;
