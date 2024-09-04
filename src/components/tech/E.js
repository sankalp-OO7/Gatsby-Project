// src/components/HowItWorksSection.js

import React from 'react';
import { Box, Text,    Heading, VStack, SimpleGrid, Icon  } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaVideo } from 'react-icons/fa';

const MotionBox = motion(Box);
 
const HowItWorksSection = () => {
  return (
    <Box
      as="section"
      bgGradient="linear(to-br, #141E30, #243B55)"
      color="white"
      py={{ base: 10, md: 20 }}
      px={{ base: 4, md: 8 }}
    >
      <VStack
        spacing={8}
        align="center"
        maxW="1200px"
        mx="auto"
        textAlign="center"
        color={"white"}
      >
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            bgGradient="linear(to-r, #36D1DC, #5B86E5)"
            bgClip="text"
            fontWeight="extrabold"
          >
            How It Works
          </Heading>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
          <StepBox
            number="1"
            title="Capture"
            description="Simply connect the 360-camera to SiteView’s mobile app, strap over the helmet, and go! Effortlessly record 100% of the areas you see during site walk and easily combine it with routine site visits. SiteView will capture all the surroundings and accurately locate them in your drawings. No blind spots, no missed issues."
          />
          <VideoPlaceholder />
          <StepBox
            number="2"
            title="View"
            description="360 photo captures are automatically organized by floor plan and date/time. See your site in 360° from anywhere, anytime. Walk the site by just using the mouse, as if you are there on-site. Never be dependent on the site team for useful information again. Photos are the first source of any records and SiteView makes them available instantly."
          />
          <VideoPlaceholder />
          <StepBox
            number="3"
            title="Monitor"
            description="Be assured that your project is fully documented and recorded for photographic proof of progress—whenever and wherever you need It. The whole project is in your pocket. Review historical work conditions, verify progress - side by side of different dates for every inch of your project site."
          />
          <VideoPlaceholder />
          <StepBox
            number="4"
            title="Collaborate"
            description="Run site meetings from your office with multiple stakeholders, without visiting site! Showcase the whole project during site meetings. Streamline technical discussions, comments, instructions, annotate and tag photos, keeping all teams in sync, improving transparency and projects moving forward."
          />
          <VideoPlaceholder />
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

const StepBox = ({ number, title, description }) => (
  <MotionBox
    bg="whiteAlpha.200"
    p={6}
    borderRadius="md"
    boxShadow="xl"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <VStack spacing={4} align="center">
      <Text
        fontSize="6xl"
        fontWeight="bold"
        bgGradient="linear(to-r, #FF416C, #FF4B2B)"
        bgClip="text"
      >
        {number}
      </Text>
      <Heading fontSize="2xl" color={"whiteAlpha.800"} fontWeight="bold">
        {title}
      </Heading>
      <Text fontSize="md" textAlign="center">
        {description}
      </Text>
    </VStack>
  </MotionBox>
);

const VideoPlaceholder = () => (
  <MotionBox
    bg="whiteAlpha.100"
    height="200px"
    borderRadius="md"
    display="flex"
    alignItems="center"
    justifyContent="center"
    boxShadow="xl"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon as={FaVideo} w={16} h={16} color="teal.300" />
  </MotionBox>
);

export default HowItWorksSection;
