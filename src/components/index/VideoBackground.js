import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
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
    <Box position="relative" borderRadius={"2xl"} width="99%" ml={2} mr={6} minHeight="100vh" overflow="hidden" bgGradient="linear(to-r, blue.500, purple.500)">
      {/* Top Section: Gradient background with text */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        color="white"
        py={10}
      >
        <MotionText
          ref={ref1}
          fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
          fontWeight="extrabold"
          initial={{ opacity: 0, y: 50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          mb={4}
        >
          Revolution for the New Age Construction
        </MotionText>

        <MotionText
          ref={ref2}
          fontSize={{ base: 'md', md: 'xl' }}
          fontWeight="medium"
          initial={{ opacity: 0, y: 50 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          mb={6}
        >
          A.I. and Computer Vision powered Construction  <br></br>Management Platform.
        </MotionText>

        {/* Call to Action Button */}
        <Button
          ref={ref2}
          bg="black"
          color="white"
          py="6"
          px="10"
          borderRadius="full"
          fontSize="lg"
          fontWeight="bold"
          _hover={{ bg: "gray.800" }}
        >
          Try for Free
        </Button>
      </Box>

      {/* Bottom Section: Video with Play Button */}
      <Box
        display="flex"
        justifyContent="center"
        mt={10}
      >
        <Box
          position="relative"
          width={{ base: "90%", md: "70%", lg: "60%" }}
          boxShadow="lg"
          borderRadius="xl"
          overflow="hidden"
          pb={4}
        >
          <MotionBox
            ref={ref3}
            initial={{ opacity: 0 }}
            animate={inView3 ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            as="video"
            src="/videos/homepage.mp4" // Replace with your video path
            autoPlay
            muted
            mb={4}
            loop
            playsInline
            width="100%"
            height="100%"
            objectFit="cover"
          />

 
        </Box>
      </Box>
    </Box>
  );
};

export default FullScreenVideo;
