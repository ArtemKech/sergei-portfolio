import React from "react";
import "../styles/About.css";
import prof_pic_nb from "../assets/About/pfptouse.png";
const About: React.FC = () => {
  return (
    <div className="about_page">
      <div className="main_bio">
        <div className="intro">
          <h2 className="hello">Привет,</h2>
          <h2 className="my_name">
            меня зовут <span>Сергей</span>
          </h2>
          <p className="about_me_description">
            Занимаюсь фотографированием больше 20 лет, начав свой путь как
            хобби, которое постепенно переросло в профессиональную деятельность.
            С течением времени, углубляясь в изучение техники съемки, композиции
            и обработки фотографий, я смог создать свой уникальный стиль,
            который выделяет мои работы среди других.
          </p>
        </div>

        <img src={prof_pic_nb} alt="pfp_nb" className="pfp_nb" />
      </div>
    </div>
  );
};

export default About;
