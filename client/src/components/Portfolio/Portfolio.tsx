import React from "react";
import "../../styles/Portfolio.css";
import custom_photoshoot from "../../assets/Portfolio/MainSlider/custom_photoshoot.png";
import group_photoshoot from "../../assets/Portfolio/MainSlider/group_photoshoot.png";
import halloween_photoshoot from "../../assets/Portfolio/MainSlider/halloween_photoshoot.png";
import newyear_photoshoot from "../../assets/Portfolio/MainSlider/newyear_photoshoot.png";
import private_photoshoot from "../../assets/Portfolio/MainSlider/private_photoshoot.png";
import school_photoshoot from "../../assets/Portfolio/MainSlider/school_photoshoot.png";

const Portfolio: React.FC = () => {
  const images = [
    {
      name: "Custom",
      image: custom_photoshoot,
      link: "/portfolio/custom_photoshoot",
    },
    {
      name: "Group",
      image: group_photoshoot,
      link: "/portofolio/group_photoshoot",
    },
    {
      name: "School",
      image: school_photoshoot,
      link: "/portfolio/school_photoshoot",
    },
    {
      name: "New Year",
      image: newyear_photoshoot,
      link: "/portfolio/newyear_photoshoot",
    },
    {
      name: "Private",
      image: private_photoshoot,
      link: "/portfolio/private_photoshoot",
    },
    {
      name: "Halloween",
      image: halloween_photoshoot,
      link: "/portfolio/halloween_photoshoot",
    },
  ];

  return (
    <div>
      <ul className="port_container">
        {images.map((item, index) => (
          <li key={index} className="port_section">
            <a href={item.link} className="port_section_link">
              <img
                src={item.image}
                alt={item.name}
                className="port_section_pic"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
