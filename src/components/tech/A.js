// src/components/SiteViewSection.js

import React from 'react';
import { Box, Text, Flex, Heading, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const SiteViewSection = () => {
  return (
    <Box
      as="section"
      bgGradient="linear(to-br, #1A202C, #2D3748)"
      color="white"
      py={{ base: 10, md: 20 }}
      px={{ base: 4, md: 8 }}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        maxW="1200px"
        mx="auto"
      >
        <Box
          as="video"
          src="/2.mp4"
          autoPlay
          muted
          loop
          width={{ base: '100%', md: '50%' }}
          mb={{ base: 8, md: 0 }}
          mr={{ md: 8 }}
          borderRadius="md"
          overflow="hidden"
        />

        <VStack
          align="start"
          spacing={4}
          w={{ base: '100%', md: '50%' }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              fontSize={{ base: '2xl', md: '4xl' }}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Unveiling the Power Behind SiteView.ai: Technology Built for Smarter Construction
            </Heading>
          </MotionBox>
          <MotionText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight="tall"
          >
            At SiteView.ai, we're revolutionizing construction management with a suite of cutting-edge technologies designed to empower you with unparalleled visibility and control over your projects. Here's a glimpse into the magic that fuels SiteView.ai.
          </MotionText>
        </VStack>
      </Flex>
    </Box>
  );
};

export default SiteViewSection;
