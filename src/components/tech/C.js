// src/components/SlamNavigationSection.js

import React from 'react';
import { Box, Text,   Heading, VStack, SimpleGrid, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaRobot, FaMapMarkedAlt, FaCubes } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const SlamNavigationSection = () => {
  return (
    <Box
      as="section"
      bgGradient="linear(to-br, #0f2027, #203a43, #2c5364)"
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
      >
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            bgGradient="linear(to-r, #f12711, #f5af19)"
            bgClip="text"
            fontWeight="extrabold"
          >
            SLAM for Seamless Navigation
          </Heading>
        </MotionBox>

        <MotionText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          fontSize={{ base: 'md', md: 'lg' }}
          maxW="800px"
          lineHeight="tall"
        >
          Explore your virtual site with ease. Our innovative platform leverages the power of Simultaneous Localization and Mapping (SLAM) technology, alongside a suite of advanced tools, to deliver a comprehensive and automated virtual tour experience.
        </MotionText>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          <FeatureBox
            icon={FaRobot}
            title="What is SLAM?"
            description="Imagine a robot navigating an unknown environment while simultaneously creating a map of its surroundings. That's the essence of SLAM!"
          />
          <FeatureBox
            icon={FaMapMarkedAlt}
            title="360° Panoramic Views"
            description="Capture 360° panoramic views of your construction site, offering a complete visual representation of progress."
          />
          <FeatureBox
            icon={FaCubes}
            title="Dynamic 3D Model"
            description="Build a dynamic 3D model of your site over time, allowing you to visualize progress and identify potential issues."
          />
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

const FeatureBox = ({ icon, title, description }) => (
  <MotionBox
    bg="whiteAlpha.200"
    p={6}
    borderRadius="md"
    boxShadow="xl"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <VStack spacing={4} align="center">
      <Icon as={icon} w={10} h={10} color="teal.300" />
      <Heading fontSize="xl" fontWeight="bold">
        {title}
      </Heading>
      <Text fontSize="md" textAlign="center">
        {description}
      </Text>
    </VStack>
  </MotionBox>
);

export default SlamNavigationSection;
