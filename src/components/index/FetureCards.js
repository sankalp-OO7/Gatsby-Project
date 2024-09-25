import React from 'react';
import { Box, Flex, Heading, Text, AspectRatio, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// List of feature items with different background colors for each
const features = [
  {
    title: "NO BLINDSPOT",
    description:
      "Walk any floor and any room you want with just a couple of clicks. Since it’s securely stored in the cloud, you’ll be able to access your whole project from any device, anywhere you have an internet connection.",
    videoSrc: "/videos/features2.mp4", // Local video source
    posterSrc: "/videos/features2.mp4", // Local poster image
    bgColor: "blue.200",  // Background color for this card
  },
  {
    title: "TIME TRAVEL",
    description:
      "Travel your site back in time. SiteView records the visuals from Day-1 and stores it for years even after completion of the project. Select the date of your walk, as if you are there on that day. This forms an important tool to avoid disputes and serve as evidence during litigations.",
    videoSrc: "/videos/features2.mp4", // Local video source
    posterSrc: "/videos/siteviewGuy2.mp4", // Local poster image
    bgColor: "green.200",
  },
  {
    title: "COMPARE PROGRESS",
    description:
      "Compare views of any two dates on your screen. Compare progress between any two dates, make as-built drawings, nothing is hidden behind that plaster.",
    videoSrc: "/videos/siteviewGuy3.mp4", // Local video source
    posterSrc: "/videos/siteviewGuy3.mp4", // Local poster image
    bgColor: "purple.200",
  },
  {
    title: "DOCUMENTATION",
    description:
      "Take photos and screenshots during your virtual walk of any floor directly from the screen. Send the photo to your teams or save on your computer directly with a click. Never be without that important photo you need.",
    videoSrc: "/videos/siteviewGuy3.mp4", // Local video source
    posterSrc: "/videos/siteviewGuy3.mp4", // Local poster image
    bgColor: "orange.200",
  },
  {
    title: "VIRTUAL SITE MEETS",
    description:
      "SiteView.ai transports you to your construction site virtually. Share immersive 360° views with remote teams, pinpoint issues, and collaborate seamlessly in real-time, all within virtual meetings.",
    videoSrc: "/videos/features2.mp4",
    posterSrc: "/path/to/your/image5.jpg",
    bgColor: "yellow.200",
  },
];

// Wrapping the Box component with Framer Motion
const MotionBox = motion(Box);

const FeatureSection = () => {
  return (
    <Box as="section" py={16} px={5} bg="gray.50">
      <VStack spacing={12} align="center" maxW="1200px" mx="auto">
        {/* Title section */}
        <MotionBox
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          textAlign="center"
        >
          <Heading
            size="xl"
            bgClip="text"
            bgGradient="linear(to-r, blue.400, purple.600)"
            mb={4}
          >
            Resolving Real-World Construction Monitoring Challenges with SiteView
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="800px" textAlign="center">
            See how SiteView directly addresses the critical needs and challenges faced by the construction industry.
          </Text>
        </MotionBox>

        {/* Features section */}
        <VStack spacing={10} align="stretch" width="100%">
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              p={8}
              bg={feature.bgColor}
              shadow="md"
              rounded="md"
              width="100%"
              maxWidth="900px"
              mx="auto"
            >
              <Flex
                direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                align="center"
              >
                {/* Video Section */}
                <Box flex="1" width="100%">
                  <AspectRatio ratio={16 / 9} width="100%">
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
                  </AspectRatio>
                </Box>

                {/* Text Section */}
                <Box flex="1" p={6} textAlign="left">
                  <Heading size="lg" mb={4} color="gray.700">
                    {feature.title}
                  </Heading>
                  <Text fontSize="md" color="gray.600" textAlign="justify">
                    {feature.description}
                  </Text>
                </Box>
              </Flex>
            </MotionBox>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default FeatureSection;
