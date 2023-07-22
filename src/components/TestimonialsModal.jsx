import React from "react";
import ReactDOM from "react-dom";

export default function TestimonialsModal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay"/>
      <div className="testimonials_modal">
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
