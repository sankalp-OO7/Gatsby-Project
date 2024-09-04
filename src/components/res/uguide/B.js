import React from "react";
import {
  Box,
  Text,
  Heading,
  Icon,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaCamera, FaMobileAlt, FaFirstdraft } from "react-icons/fa";
 import { motion } from "framer-motion";

const MotionBox = motion(Box);

const CaptureMethodCard = ({ icon, title, description, videoSrc }) => (
  <MotionBox
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    p={6}
    bg={useColorModeValue("white", "gray.800")}
    bgGradient={"white"}
    boxShadow="xl"
    borderRadius="lg"
    textAlign="center"
    position="relative"
    overflow="hidden"
    _hover={{ bgGradient: "linear(to-r, purple.600, blue.400)" }}
  >
    <Icon as={icon} w={10} h={10} color="blue.500" mb={4} />
    <Heading size="md" mb={2}>
      {title}
    </Heading>
    <Text color={"black"} mb={4}>
      {description}
    </Text>
    <Box
      w="100%"
      h="200px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="gray.200"
    >
      <video
        src={videoSrc}
        controls
        style={{ width: "100%", height: "100%", borderRadius: "10px" }}
      >
        <track kind="captions" src="captions.vtt" srclang="en" />
      </video>
    </Box>
  </MotionBox>
);

const CaptureSection = () => {
  return (
    <Box
      w="100%"
      minH="100vh"
      p={8}
      bgGradient="linear(to-r, purple.800, pink.600, orange.500)"
      color={useColorModeValue("white", "gray.800")}
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        as="h1"
        size="2xl"
        mb={4}
        bgGradient="linear(to-r, blue.300, blue.600)"
        bgClip="text"
        fontWeight="extrabold"
        textShadow="1px 1px 5px rgba(0, 0, 0, 0.3)"
      >
        Capturing Your Site
      </Heading>
      <Text fontSize="lg" mb={12} maxW="800px">
        Learn how to capture your construction site with a variety of methods,
        including 360° cameras, mobile apps, and drones.
      </Text>

      {/* Cards for each capture method */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="1000px">
        <CaptureMethodCard
          icon={FaCamera}
          title="360° Cameras"
          description="SiteView.ai is compatible with a wide range of industry-standard 360° cameras. Refer to our Help Center for a recommended camera list."
          videoSrc="path/to/360-camera-video.mp4" // Replace with your actual video path
        />
        <CaptureMethodCard
          icon={FaMobileAlt}
          title="Mobile App"
          description="The SiteView.ai app utilizes your smartphone's capabilities to capture high-resolution 360° images. Simply follow the in-app guidance."
          videoSrc="path/to/mobile-app-video.mp4" // Replace with your actual video path
        />
        <CaptureMethodCard
          icon={ FaFirstdraft}
          title="Drone Integration"
          description="For capturing large sites or specific aerial views, consider drone integration (subject to permits and regulations)."
          videoSrc="path/to/drone-video.mp4" // Replace with your actual video path
        />
      </SimpleGrid>
    </Box>
  );
};

export default CaptureSection;
