// src/components/EnhancedMonitoringSection.js

import React from 'react';
import { Box, Text,   Heading, VStack, SimpleGrid, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaEye, FaChartLine, FaClock, FaCloud, FaExpandArrowsAlt } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const EnhancedMonitoringSection = () => {
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
      >
        <MotionBox
          initial={{ opacity: -1, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            bgGradient="linear(to-r, #36D1DC, #5B86E5)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Beyond SLAM: A Powerful Tech Stack for Enhanced Monitoring
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
          SiteView.ai goes beyond just capturing visuals. We integrate a range of technologies to provide a deeper understanding of your project:
        </MotionText>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
          <FeatureBox
            icon={FaEye}
            title="Computer Vision"
            description="Analyze captured data to identify and track objects, materials, and equipment on-site."
          />
          <FeatureBox
            icon={FaChartLine}
            title="AI-powered Analytics"
            description="Gain insights into worker activity, safety hazards, and potential delays through automated data analysis."
          />
          <FeatureBox
            icon={FaClock}
            title="Progress Tracking"
            description="Compare 3D models over time to quantify progress and identify areas needing attention."
          />
          <FeatureBox
            icon={FaCloud}
            title="Cloud-based Platform"
            description="Access your virtual tours and data from any device, anytime, for seamless collaboration."
          />
          <FeatureBox
            icon={FaExpandArrowsAlt}
            title="Scalability"
            description="SiteView.ai can seamlessly adapt to projects of any size or complexity."
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
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <VStack spacing={4} align="center">
      <Icon as={icon} w={10} h={10} color="teal.100" />
      <Heading fontSize="3xl" color={'white.900'} fontWeight="bold">
        {title}
      </Heading>
      <Text fontSize="md" textAlign="center">
        {description}
      </Text>
    </VStack>
  </MotionBox>
);

export default EnhancedMonitoringSection;
