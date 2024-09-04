// src/components/CaptureNavigationSection.js

import React from 'react';
import { Box, Text,   Heading, VStack, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const CaptureNavigationSection = () => {
  return (
    <Box
      as="section"
      bgGradient="linear(to-br, #2C3E50, #4CA1AF)"
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
            bgGradient="linear(to-r, #00B4DB, #0083B0)"
            bgClip="text"
            fontWeight="extrabold"
          >
            360° Capture & Navigation
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
          Capture Everything: Utilize a variety of methods to capture your site – industry-standard 360° cameras, our intuitive mobile app, or even drone integration (subject to permits).
          Effortless Upload & Organization: Drag and drop your captured media into our platform for seamless organization and easy access.
          Immerse Yourself Virtually: Navigate your construction site remotely with stunning 360° views. Zoom and pan for a detailed look, eliminating the need for constant on-site visits.
        </MotionText>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          {["video1.mp4", "video2.mp4", "video3.mp4"].map((video, index) => (
            <MotionBox
              key={index}
              as="video"
              src={video}
              autoPlay
              muted
              loop
              borderRadius="md"
              overflow="hidden"
              boxShadow="xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              width="100%"
              maxH="250px"
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default CaptureNavigationSection;
