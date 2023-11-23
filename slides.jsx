// Slider.js
import React, { useState } from "react";
import "./Slider.css";

const Slide = ({ header, image, paragraph }) => (
  <div className="slide">
    <img src={image} alt={header} className="slide-image" />
    <div className="slide-content">
      <h2>{header}</h2>
      <p>{paragraph}</p>
    </div>
  </div>
);

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} {...slide} />
        ))}
      </div>

      <div className="navigation-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
