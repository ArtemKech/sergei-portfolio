import React from "react";
import "../../styles/Portfolio.css";
import custom_photoshoot from "../../assets/Portfolio/MainSlider/custom_photoshoot.png";
import group_photoshoot from "../../assets/Portfolio/MainSlider/group_photoshoot.png";
import halloween_photoshoot from "../../assets/Portfolio/MainSlider/halloween_photoshoot.png";
import newyear_photoshoot from "../../assets/Portfolio/MainSlider/newyear_photoshoot.png";
import private_photoshoot from "../../assets/Portfolio/MainSlider/private_photoshoot.png";
import school_photoshoot from "../../assets/Portfolio/MainSlider/school_photoshoot.png";

const Portfolio: React.FC = () => {
  interface Images {
    name: string;
    image: string;
    link: string;
    description: string;
  }
  const images: Images[] = [
    {
      name: "Тематический",
      image: custom_photoshoot,
      link: "/portfolio/custom_photoshoot",
      description:
        "Тематический фотосет это уникальная возможность создать неповторимые фотографии в стиле, который вам нравится. Это может быть фотосессия в стиле ретро, стимпанк, киберпанк, фэнтези, косплей и многое другое. Ваша фантазия не имеет границ, и я помогу вам воплотить ваши идеи в жизнь.",
    },
    {
      name: "Групповой",
      image: group_photoshoot,
      link: "/portofolio/group_photoshoot",
      description:
        "Групповой фотосет это отличная возможность создать красивые и яркие фотографии вместе с друзьями или коллегами. Это может быть фотосессия на природе, в студии или в любом другом месте, которое вам нравится. Я помогу вам выбрать лучший вариант и создать красивые фотографии, которые вы будете с удовольствием смотреть и показывать друзьям.",
    },
    {
      name: "Школьный",
      image: school_photoshoot,
      link: "/portfolio/school_photoshoot",
      description:
        "Школьный фотосет завпечатлит ваши самые памятные моменты в школе. Это может быть фотосессия на выпускном вечере, в день знаний или в любой другой день, который вам нравится. Я помогу вам создать красивые и яркие фотографии, которые вы будете с удовольствием смотреть и показывать друзьям.",
    },
    {
      name: "Новый Год",
      image: newyear_photoshoot,
      link: "/portfolio/newyear_photoshoot",
      description:
        "В предверии нового года я предлагаю вам уникальную возможность создать красивые и яркие фотографии, которые станут отличным подарком для вас и ваших близких. Это может быть фотосессия в студии, на улице или в любом другом месте, которое вам нравится. Я помогу вам выбрать лучший вариант и создать красивые фотографии, которые вы будете с удовольствием смотреть и показывать друзьям.",
    },
    {
      name: "Индивидуальный",
      image: private_photoshoot,
      link: "/portfolio/private_photoshoot",
      description:
        "Здесь могут быть ваши фотографии на любую тему и в любом стиле. Ваши идеи и мои навыки помогут вам создать уникальные и красивые фотографии, которые вы будете с удовольствием смотреть и показывать друзьям.",
    },
    {
      name: "Праздничный",
      image: halloween_photoshoot,
      link: "/portfolio/halloween_photoshoot",
      description:
        "Праздничный фотосет всегда радует глаз и создает праздничное настроение. Это может быть фотосессия на Хэллоуин, на День Рождения, на 8 Марта или на любой другой праздник, который вам нравится. Я помогу вам создать красивые и яркие фотографии, которые вы будете с удовольствием смотреть и показывать друзьям.",
    },
  ];

  return (
    <div className="port_container">
      {images.map((item, index) => (
        <div key={index} className="port_section">
          <img src={item.image} alt={item.name} className="port_section_pic" />
          <span className="port_section_name">{item.name}</span>
          <div className="port_section_description">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
