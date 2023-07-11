import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SocialMedia() {
  return (
    <div className="social_media_bar">
      <motion.div
        whileHover={{ scale: 1.3 }}
      >
        <Link
          to="https://www.linkedin.com/in/daniel-rondon-garcia-"
          target="_blank"
        >
          <FiLinkedin />
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.3 }}
      >
        <Link to="https://github.com/Dani-RG" target="_blank">
          <FiGithub />
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.3 }}
      >
        <Link to="mailto:daniel.deweb@gmail.com">
          <FiMail />
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
      >
        <svg width="2" height="150">
          <line x1="1" y1="0" x2="1" y2="150" strokeWidth="2" />
        </svg>
      </motion.div>
    </div>
  );
}
