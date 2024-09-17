import { Box, Heading, VStack } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const MotionBox = motion(Box);

const ParallaxSections = () => {
  const images = [
    'https://picsum.photos/id/1012/1600/900', // Update this to the correct image path
    'https://picsum.photos/id/1012/1600/900',
    'https://picsum.photos/id/1013/1600/900',
    'https://picsum.photos/id/1014/1600/900',
    'https://picsum.photos/id/1015/1600/900'
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <VStack spacing={0}>
      {images.map((image, index) => (
        <MotionBox
          key={index}
          ref={ref}
          initial={{ backgroundPositionY: 0 }}
          animate={controls}
          variants={{
            hidden: { backgroundPositionY: 0 },
            visible: { backgroundPositionY: window.innerHeight / 2 },
          }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          backgroundImage={`url(${image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          height="100vh"
          width="100%"
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            fontSize="4xl"
            color="white"
            bgGradient="linear(to-r, teal.300, blue.500)"
            bgClip="text"
          >
            Section {index + 1}
          </Heading>
        </MotionBox>
      ))}
    </VStack>
  );
};

export default ParallaxSections;
