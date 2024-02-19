import { useState, useEffect } from "react";
import Reviews from "./Reviews";
import Collage from "./Collage";
import "../styles/Home.css";
import photo_1 from "../assets/home/photo_1.jpg";
import profile_pic from "../assets/About/circle_prof_pic.jpg";
import slider_1 from "../assets/home/slider_1.jpg";
import slider_2 from "../assets/home/slider_2.jpg";
import slider_3 from "../assets/home/slider_3.png";
import slider_4 from "../assets/home/slider_4.jpg";

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [slider_1, slider_2, slider_3, slider_4];

  useEffect(() => {
    const textElement = document.querySelector(
      ".text_for_spiner"
    ) as HTMLElement;

    if (textElement) {
      const newText = textElement.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 4.5}deg)">${char}</span>`
        )
        .join("");

      textElement.innerHTML = newText;
    }
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="home_page">
      <div className="image_container_front">
        <div className="text_front_image">
          <div className="text_front_image_main">Привет, меня зовут Сергей</div>
          <div className="text_front_subtext">
            Ловлю моменты, создаю воспоминания
          </div>
        </div>
        <img src={photo_1} alt="front_image" />
      </div>
      <div className="bio">
        <div className="circle_spinner">
          <img className="circle_profile_pic" src={profile_pic}></img>
          <p className="text_for_spiner">20 • ЛЕТ • В • ФОТО • ИНДУСТРИИ •</p>
        </div>
        <p className="description_line_profile_pic">
          "Добро пожаловать в мой мир, где каждый кадр - это история. Я,
          специализируюсь на школьных и детских фотосессиях, a также создании
          неповторимых образов в модельных и индивидуальных фотосетах.
          Доверьтесь мне оживить ваши моменты, создавая фотографии, которые
          останутся в памяти навсегда."
        </p>
      </div>
      <div className="image_container">
        <button className="left" onClick={handlePrevImage}>
          &larr;
        </button>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
        <button className="right" onClick={handleNextImage}>
          &rarr;
        </button>
      </div>
      <h2 className="description_collage">ОТЗЫВЫ ЗАКАЗЧИКОВ:</h2>
      <Reviews />
      <Collage />
    </div>
  );
};

export default Home;
