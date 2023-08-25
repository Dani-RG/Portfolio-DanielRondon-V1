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
      "Knowing Daniel for over 30 years and having collaborated on various projects, working with him has always been a pleasure, and I am continually impressed by his dedication, passion, and creativity.",
    commentTwo:
      "His natural talent for problem-solving, with a keen attention to detail and strong organizational skills, excels in communication and collaboration, making him a valuable team player. He actively listens and values diverse perspectives, consistently contributing to the success of any project.",
    commentThree:
      "From a technical standpoint, I know that he has a solid foundation in both front-end and back-end development. Based on my experiences working with Daniel, I know that his passion, skills, and work ethic make him a highly capable and reliable full-stack web developer."
  },
  {
    image: guilleImage,
    alt: "guillePic",
    name: "Guille García",
    profession: "Director of Product at Shiji ReviewPro",
    commentOne:
      "Dani is an exceptional web developer whom I had the pleasure of studying alongside at the Ironhack Web Development Bootcamp in Barcelona. He possesses strong technical skills and a meticulous attention to detail that makes him stand out in the field.",
    commentTwo:
      "His proficiency in the MERN stack, particularly React and JavaScript, enables him to create impressive and functional web architectures.",
    commentThree:
      "What sets Dani apart is his process-oriented approach, carefully analyzing every move before making decisions. His thoroughness and commitment to verification ensure that projects are executed smoothly and meet the highest standards. Dani's optimistic attitude, ability to remain composed under pressure, and collaborative mindset make him a valuable asset to any team."
  },
  {
    image: aleImage,
    alt: "alePic",
    name: "Alejandra Bausá",
    profession: "Full-stack web developer & teacher",
    commentOne:
      "After being his teacher for the last six months, I can confidently state that Daniel is a bright developer, a great colleague, and a natural team worker.",
    commentTwo:
      "He has progressed excellently with a very advanced curriculum and has managed to maintain a very calm and positive attitude throughout the bootcamp. I am sure he would be a great asset to any team, and he has been to ours."
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
            <p className="testimonial-comments"> {item.commentThree} </p>
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
