import React, { useState } from "react";
import "../../styles/Portfolio.css";
import custom_photoshoot from "../../assets/Portfolio/MainSlider/custom_photoshoot.png";
import group_photoshoot from "../../assets/Portfolio/MainSlider/group_photoshoot.png";
import halloween_photoshoot from "../../assets/Portfolio/MainSlider/halloween_photoshoot.png";
import newyear_photoshoot from "../../assets/Portfolio/MainSlider/newyear_photoshoot.png";
import private_photoshoot from "../../assets/Portfolio/MainSlider/private_photoshoot.png";
import school_photoshoot from "../../assets/Portfolio/MainSlider/school_photoshoot.png";

const Portfolio: React.FC = () => {
  const images = [
    { name: "Custom", type: "web3 Developer", image: custom_photoshoot },
    { name: "Group", type: "wordpress Developer", image: group_photoshoot },
    { name: "School", type: "java Developer", image: school_photoshoot },
    { name: "New Year", type: "web Developer", image: newyear_photoshoot },
    { name: "Private", type: "php Developer", image: private_photoshoot },
    { name: "Halloween", type: "seo Developer", image: halloween_photoshoot },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="portfolio_container">
      <section className="slider_container_portfolio">
        <div className="slider_portfolio_images">
          {images.map((item, index) => (
            <div
              key={index}
              className={`slider_img_portfolio ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={item.image}
                alt={item.name}
                className={activeIndex === index ? "active" : ""}
              />
              <h1
                className={`section_details_portfolio_h1 ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                {item.name}
              </h1>
              <div className="section_details_portfolio">
                <h2 className="section_details_portfolio_h2">{item.name}</h2>
                <p>{item.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
