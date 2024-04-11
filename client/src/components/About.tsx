import React from "react";
import "../styles/About.css";
import prof_pic_nb from "../assets/About/pfptousenew.png";
import camera_icon from "../assets/About/camera_icon.svg";

const About: React.FC = () => {
  interface RoadMap {
    header: string;
    location: string;
    description: string;
    date: Date;
  }
  const roadMap: RoadMap[] = [
    {
      header: "Первые шаги",
      location: "Пятигорск, Россия",
      description:
        "Мои первые шаги в фотографии я начал в 2000 году, когда мне подарили первую камеру. С тех пор я начал изучать технику съемки, композицию и обработку фотографий. Так же я начал участвовать в различных фотоконкурсах и выставках. И хотя мои работы не всегда побеждали, я продолжал учиться и развиваться. Это стало основой для моего долгого и интересного пути в мире фотографии.",
      date: new Date(2000, 1, 1),
    },
    {
      header: "Первые работы",
      location: "Москва, Россия",
      description:
        "В 2005 году я начал делать первые работы на заказ. Это были фотосессии для друзей и знакомых, а также фотографии на свадьбы и праздники. Этот период моей деятельности позволил мне набраться опыта и уверенности в своих силах.",
      date: new Date(2005, 1, 1),
    },
    {
      header: "Профессиональная деятельность",
      location: "Окленд, Новая Зеландия",
      description:
        "В 2010 году я начал работать фотографом в профессиональной студии. За это время я сделал множество фотосессий для различных клиентов и сотрудничал с различными изданиями. Полученный опыт позволил мне развивать свое мастерство и улучшать качество своих работ.",
      date: new Date(2010, 1, 1),
    },
    {
      header: "Собственная студия",
      location: "Владивосток, Россия",
      description:
        "В 2015 году я открыл свою собственную студию. За это время я сделал множество фотосессий для различных клиентов и сотрудничал с различными изданиями. Открытие собственной студии стало для меня важным шагом в развитии своего бизнеса и укреплению своего имени в мире фотографии.",
      date: new Date(2015, 1, 1),
    },
    {
      header: "Данный момент",
      location: "Владивосток, Россия",
      description:
        "Сегодня я продолжаю заниматься фотографией и развиваться в этом направлении. Моя работа приносит мне удовольствие и радость, и я надеюсь, что она приносит радость и моим клиентам. Благодаря накопленному опыту и постоянному стремлению к совершенствованию, я продолжаю улучшать свои навыки и создавать качественные фотографии.",
      date: new Date(),
    },
  ];

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
        <img src={camera_icon} alt="camera_icon" className="camera_icon" />
      </div>
      <article className="roadmap_container">
        {roadMap.map((item, index) => {
          return (
            <ul className="roadmap_item" key={index}>
              <div className="roadmap_header">
                <h3>{item.header}</h3>
                <p>{item.date.toLocaleDateString()}</p>
              </div>
              <h4>{item.location}</h4>
              <p>{item.description}</p>
            </ul>
          );
        })}
      </article>
    </div>
  );
};

export default About;
