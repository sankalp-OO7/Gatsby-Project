import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Icon,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUserCircle, FaMobileAlt  } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const UserGuideSection = () => {
  return (
    <Box
      w="100%"
      minH="100vh"
      p={8}
      bgGradient="linear(to-r, purple.700, pink.500, orange.400)"
      color={useColorModeValue("white", "gray.800")}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      {/* Video Section */}
      <Box
        w={{ base: "90%", md: "60%" }}
        h="50vh"
        borderRadius="lg"
        overflow="hidden"
        mb={8}
        boxShadow="xl"
        position="relative"
      >
        <video
          src="/2.mp4"  // Replace this with your actual video file path
          controls
          autoPlay={false}
          loop
          muted
          mb={8}
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        />
      </Box>

      {/* Guide Heading */}
      <Heading
        as="h1"
        size="2xl"
        mb={4}
        bgGradient="linear(to-r, blue.300, blue.600)"
        bgClip="text"
        fontWeight="extrabold"
        textShadow="1px 1px 5px rgba(0, 0, 0, 0.3)"
      >
        USER GUIDE
      </Heading>

      {/* Guide Introduction */}
      <Text fontSize="2xl" mb={6} maxW="600px">
        Capturing and Managing Your Construction Site in 360°
      </Text>
      <Text fontSize="xl" mb={12} maxW="800px" px={4}>
        Welcome to SiteView.ai! This user manual will guide you through capturing
        your construction site in stunning 360° views, navigating your virtual
        environment, and leveraging powerful data management tools to transform
        your project management.
      </Text>

      {/* Getting Started Steps */}
      <VStack spacing={8} align="start" maxW="600px">
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          w="100%"
        >
          <Flex align="center">
            <Icon as={FaUserCircle} w={8} h={8} color="blue.300" mr={4} />
            <Text color={"green.300"} fontSize="xl" fontWeight="bold">
              Create an Account:
            </Text>
          </Flex>
          <Text fontWeight={"bold"} pl={12}>
            Sign up for a free trial or choose a subscription plan that suits your
            project needs.
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          w="100%"
        >
          <Flex align="center">
            <Icon as={FaMobileAlt} w={8} h={8} color="green.300" mr={4} />
            <Text color={"green.300"} fontSize="xl" fontWeight="bold">
              Download the Mobile App (Optional):
            </Text>
          </Flex>
          <Text fontWeight={"bold"} pl={12}>
            Enhance your on-site experience by downloading the SiteView.ai mobile
            app for iOS or Android. Capture 360° images directly from your
            smartphone and access project data on the go.
          </Text>
        </MotionBox>
      </VStack>
    </Box>
  );
};

export default UserGuideSection;
