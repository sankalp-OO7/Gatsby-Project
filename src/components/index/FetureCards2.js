// src/components/FeatureSection.js

import React from 'react';
import { Box, Text, Flex, Heading, VStack } from '@chakra-ui/react';

const features = [
  {
    number: 1,
    title: "NO BLINDSPOT",
    description:
      "Walk any floor and any room you want with just a couple of clicks. Since it’s securely stored in the cloud, you’ll be able to access your whole project from any device, anywhere you have an internet connection.",
    videoSrc: "/videos/features2.mp4", // Local video source
    posterSrc: "/videos/features2.mp4", // Local poster image
  },
  {
    number: 2,
    title: "TIME TRAVEL",
    description:
      "Travel your site back in time. SiteView records the visuals from Day-1 and stores it for years even after completion of the project. Select the date of your walk, as if you are there on that day. This forms an important tool to avoid disputes and serve as evidence during litigations.",
    videoSrc: "/videos/features2.mp4", // Local video source
    posterSrc: "/videos/siteviewGuy2.mp4", // Local poster image
  },
  {
    number: 3,
    title: "COMPARE PROGRESS",
    description:
      "Compare views of any two dates on your screen. Compare progress between any two dates, make as-built drawings, nothing is hidden behind that plaster.",
    videoSrc: "/videos/siteviewGuy3.mp4", // Local video source
    posterSrc: "/videos/siteviewGuy3.mp4", // Local poster image
  },
  {
    number: 4,
    title: "DOCUMENTATION",
    description:
      "Take photos and screenshots during your virtual walk of any floor directly from the screen. Send the photo to your teams or save on your computer directly with a click. Never be without that important photo you need.",
    videoSrc: "/videos/siteviewGuy3.mp4", // Local video source
    posterSrc: "/videos/siteviewGuy3.mp4", // Local poster image
  },
  {
    number: 5,
    title: "VIRTUAL SITE MEETS",
    description:
      "SiteView.ai transports you to your construction site virtually. Share immersive 360° views with remote teams, pinpoint issues, and collaborate seamlessly in real-time, all within virtual meetings.",
    videoSrc: "/videos/features2.mp4",
    posterSrc: "/path/to/your/image5.jpg",
  },
];

const FeatureSection = () => {
  return (
    <Box as="section" py={10} px={{ base: 4, md: 8 }} bg="gray.800" color="white">
      <VStack spacing={8} align="center" maxW="1200px" mx="auto" textAlign="center">
        <Heading
          fontSize={{ base: '2xl', md: '4xl' }}
          bgGradient="linear(to-r, white.100, #5B86E5)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Resolving Real-World Construction Monitoring Challenges with SiteView
        </Heading>
        <Text fontSize="lg">
          See how SiteView directly addresses the critical needs and challenges faced by the construction industry.
        </Text>
      </VStack>
      <Box mt={10}>
        {features.map((feature, index) => (
          <Flex
            key={index}
            direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
            align="center"
            justify="space-between"
            py={6}
            px={{ base: 4, md: 10 }}
            bg={index % 2 === 0 ? 'gray.700' : 'gray.600'}
            mb={8}
            borderRadius="md"
            boxShadow="lg"
          >
            <Box flex="1" mb={{ base: 4, md: 0 }}>
              <video
                width="100%"
                height="auto"
                autoPlay
                loop
                muted
                preload="metadata"
                poster={feature.posterSrc}
                playsInline
              >
                <source src={feature.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
            <VStack
              flex="1"
              spacing={4}
              align="start"
              textAlign={{ base: 'center', md: 'left' }}
              px={{ base: 0, md: 6 }}
            >
              <Text
                fontSize="6xl"
                fontWeight="bold"
                bgGradient="linear(to-r, #FF416C, #FF4B2B)"
                bgClip="text"
                mb={2}
              >
                {feature.number}
              </Text>
              <Heading color={"white"} fontSize="2xl">{feature.title}</Heading>
              <Text>{feature.description}</Text>
            </VStack>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default FeatureSection;
