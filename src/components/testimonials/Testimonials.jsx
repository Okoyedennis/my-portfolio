import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../asset/avatar1.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: "Ernrst Achiever",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut in neque porro vel rerum nulla at nihil voluptatibus mollitia veniam quos sint omnis eos sequi doloribus ea aspernatur, ipsum libero.",
    },
    {
      avatar: AVTR1,
      name: "Ernrst Achiever",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut in neque porro vel rerum nulla at nihil voluptatibus mollitia veniam quos sint omnis eos sequi doloribus ea aspernatur, ipsum libero.",
    },
    {
      avatar: AVTR1,
      name: "Ernrst Achiever",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut in neque porro vel rerum nulla at nihil voluptatibus mollitia veniam quos sint omnis eos sequi doloribus ea aspernatur, ipsum libero.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }) => (
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="Avatar" />
            </div>
            <h5>{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
