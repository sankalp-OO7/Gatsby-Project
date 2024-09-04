import React from "react";
import {
  Box,
  Text,
  Heading,
  useColorModeValue,
  SimpleGrid,
  Icon,
  Divider,
} from "@chakra-ui/react";
import {
  FaCloud,
  FaUserShield,
  FaUsers,
  FaBrain,
  FaVideo,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const FeatureCard = ({ icon, title, description, videoSrc }) => (
  <MotionBox
    whileHover={{ scale: 1.05, translateY: -10 }}
    transition={{ duration: 0.3 }}
    p={6}
    bg="gray.100" // Default background color
    boxShadow="2xl"
    borderRadius="lg"
    textAlign="center"
    position="relative"
    overflow="hidden"
    color={"black"}
    mt={4}
    bgGradient={"white"}
    _hover={{
      bgGradient: "linear(to-l, gray.500, purple.400)", // Gradient background on hover
      color: "white", // Change text color on hover
    }}
  >
    <Icon as={icon} w={12} h={12} color="blue.500" mb={4} />
    <Heading size="md" mb={2} color="inherit">
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

const DataManagementSection = () => {
  return (
    <Box
      w="100%"
      minH="100vh"
      p={8}
      bgGradient="linear(to-r, purple.800, blue.600, cyan.500)"
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
        color="white" // White color for the heading
        fontWeight="extrabold"
        textShadow="1px 1px 5px rgba(0, 0, 0, 0.3)"
      >
        Data Management and Collaboration
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="1200px">
        <FeatureCard
          icon={FaCloud}
          title="Centralized Data Repository"
          description="Store all your project data – 360° images, time-lapse recordings, progress reports – in one secure, cloud-based location."
          videoSrc="path/to/data-repository-video.mp4" // Replace with actual video path
        />
        <FeatureCard
          icon={FaUserShield}
          title="Granular Access Control"
          description="Assign different permission levels to team members, ensuring only authorized users can access specific project data."
          videoSrc="path/to/access-control-video.mp4" // Replace with actual video path
        />
        <FeatureCard
          icon={FaUsers}
          title="Real-Time Collaboration"
          description="Share your virtual construction site with colleagues and stakeholders. Collaborate in real-time, discuss project details, and annotate 360° images directly within the platform."
          videoSrc="path/to/real-time-collaboration-video.mp4" // Replace with actual video path
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
        Advanced Features (Optional)
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} maxW="1000px">
        <FeatureCard
          icon={FaBrain}
          title="AI-Powered Insights (Select Plans)"
          description="Upgrade your plan to unlock the power of Artificial Intelligence (AI) for automated tasks like defect detection and progress tracking analysis."
          videoSrc="path/to/ai-insights-video.mp4" // Replace with actual video path
        />
        <FeatureCard
          icon={FaVideo}
          title="Time-Lapse Recording"
          description="Monitor progress over time with time-lapse recordings generated from your uploaded 360° images."
          videoSrc="path/to/time-lapse-video.mp4" // Replace with actual video path
        />
      </SimpleGrid>
    </Box>
  );
};

export default DataManagementSection;
