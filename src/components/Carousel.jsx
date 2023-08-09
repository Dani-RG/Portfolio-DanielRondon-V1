import React, { useState } from "react";
import simonImage from '../images/simon.jpeg';
import guilleImage from '../images/guille.jpeg';
import aleImage from '../images/ale.jpeg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slides = [
  { 
    "image": simonImage, 
    "alt": "simonPic",
    "name": "Simón Tribiño",
    "profession": "The profession",
    "comment": "Place to place some comments" 
  },
  { 
    "image": guilleImage, 
    "alt": "guillePic",
    "name": "Guille García",
    "profession": "The profession",
    "comment": "Place to place some comments" 
  },
  { 
    "image": aleImage, 
    "alt": "alePic",
    "name": "Alejandra Bausá",
    "profession": "The profession",
    "comment": "Place to place some comments" 
  }
];


export default function Carousel() {
  const [slide, setSlide] = useState(0);
   
  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 :  slide + 1);
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  }

  return (
    <div className="carousel">
      <IoIosArrowBack className="arrow arrow-left" onClick={prevSlide}/>
      {slides.map((item, idx) => {
        return (
          <div className={slide === idx ? "slide" : "slide slide-hidden"} key={idx}>
            <img className="testimonial-picture" src={item.image} alt={item.alt} />
            <p> {item.name} </p>
            <p> {item.profession} </p>
            <p> {item.comment} </p>
          </div>
        );
      })}
      <IoIosArrowForward className="arrow arrow-right" onClick={nextSlide}/>
      <span className="allIndicators">
        {slides.map((_, idx) => {
          return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
        })}
      </span>
    </div>
  );
}
