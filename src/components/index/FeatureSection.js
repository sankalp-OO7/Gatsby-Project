import { Box, Flex, Heading, Text, Link, VStack, AspectRatio } from '@chakra-ui/react';
import { motion } from 'framer-motion'; // Ensure framer-motion is installed and imported
import React from 'react';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box); // Wrap Chakra UI Box with motion for animations

const features = [
  {
    title: "Managing your construction projects is not a busy task anymore…",
    description:
      "Experience peace of mind by integrating all reality capture data into one intuitive platform. SiteView ensures that you have full visibility and control over your project.",
    videoSrc: "/videos/siteviewGuy.mp4", // Local video source
    posterSrc: "/videos/siteviewGuyPoster.webp", // Local poster image
    link: " ",
    linkText: "Learn about VisualTrack",
    bgColor: "blue.100" // Background color
  },
  {
    title: "A.I. and Computer Vision powered Construction Management Platform.",
    description:
      "Stop relying on gut feelings and guesswork. SiteView provides accurate and comprehensive progress tracking, quantifying work installed across different job activities from each capture.",
    videoSrc: "/videos/siteviewGuy2.mp4", // Local video source
    posterSrc: "/videos/siteviewGuy2.mp4", // Local poster image
    link: " ",
    linkText: "Discover ProgressTrack",
    bgColor: "purple.100" // Background color
  },
  {
    title: "See Further, Save More. Autopilot your project.",
    description:
      "Pre-empt potential costly rework and keep your project on budget. With SiteView, identify discrepancies early, allowing for swift correction and minimizing rework.",
    videoSrc: "/videos/siteviewGuy3.mp4", // Local video source
    posterSrc: "/videos/siteviewGuy3.mp4", // Local poster image
    link: " ",
    linkText: "See DeviationTrack",
    bgColor: "green.100" // Background color
  },
  {
    title: "Boost Productivity. Eliminate Waste. Streamline Operations with 360° Visibility.",
    description:
      "Experience effortless efficiency with SiteView, where ease of use is built into every feature. Our platform lets you get started without the heavy lifting, ensuring you can focus on delivering top-tier results consistently.",
    videoSrc: "/videos/siteviewGuy4.mp4", // Local video source
    posterSrc: "/videos/siteviewGuy4.mp4", // Local poster image
    link: " ",
    linkText: "Talk to Us to Know More",
    bgColor: "orange.100" // Background color
  },
];

const FeatureSection = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box as="section" py={10} px={5} bg="gray.50">
      <VStack spacing={8} align="center">
        <MotionBox
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          textAlign="center"
        >
          <Heading size="lg" bgClip="text" bgGradient="linear(to-r, blue.400, purple.600)">
            Resolving Real-World Construction Monitoring Challenges with SiteView
          </Heading>
          <Text mt={4}>
            See how SiteView directly addresses the critical needs and challenges faced by the construction industry.
          </Text>
        </MotionBox>

        <VStack spacing={6} align="center" width="100%">
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 1.8 }}
              p={5}
              shadow="md"
              bg={feature.bgColor} // Applying different background color
              rounded="md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              width="100%"
              maxWidth="800px"
            >
              <Flex
                direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                align="center"
              >
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
                <Box flex="1" p={5}>
                  <Heading size="md">{feature.title}</Heading>
                  <Text mt={3}>{feature.description}</Text>
                  <Link
                    mt={3}
                    display="inline-block"
                    color="teal.500"
                    fontWeight="bold"
                    href={feature.link}
                    _hover={{ textDecoration: 'underline', color: 'teal.600' }}
                  >
                    {feature.linkText}
                  </Link>
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
