//  import * as  styles from '../../styles/index/Gradient.module.css'; // Import CSS module
 // src/components/ScrollGradientText.js
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Box, Text } from "@chakra-ui/react";

const ScrollGradientText = () => {
  // React Intersection Observer Hook
  const { ref, inView, entry } = useInView({
    threshold: 0.3, // 30% visibility
    triggerOnce: false, // Trigger on every scroll up and down
  });

  // State to toggle text color
  const [isVisible, setIsVisible] = useState(false);

  // Handle the text color based on scroll
  const handleInViewChange = (inView) => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <Box
      ref={ref}
      onChange={handleInViewChange(inView)}
      minHeight="100vh" // Full screen height for the section
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="black"
    >
      <Text
        fontSize="4xl"
        fontWeight="bold"
        bgClip="text"
        bgGradient={isVisible ? "linear(to-r, skyblue, purple)" : "black"}
        transition="all 0.5s ease-in-out"
        color={isVisible ? "transparent" : "black"}
      >
        Scroll to see the magic!
      </Text>
    </Box>
  );
};

export default ScrollGradientText;
