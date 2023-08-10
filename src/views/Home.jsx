import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home-view" id="home">
      <div className="home-text">
        <div className="danielrondon-text">
          <motion.p
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            DANIEL
          </motion.p>
          <motion.p
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            RONDON
          </motion.p>
        </div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="fullstack-webdev-text big-title">
            Full Stack Web Developer
          </div>
          <svg className="underline-alt-color">
            <line x1="0" y1="1" x2="100%" y2="1" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
