import React, { useRef, useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

const ScrollVideo = ({ videoSrc, nextComponent }) => {
  const videoRef = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(true);

  // Media query to hide the component on mobile and tablet devices
  const [isLargerThanLaptop] = useMediaQuery("(min-width: 100px)");

  // Play the video automatically and stop it after 6 seconds
  useEffect(() => {
    const video = videoRef.current;

    if (isLargerThanLaptop && video) {
      // Play the video automatically
      video.play();

      // Set a timeout to stop the video and hide it after 6 seconds
      const timer = setTimeout(() => {
        controls.start({ opacity: 0 }).then(() => setIsVisible(false)); // Smooth fade out when video ends
      }, 6400); // 6.4 seconds

      return () => {
        clearTimeout(timer); // Clear the timeout if the component unmounts
      };
    }
  }, [isLargerThanLaptop, controls]); // Only necessary dependencies

  return (
    <>
      {isLargerThanLaptop && isVisible && (
        <Box
            mt={0}
            pt={0}
          as={motion.div}
          position="sticky"
          top="0"
          width="100%"
          height="100vh"
          initial={{ opacity: 1 }}
          animate={controls}
          transition={{ duration: 1 }}
          zIndex="10" // Ensure the video stays on top of other components
        >
          <Box
            as="video"
            mt={0}
            pt={0}
            ref={videoRef}
            src={videoSrc}
            width="100%"
            height="100%"
            objectFit="cover"
            muted
            playsInline
          />
        </Box>
      )}

      {!isVisible && nextComponent} {/* Render next component only when video is hidden */}
    </>
  );
};

export default ScrollVideo;

