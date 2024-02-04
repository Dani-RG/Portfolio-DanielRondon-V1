import React, { useState, useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import danielPhoto from "../images/danielRG_photo_blackBG.png";
import TestimonialsModal from "../components/TestimonialsModal";
import Carousel from "../components/Carousel";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = danielPhoto;

    image.onload = () => {
      setImagesLoaded(true);
    };
  }, []);

  return (
    <div className="about-view" id="about">
      {imagesLoaded && (
        <div className="section-container">
          <p className="big-title to-light">About</p>
          <svg className="underline">
            <line x1="0" y1="1" x2="100%" y2="1" />
          </svg>
          <div className="about-set">
            <div className="about-text">
              <p className="texts-letters-02">
                With a commitment to continuous improvement and professional
                growth, I've transitioned from a civil architect to a Full-Stack
                Web Developer proficient in the technologies of greatest impact
                within the IT field.
              </p>
              <p className="texts-letters-02">
                Knowing how to integrate the frontend with the backend to bring
                to life designs and applications that are both interesting and
                emotionally engaging.
              </p>
              <p className="texts-letters-02">
                My goal is to create experiences that are not only enjoyable but
                also direct users towards the essential point of the journey.
              </p>
            </div>
            <div className="about-photo-phrase">
              <div className="circle-container">
                <img src={danielPhoto} alt="danielPhoto" />
              </div>
              <div className="quote-phrase">
                <RiDoubleQuotesL className="quotes" />
                <p className="texts-letters-01 to-light to-italic">
                  My creative mind is driven by organized processes and
                  prioritizing effective functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="testimonials-btn">
        <button onClick={() => setIsOpen(true)}>Testimonials</button>
        <TestimonialsModal open={isOpen} onClose={() => setIsOpen(false)}>
          <Carousel />
        </TestimonialsModal>
      </div>
    </div>
  );
}
