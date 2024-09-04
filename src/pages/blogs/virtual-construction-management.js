// src/pages/VirtualConstructionManagement.js

import React from "react";
import { Box, Container, Heading, Text, Image, VStack, Stack, useBreakpointValue } from "@chakra-ui/react";
import Layout from "../../components/Layout";

const VirtualConstructionManagement = () => {
  // Responsive font size for headings
  const headingFontSize = useBreakpointValue({ base: "2xl", md: "4xl" });
  const textFontSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Layout>
    <Container maxW="7xl" py={10}>
      {/* Main Image Section */}
      <Box>
        <Image
          src="/blog-images/b1.png" // Replace with actual image path or URL
          alt="Virtual Construction Management Platform"
          w="100%"
          h={{ base: "200px", md: "400px" }}
          objectFit="cover"
          borderRadius="md"
          mb={6}
        />
      </Box>

      {/* Content Section */}
      <VStack align="start" spacing={6}>
        {/* Title */}
        <Heading fontSize={headingFontSize} bgGradient="linear(to-r, teal.400, blue.500)" bgClip="text">
          Virtual Construction Management Platform
        </Heading>

        {/* Introduction Paragraph */}
        <Text fontSize={textFontSize} color="gray.700">
          Ant Eye tools will be integrated in a virtual, BIM-enabled, cloud-based construction management platform which is structured to mirror the most advanced integrated design and delivery frameworks for the building sector.
        </Text>

        {/* Detailed Paragraphs */}
        <Stack spacing={4} fontSize={textFontSize} color="gray.600">
          <Text>
            The platform will provide installation guidelines, shared design specifications, 3D models and relevant information on regulatory frameworks. In addition, workers and their supervisors will have access to workflow, status, training information and product data sheets through their tablets.
          </Text>
          <Text>
            During the project, this platform will be integrated into the operations of small and medium-sized enterprise (SME) contractors, large construction firms and end user clients directly within the consortium and work program activities, assuring systematic and scientific performance measures, feedback and powerful exploitation.
          </Text>
        </Stack>

        {/* Optional Subsections */}
        <Heading fontSize={headingFontSize} color="teal.500" mt={8}>
          Benefits and Applications
        </Heading>
        <Text fontSize={textFontSize} color="gray.700">
          This cloud-based platform will revolutionize the way construction projects are managed. It will offer tools that facilitate real-time communication, efficient workflow management, and detailed tracking of project progress.
        </Text>

        <Text fontSize={textFontSize} color="gray.700">
          SMEs and large firms alike will benefit from the integration of advanced technologies that ensure projects are completed on time, within budget, and to the highest quality standards.
        </Text>
      </VStack>
    </Container>
    </Layout>
  );
};

export default VirtualConstructionManagement;
