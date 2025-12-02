"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechAndTools = ({desc="Cynergy leverages a proven technology stack to develop secure, scalable, and high-performing apps for iOS and Android platforms.<br /> From rich layouts to in-app notifications, Cynergy’s solutions ensure a solid foundation for your app’s success."}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    afterChange: (index) => setActiveIndex(index),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="TechAndTools">
      <div className="container appMobilePadding">
        <div className="row justify-content-center flex-column d-flex align-items-center">
          <h2 className="mainHeadingMobile">Tech Stack that Drives<br /> Your Success</h2>
          <div className="col-md-9">
          <p className="paragraphText">
            {desc}
          </p>
          </div>
        </div>
      </div>

      <Slider {...settings} className="TechAndToolSlider">
        {[
          "./images/work-tabs/android.png",
          "./images/work-tabs/angular.png",
          "./images/work-tabs/apche-jmeter.png",
          "./images/work-tabs/firebase.png",
          "./images/work-tabs/flutter.png",
          "./images/work-tabs/github.png",
          "./images/work-tabs/java.png",
          "./images/work-tabs/kotlin.png",
          "./images/work-tabs/lonic.png",
          "./images/work-tabs/postgre-sql.png",
          "./images/work-tabs/redux.png",
          "./images/work-tabs/vue-js.png",
        ].map((src, index) => (
          <div
            key={index}
            className={`TechBoxSlide ${
              index === (activeIndex + 4) % 12 ? "scale-up" : ""
            }`}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechAndTools;
