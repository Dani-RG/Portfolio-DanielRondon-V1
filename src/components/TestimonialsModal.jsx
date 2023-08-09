import React from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";

export default function TestimonialsModal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay"/>
      <div className="testimonials_modal">
        <button onClick={onClose} className="close-btn">
          <IoMdClose  className="close-btn-icon"/>
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
