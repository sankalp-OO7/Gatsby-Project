import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Motion Components
 const MotionText = motion(Text);

const MotionBox = motion(Box);

const FullScreenVideo = () => {
  // Using Intersection Observer to trigger animations when the text comes into view
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <Box position="relative" width="100%" height="120vh" overflow="hidden">
      {/* Background Video */}
      <MotionBox
        ref = {ref3}
        initial={{ opacity: 0 , y:100}}
        animate={inView3 ? { opacity: 1, y:0 } : { opacity: 0, x:50 }}
        transition={{ duration: 3.5 }}

        

        as="video"
        src="/videos/homepage.mp4" // Replace with the path to your video file
        autoPlay
        muted
        loop
        playsInline
        objectFit="cover"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex="-1"
      />

      {/* Overlay Text Container */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        zIndex="1"
        width="80%"
        maxWidth="600px"
        color="white"
        padding="4"
      >
        {/* Blur Background for Text */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.0)" // Semi-transparent dark background
          filter="blur(10px)" // Blur effect
          borderRadius="md" // Optional: adds a slight border radius
          zIndex="200"
        />

        {/* Animated Title */}
        <MotionText
          ref={ref1}
          fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
          fontWeight="bold"
          bgGradient="linear(to-r, purple.500, orange.500)"
          bgClip="text"
          initial={{ opacity: 0, y: 50 }} // Initial state: moved down
          animate={inView1 ? { opacity: 2, y: 0 } : {}} // Animate when in view
          transition={{ duration: 1 }} // Animation duration
          
        >
          Revolution for construction
        </MotionText>

        {/* Animated Subtitle */}
        <MotionText
          ref={ref2}
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
          mt="4"
          bgGradient="linear(to-r, purple.500, orange.500)"
          bgClip="text"
          initial={{ opacity: 0, x: -50 }} // Initial state: moved left
          animate={inView2 ? { opacity: 1, x: 0 } : {}} // Animate when in view
          transition={{ duration: 1 }} // Animation duration
        >
          A.I. and Computer Vision powered Construction Management Platform.
        </MotionText>
      </Box>
    </Box>
  );
};

export default FullScreenVideo;
