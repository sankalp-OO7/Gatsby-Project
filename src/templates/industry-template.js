import React from "react";
import { graphql } from "gatsby";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Layout from "../components/Layout";
import '@fontsource/roboto'; // For Roboto font
import '@fontsource/open-sans'; // For Open Sans font

const gradientBg = 'linear(to-r, gray.800, gray.600)';
const IndustryTemplate = ({ pageContext }) => {
  const {  industry } = pageContext;
  // Fallback if industry data is not available
  if (!industry) {
    return <Box>No industry data found</Box>;
  }

  return (
    <Layout>
  <Box>
    {/* Full-Screen Image with Overlay Text */}
    <Box
      position="relative"
      width="100vw"
      height="90vh"
      overflow="hidden"
    >
      <Image
        src={industry.image}
        alt={industry.name}
        objectFit="cover"
        width="100%"
        height="100%"
        style={{
          filter: 'brightness(0.7) grayscale(0.1)', // Black and white effect
          transition: 'filter 0.3s',
        }}
      />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        p={4}
        textAlign="center"
        bgGradient="linear(to-t, blackAlpha.900, transparent)"
      >
        <Heading color="white" size="2xl">
          {industry.name.replace("-", " ")}
        </Heading>
      </Box>
    </Box>

    {/* Points Section */}
    <Box p={4} bg={gradientBg}>
    {Object.entries(industry.points).map(([title, content], index) => (
      <Box
        key={index}
        p={12}
        bg="gray.900"
        borderRadius="md"
        mb={10}
        mt={10}
        _hover={{ transform: 'scale(0.95)', boxShadow: 'lg', bg: 'gray.800' }}
        transition="transform 0.3s, box-shadow 0.3s, bg 0.3s"
        boxShadow="md"
      >
        <Heading 
          size="lg" 
          color="white" 
          fontFamily="'Roboto', sans-serif"
        >
          {title.replace(/_/g, " ")}
        </Heading>
        <Text color="gray.300" fontFamily="'Open Sans', sans-serif">
          {content}
        </Text>
      </Box>
    ))}
  </Box>
  </Box>
    </Layout>
  );
};

export default IndustryTemplate;

export const query = graphql`
  query ($slug: String!) {
    allDataJson(
      filter: { industries: { elemMatch: { name: { eq: $slug } } } }
    ) {
      nodes {
        industries {
          name
          image
          points {
            Mega_scale
            Specialized_Machinery
            Project_Management
            Budget_Constraints
            Safety_Regulators
            Connectivity
            Workforce_Management
            Predictive_Maintenance
            Security
            Management___Repair
            Security_and_Loss_Prevention
            Regulatory_Compliance
            Specialized_Spaces
            Coordination_with_Stakeholders
            Scalability
            Space_Utilization
            Flexibility___Scalability
            Safety_Regulations
            Complexity
            Scalability___Flexibility
          }
        }
      }
    }
  }
`;
