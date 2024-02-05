import React from "react";
import "../styles/Reviews.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import user_pic from "../assets/Reviews/user_icon.png";

const Reviews: React.FC = () => {
  interface Review {
    name: string;
    photoshoot_type: string;
    text: string;
    rating: number;
  }
  const reviews: Review[] = [
    {
      name: "Иван Гамаз",
      photoshoot_type: "Школьный Фотосет",
      text: "Очень классный фотограф, ну очень прям все ЗА ШИ БИСЬ блин. Ну ваще рекомендую короче. Классно, могете пасаны. Не пожалеете кароч.",
      rating: 5,
    },
    {
      name: "Саня Бобров",
      photoshoot_type: "Студийная съемка",
      text: "Отличный опыт работы с фотографом. Профессиональный подход и отличные фотографии. Рекомендую всем!",
      rating: 4,
    },
    {
      name: "Наташа Королева",
      photoshoot_type: "Рождественнские фотографии",
      text: "Фотосессия прошла замечательно! Очень довольны результатами. Спасибо за теплые и яркие кадры!",
      rating: 3,
    },
    {
      name: "Мишаня Михно",
      photoshoot_type: "Тюремная съемка",
      text: "Профессиональный и отзывчивый фотограф. Сделал отличные снимки на нашем мероприятии. Будем обращаться еще!",
      rating: 5,
    },
    {
      name: "Светлана Каво",
      photoshoot_type: "Свадебный фотосет",
      text: "Отличный опыт! Фотограф проявил креатив и профессионализм. Очень доволен полученными снимками.",
      rating: 4,
    },
    {
      name: "Никита Пупсин",
      photoshoot_type: "Детсадовские фотографии",
      text: "Спасибо за удивительные фотографии с нашей свадьбы! Профессиональный подход и красивые моменты.",
      rating: 3,
    },
    {
      name: "Володя Добрянькин",
      photoshoot_type: "Фотосессия для журнала",
      text: "Было удовольствие работать с такими талантливыми моделями. Результаты превзошли ожидания!",
      rating: 5,
    },
    {
      name: "Паша Соплежуйцев",
      photoshoot_type: "Школьный выпускной",
      text: "Второй раз обращаемся к этому фотографу для фотосъемки продукции. Качество и скорость работы на высоте.",
      rating: 2,
    },
    {
      name: "Мария Сарафанцева",
      photoshoot_type: "Модельная съемка",
      text: "Семейная фотосессия превзошла наши ожидания. Великолепные кадры, которые будут храниться в памяти навсегда.",
      rating: 5,
    },
  ];

  return (
    <>
      <div className="container_reviews">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          navigation={true}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="cards_items">
                  <div className="info">
                    <img src={user_pic} alt={review.name} />
                    <div className="text_container">
                      <div className="name">{review.name}</div>
                      <div className="photoshoot_type">
                        {review.photoshoot_type}
                      </div>
                    </div>
                  </div>
                  <p>{review.text}</p>
                </div>
                <div className="rating">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <div key={i} className="star">
                      ★
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
