// Carousel.js

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const websites = [
    'https://joohyeji.github.io/Visitors/',
    'https://joohyeji.github.io/Custom-Banana/',
    'https://joohyeji.github.io/Hamburger/',
    'https://joohyeji.github.io/LAZY-ALARM/',
    'http://stid-gradshow.seoultech.ac.kr/',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {websites.map((url, index) => (
        <div key={index}>
          <iframe
            title={`Web Carousel Item ${index + 1}`}
            src={url}
            width="100%"
            height="300px"
          ></iframe>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;