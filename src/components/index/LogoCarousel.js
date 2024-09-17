// src/components/LogoCarousel.js
 import { Box, Flex, Image, Text, keyframes, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define keyframes for the fade-in and fade-out animation
const fadeInOut = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const MotionBox = motion(Box);



const LogoCarousel = () => {
  const logos = [
    "https://www.chitkara.edu.in/cu-logo-mob.png", // Chitkara University
    "logos/2.ico",
    "logos/1.ico", // IIT Bombay
    "logos/3.ico", // Sardar Patel Technology Business Incubator
    "https://framerusercontent.com/images/8jur386Zr9HvHvjG5PIuOemhdBc.png", // Framer Logo
    "https://brigadereap.com/resources/assets/images/logo-white.svg", // Brigade REAP
    // Add more logos if needed
  ];

  const [ref, inView] = useInView({triggerOnce: true, threshold: 0.5 });
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0 , y:100}}
      animate={inView ? { opacity: 1, y:0 } : { opacity: 0, x:50 }}
      transition={{ duration: 1.0    }} 
      width="100%" 
      bgGradient="linear(to-r, white, purple.500)" // Gradient background from white to purple
      py={8}
      px={4}
      textAlign="center"
    >
      {/* Heading */}
      <Text 
        fontSize={{ base: "2xl", md: "3xl" }} 
        fontWeight="bold" 
        mb={6}
        color="gray.800"
      >
        Supported By
      </Text>
      
      {/* Logo Container */}
      <Flex justify="center" align="center" wrap="wrap" gap={4}>
        {logos.map((logo, index) => (
          <Box
            key={index}
            animation={`${fadeInOut} 6s ease-in-out infinite`}
            animationDelay={`${index * 1}s`} // Staggered start for each logo
            width={{ base: "100px", md: "120px", lg: "140px" }} // Responsive width
            display="inline-block"
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              height={{ base: "40px", md: "50px", lg: "60px" }} // Responsive height
              objectFit="contain"
            />
          </Box>
        ))}
      </Flex>

      {/* Learn More Button */}
      <Box mt={8}>
        <Button
          onClick={onOpen}
          bgGradient="linear(to-r, red.400, orange.400)"
          color="white"
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="bold"
          px={6}
          py={3}
          borderRadius="md"
          _hover={{ bgGradient: "linear(to-r, red.500, orange.500)" }}
          _focus={{ boxShadow: "none" }}
        >
          📽 Watch Video
        </Button>
      </Box>

      {/* Video Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full" motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent
          maxW="70%" // Set the max width of the modal to 70% of the screen
          mx="auto" // Center the modal horizontally
        >
          <ModalHeader>Video</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0}>
            <Box
              as="iframe"
              src="https://1drv.ms/v/s!AppN5M2oRRXwkYBONGptl8clolDlgw?e=zoBJI7"
              width="100%"
              height="80vh" // Set the height to 80% of the viewport height
              border="none"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

export default LogoCarousel;
