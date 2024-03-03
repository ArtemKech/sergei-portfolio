import React from "react";
import "../styles/About.css";
import prof_pic_nb from "../assets/About/pfptouse.png";
import first_pic_collage from "../assets/About/2nd_pic_collage.png";
import second_pic_collage from "../assets/About/1st_pic_collage.png";
import third_pic_collage from "../assets/About/3rd_pic_collage.png";

const About: React.FC = () => {
  return (
    <div className="about_page">
      <div className="main_bio">
        <div className="front_about_me_description">
          <div className="intro">
            <h2 className="hello">Привет,</h2>
            <h2 className="my_name">
              меня зовут <span>Сергей</span>
            </h2>
          </div>
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
      <div className="second_bio_container">
        <div className="second_bio">
          <h2 className="second_bio_title">Моя история</h2>
          <p className="second_bio_description">
            Вырос в городе Москва, где и начал свою карьеру фотографа. Мои
            работы были опубликованы в различных журналах и книгах, а также
            использовались в рекламных кампаниях и на обложках альбомов. В
            настоящее время я работаю в различных жанрах, таких как портретная,
            свадебная, репортажная и архитектурная фотография. Мои работы
            отличаются своей яркостью и оригинальностью, а также тем, что они
            всегда передают атмосферу момента, который является ключевым в моей
            работе.
          </p>
        </div>
        <div className="collage_for_2nd_bio">
          <img
            src={first_pic_collage}
            alt="1st_pic"
            className="first_bio_pic"
          ></img>
          <div className="collage_column">
            <img
              src={second_pic_collage}
              alt="2nd_pic"
              className="second_bio_pic"
            ></img>
            <img
              src={third_pic_collage}
              alt="3rd_pic"
              className="third_bio_pic"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
