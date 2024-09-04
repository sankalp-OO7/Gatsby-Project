import React from "react";
import {
  Box,
   Text,
  Heading,
   Icon,
  useColorModeValue,
  SimpleGrid,
   Divider,
} from "@chakra-ui/react";
import { FaQuestionCircle, FaVideo, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ResourceCard = ({ icon, title, description }) => (
  <MotionBox
    whileHover={{ scale: 1.1, translateY: -10 }} // Slightly increase scale and move up on hover
    transition={{ duration: 0.3 }}
    p={8}
    bg="gray.100" // Default background color
    boxShadow="2xl"
    borderRadius="lg"
    textAlign="center"
    position="relative"
    overflow="hidden"
    bgGradient="white"
    color={"blue.600"}
    _hover={{
      bgGradient: "linear(to-r, blue.200, pink.200)", // Gradient background on hover
      color: "white", // Change text color on hover
    }}
  >
    <Icon as={icon} w={16} h={16} color="blue.500" mb={4} /> {/* Larger icon */}
    <Heading size="lg" mb={2} color="black.400"> {/* Larger heading */}
      {title}
    </Heading>
    <Text color="blue.600"> {/* Use inherit color */}
      {description}
    </Text>
  </MotionBox>
);

const AdditionalResourcesSection = () => {
  return (
    <Box
      w="100%"
      minH="100vh"
      p={8}
      bgGradient="linear(to-r, purple.700, blue.500, teal.300)"
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
        mb={8}
        color="pink" // White color for the heading
        fontWeight="extrabold"
        textShadow="1px 1px 5px rgba(0, 0, 0, 0.3)"
      >
        Additional Resources
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="1200px">
        <ResourceCard
          icon={FaQuestionCircle}
          title="Help Center"
          description="Access our comprehensive Help Center for in-depth tutorials, FAQs, and troubleshooting guides."
        />
        <ResourceCard
          icon={FaVideo}
          title="Training Videos"
          description="Explore our library of training videos to leverage all of SiteView.ai's features effectively."
        />
        <ResourceCard
          icon={FaHeadset}
          title="Customer Support"
          description="Our dedicated customer support team is here to assist you. Contact us via email, phone, or live chat for any questions."
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
        Unveiling a New Standard in Construction Management
      </Heading>
      <Text
        fontSize="2xl"
        color="gray.800"
        maxW="800px"
        mx="auto"
        textAlign="center"
        mb={8}
      >
        SiteView.ai is built on the foundation of cutting-edge technologies, offering a user-friendly solution for managing your construction projects in 360°. We strive to empower you with the tools to experience a new standard in efficiency, communication, and data-driven decision making.
      </Text>
      <Text
        fontSize="xl"
        color="ivory"
        bgGradient={"linear(to-r, blue.400, teal.500)"}
        borderRadius={"2xl"}
        p={4}
        maxW="800px"
        mx="auto"
        textAlign="center"
        fontWeight="bold"
      >
        Start capturing your construction site today and unlock the transformative power of SiteView.ai!
      </Text>
    </Box>
  );
};

export default AdditionalResourcesSection;
