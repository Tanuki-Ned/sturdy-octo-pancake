import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Image from "../../components/common/Image/Image";
import Logo from "../../img/logo.png";
import "./LoadingScreen.scss";

const LoadingScreen = () => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      navigate("/landing-page");
    }, 8000); // Change the delay time as needed

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate]);

  // Adjusting the motion path based on screen size
  const motionPath =
    screenWidth < 768
      ? [-200, -50, 0, 50] // Adjusted path for smaller screens
      : [-500, -250, -150, -100, -50, 0, 50, 100, 150, 250]; // Original path for larger screens

  return (
    <>
      <motion.div className="loading-screen">
        <motion.div
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: [1], y: -150, scale: 1.2 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <h1>Loading...</h1>
        </motion.div>
        <motion.div
          className="spinner-border"
          role="status"
          initial={{ x: -500, rotate: 0 }}
          animate={{
            x: motionPath,
            rotate: 360,
          }}
          transition={{
            type: "spring",
            ease: "easeInOut",
            duration: 3,
            repeat: Infinity,
          }}
        >
          <Image src={Logo} alt="Logo" className="hero-logo" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default LoadingScreen;
