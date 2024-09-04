import React from "react";
import {
  Box,
  Text,
  Heading,
  useColorModeValue,
  SimpleGrid,
  Divider,
  Icon,
} from "@chakra-ui/react";
import {
  FaUpload,
  FaMobileAlt,
  FaEye,
  FaMapSigns,
  FaCogs,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const FeatureCard = ({ icon, title, description, videoSrc }) => (
  <MotionBox
    whileHover={{ scale: 1.05, translateY: -10 }}
    transition={{ duration: 0.3 }}
    p={6}
    mt={4}
    bg="gray.100" // Default background color
    boxShadow="2xl"
    bgGradient={"white"}
    borderRadius="lg"
    textAlign="center"
    color={"black"}
    position="relative"
    overflow="hidden"
    _hover={{
      bgGradient: "linear(to-r,purple.400 ,cyan.600 )", // Gradient background on hover
      color: "white", // Change text color on hover
    }}
  >
    <Icon as={icon} w={12} h={12} color="blue.500" mb={4} />
    <Heading size="md" mb={6} color="inherit">
      {" "}
      {/* Use inherit color */}
      {title}
    </Heading>
    <Text mb={4} color="inherit">
      {" "}
      {/* Use inherit color */}
      {description}
    </Text>
    {videoSrc && (
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
    )}
  </MotionBox>
);

const UploadNavigateSection = () => {
  return (
    <Box
      w="100%"
      minH="100vh"
      p={8}
      bgGradient="linear(to-r, teal.800, purple.600, pink.500)"
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
        mb={6}
        color="white" // White color for the heading
        fontWeight="extrabold"
        textShadow="1px 1px 5px rgba(0, 0, 0, 0.3)"
      >
        Uploading Your Captures
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} maxW="1000px">
        <FeatureCard
          icon={FaUpload}
          title="Drag & Drop"
          description="Drag and drop your captured 360° images and videos directly into the SiteView.ai web platform."
          videoSrc="path/to/upload-video.mp4" // Replace with actual video path
        />
        <FeatureCard
          icon={FaMobileAlt}
          title="Mobile App Upload"
          description="Within the mobile app, seamlessly upload captured 360° images to your project."
          videoSrc="path/to/mobile-upload-video.mp4" // Replace with actual video path
        />
      </SimpleGrid>

      <Divider my={12} borderColor="whiteAlpha.500" />

      <Heading
        as="h1"
        size="2xl"
        mb={4}
        color="white" // White color for the heading
        fontWeight="extrabold"
        textShadow="1px 1px 5px rgba(0, 0, 0, 0.3)"
      >
        Navigating Your Virtual Construction Site
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="1200px">
        <FeatureCard
          icon={FaEye}
          title="Immersive 360° Views"
          description="Explore your construction site remotely with stunning 360° views. Zoom in for detailed inspections or pan around to get a complete sense of your project's progress."
          videoSrc="path/to/immersive-views-video.mp4" // Replace with actual video path
        />
        <FeatureCard
          icon={FaMapSigns}
          title="Intuitive Navigation Tools"
          description="Use the navigation tools within the platform to move around your virtual site effortlessly. Jump to specific locations or follow a predefined path for a guided tour."
          videoSrc="path/to/navigation-tools-video.mp4" // Replace with actual video path
        />
        <FeatureCard
          icon={FaCogs}
          title="SLAM Technology"
          description="SiteView.ai utilizes SLAM (Simultaneous Localization and Mapping) algorithms to stitch together your 360° captures, creating a cohesive and accurate virtual representation of your project."
          videoSrc="path/to/slam-tech-video.mp4" // Replace with actual video path
        />
      </SimpleGrid>
    </Box>
  );
};

export default UploadNavigateSection;
