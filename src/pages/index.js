import React, { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react"; // Import Chakra UI components
import { motion, useAnimation } from "framer-motion"; // Import framer-motion for animations
import VideoBackground from "../components/VideoBackground.js";
import ClientExperience from "../components/ClientExperience.js";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import FetureCards from "../components/FetureCards.js";
import LogoCarousel from "../components/LogoCarousel.js";
import ThreeUserscard from "../components/ThreeUsersCard.js";
import FeatureSection from "../components/FeatureSection.js";
import ScrollingSection from "../components/ScrollingSection.js";
import Home8 from "../components/home/Home8.js";
// import Home7 from "../components/home/Home7.js";


 const MotionImage = motion(Image);

export default function Home() {
  const [showInitialLogo, setShowInitialLogo] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Start the logo animation after a delay
    const timer = setTimeout(() => {
      controls.start({
        scale: 0.1, // Shrink to a smaller size
        x: "-50vw", // Move the logo to the left (50% of the viewport width)
        y: "-50vh", // Move the logo to the top (50% of the viewport height)
        opacity: 0, // Fade out as it moves
        transition: { duration: 1.5 }, // Duration of the move and fade animation
      });
    }, 1500); // Delay before the logo moves

    // Show the rest of the content after the animation
    const contentTimer = setTimeout(() => {
      setShowInitialLogo(false);
      setShowContent(true);
    }, 2300); // Total delay (animation start + duration)

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, [controls]);

  return (
    <>
      {showInitialLogo && (
        <Box
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="white" // Ensure background is set to white or any color you like
          position="relative"
        >
          <MotionImage
            src="/siteviewlogo.png"
            alt="Initial Logo"
            width="200px" // Adjust the initial size as necessary
            animate={controls}
            initial={{ scale: 1, x: 0, y: 0, opacity: 1 }} // Start from full size and fully opaque
          />
        </Box>
      )}

      {showContent && (
        <main>
          <Navbar />
          <VideoBackground />
          <FeatureSection />
          {/* <Home7/> */}
          <LogoCarousel />
          <Home8/>
           <ScrollingSection />
          <ThreeUserscard />
          <FetureCards />
          <ClientExperience />
          <Footer />

        </main>
      )}
    </>
  );
}
