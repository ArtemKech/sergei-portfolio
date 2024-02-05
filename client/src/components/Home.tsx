import { useState, useEffect } from "react";
import "../styles/Home.css";
import photo_1 from "../assets/home/photo_1.jpg";
import photo_2 from "../assets/home/photo_2.jpg";

import profile_pic from "../assets/About/circle_prof_pic.jpg";

import slider_1 from "../assets/home/slider_1.jpg";
import slider_2 from "../assets/home/slider_2.jpg";
import slider_3 from "../assets/home/slider_3.png";
import slider_4 from "../assets/home/slider_4.jpg";

import collage_1 from "../assets/home/collage_1.jpg";
import collage_2 from "../assets/home/collage_2.jpg";
import collage_3 from "../assets/home/collage_3.jpg";
import collage_4 from "../assets/home/collage_4.jpg";
import collage_5 from "../assets/home/collage_5.jpg";
import collage_6 from "../assets/home/collage_6.jpg";
import collage_7 from "../assets/home/collage_7.jpg";

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [slider_1, slider_2, slider_3, slider_4]; // Add more images as needed

  useEffect(() => {
    const textElement = document.querySelector(
      ".text_for_spiner"
    ) as HTMLElement;

    if (textElement) {
      const newText = textElement.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`
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
          <div>Привет, меня зовут Сергей</div>
          <div className="subtext">Ловлю моменты, создаю воспоминания</div>
        </div>
        <img src={photo_1} alt="First Image" />
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
      <p className="description_collage">
        Тут должен быть долгий, длинющий, красивый текст про детские фотоссесии,
        про то, как же было бы замечательно его купить, и что у нас есть
        тематические фотографии, но так как я ничего не смог придумать - его нет
        :)
      </p>

      <div className="collage_container">
        {/* single image row */}
        <figure>
          <div className="post-image">
            <img src={collage_1} alt="Collage Image 1" />
          </div>
          <div className="post-image">
            <img src={collage_2} alt="Collage Image 1" />
          </div>
        </figure>
        {/* triple image row */}
        <figure>
          <div className="post-image">
            <img src={collage_5} alt="Collage Image 4" />
          </div>
          <div className="post-image">
            <img src={collage_6} alt="Collage Image 5" />
          </div>
          <div className="post-image">
            <img src={collage_7} alt="Collage Image 6" />
          </div>
        </figure>
        {/* double image row */}
        <figure>
          <div className="post-image">
            <img src={collage_3} alt="Collage Image 2" />
          </div>
          <div className="post-image">
            <img src={collage_4} alt="Collage Image 3" />
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Home;
