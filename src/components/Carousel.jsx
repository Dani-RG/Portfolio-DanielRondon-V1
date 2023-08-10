import React, { useState } from "react";
import simonImage from "../images/simon.jpeg";
import guilleImage from "../images/guille.jpeg";
import aleImage from "../images/ale.jpeg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slides = [
  {
    image: simonImage,
    alt: "simonPic",
    name: "Simón Tribiño",
    profession: "Associate Technical Director at Electronic Arts (EA)",
    commentOne:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque, elit a condimentum dapibus, dolor nibh sagittis purus, ac elementum dolor diam at nulla. In massa enim, volutpat quis mi id, euismod commodo risus. Nunc volutpat dignissim sodales. Donec semper ligula arcu, nec fermentum mi tempus et. Nam et mi turpis.",
    commentTwo:
      "Fusce vitae tortor diam. Nullam imperdiet nunc at nulla pretium, non egestas sem cursus. Vivamus volutpat porttitor est, at sollicitudin enim facilisis sit amet. Nulla vehicula quam id odio accumsan, accumsan fermentum elit pharetra. Sed quis pharetra elit. Nam tristique sapien ac sapien auctor volutpat. Sed congue arcu non purus fringilla tempus. Aenean lectus mi, rhoncus at hendrerit eget, tristique eu enim.",
  },
  {
    image: guilleImage,
    alt: "guillePic",
    name: "Guille García",
    profession: "Director of Product at Shiji ReviewPro",
    commentOne:
      "Dani is an exceptional web developer whom I had the pleasure of studying alongside at the Ironhack Web Development Bootcamp in Barcelona. He possesses strong technical skills and a meticulous attention to detail that makes him stand out in the field. Dani's proficiency in the MERN stack, particularly React and JavaScript, enables him to create impressive and functional web architectures.",
    commentTwo:
      "What sets Dani apart is his process-oriented approach, carefully analyzing every move before making decisions. His thoroughness and commitment to verification ensure that projects are executed smoothly and meet the highest standards. Dani's optimistic attitude, ability to remain composed under pressure, and collaborative mindset make him a valuable asset to any team.",
  },
  {
    image: aleImage,
    alt: "alePic",
    name: "Alejandra Bausá",
    profession: "Full-stack web developer & teacher",
    commentOne:
      "After being his teacher for the last six months, I can confidently state that Daniel is a bright developer, a great colleague, and a natural team worker.",
    commentTwo:
      "He has progressed excellently with a very advanced curriculum and has managed to maintain a very calm and positive attitude throughout the bootcamp. I am sure he would be a great asset to any team, and he has been to ours.",
  },
];

export default function Carousel() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <IoIosArrowBack className="arrow arrow-left" onClick={prevSlide} />
      {slides.map((item, idx) => {
        return (
          <div
            className={slide === idx ? "slide" : "slide slide-hidden"}
            key={idx}
          >
            <img
              className="testimonial-picture"
              src={item.image}
              alt={item.alt}
            />
            <p className="testimonials-titles"> {item.name} </p>
            <p className="testimonials-titles-2"> {item.profession} </p>
            <p className="testimonial-comments"> {item.commentOne} </p>
            <p className="testimonial-comments"> {item.commentTwo} </p>
          </div>
        );
      })}
      <IoIosArrowForward className="arrow arrow-right" onClick={nextSlide} />
      <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}
