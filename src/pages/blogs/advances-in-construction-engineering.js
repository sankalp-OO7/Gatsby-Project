// src/pages/AdvancesInConstructionEngineering.js

import React from "react";
import { Box, Container, Heading, Text, Image, VStack, useBreakpointValue } from "@chakra-ui/react";
import Layout from "../../components/Layout";

const AdvancesInConstructionEngineering = () => {
  // Responsive font size for headings and text
  const headingFontSize = useBreakpointValue({ base: "2xl", md: "4xl" });
  const textFontSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Layout>
    <Container maxW="7xl" py={10}>
      {/* Main Image Section */}
      <Box>
        <Image
          src="/blog-images/b2.jpg" // Replace with actual image path or URL
          alt="Advances in Construction Engineering"
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
        <Heading
          fontSize={headingFontSize}
          bgGradient="linear(to-r, teal.400, blue.500)"
          bgClip="text"
          textAlign="center"
          w="full"
          py={2}
        >
          Advances in Construction Engineering
        </Heading>

        {/* Detailed Paragraphs */}
        <VStack align="start" spacing={4} fontSize={textFontSize} color="gray.700">
          <Text textAlign="justify">
            Advances in construction engineering began with the ten volumes on architecture completed by Vitruvi, a 1st century B.C. Roman. Vitruvi laid the key and lasting foundation for a study of construction. A principle of construction is a use of an applied ontology based in the upper ontology.
          </Text>
          <Text textAlign="justify">
            In practice, these ontologies take on a form of breakdown structures such as the work breakdown structure. Usually, breakdown structures form metadata to represent a construction activity; there are notable cases at exceptionally large construction companies where they are simply numbered.
          </Text>
          <Text textAlign="justify">
            The research that forms virtual design and construction (VDC) is based on scientific evidence and validation measured against a best theory, as opposed to a best practice. This approach, pioneered by Dr. Kunz, marked a departure from earlier methodologies focused on best practices. Scientific methods in construction research involve formulating hypotheses and testing them to failure for validation.
          </Text>
          <Text textAlign="justify">
            A core concept in VDC is spacetime dimensions, including three space dimensions and a fourth, time. Additional dimensions of cost and quality are also considered. Vitruvi recognized the importance of these dimensions long before the advent of modern computing, which now enhances the representation of these dimensions through building information modeling (BIM).
          </Text>
          <Text textAlign="justify">
            The introduction of computing required alignment with software developers, as software is less forgiving than pencil and paper in mixing methods from different schools of thought. This need for integration gave rise to interoperability research, demonstrated practically by Industry Foundation Classes (IFC).
          </Text>
          <Text textAlign="justify">
            Today, the most compelling advances in VDC are in areas like computer vision, artificial intelligence, and the architecture of transmission (AoT), which provide an alternative to commissioned IoT technologies. VDC's application in the work zone is critical, where the workforce is central. Developing an educated workforce with technical know-how is essential to utilize the technological tools provided by VDC effectively.
          </Text>
        </VStack>
      </VStack>
    </Container>
    </Layout>
  );
};

export default AdvancesInConstructionEngineering;
