import React from 'react';
import { Box, Heading, Text, Grid, GridItem } from '@chakra-ui/react';

const safetyData = [
  {
    title: 'Proactive Hazard Identification',
    description: 'Leverage 360° views to identify potential safety hazards before they become accidents. Spot unsafe work practices, missing safety equipment, or unclear signage for early intervention.',
  },
  {
    title: 'Remote Safety Monitoring',
    description: 'Conduct virtual safety inspections from anywhere, reducing the need for workers to enter potentially risky areas. This minimizes exposure to hazards and streamlines safety checks.',
  },
  {
    title: 'Improved Training & Awareness',
    description: 'Create immersive 360° training simulations to educate workers on safety procedures and hazard recognition in a realistic environment. Enhance safety awareness and promote a culture of safety.',
  },
  {
    title: 'Enhanced Communication & Collaboration',
    description: 'Share safety concerns with workers and stakeholders through annotated 360° images. This fosters clear communication and ensures everyone is aware of potential risks.',
  },
  {
    title: 'Incident Investigation & Recordkeeping',
    description: 'Utilize 360° documentation to accurately reconstruct accident scenes and identify root causes. Improve future safety protocols based on documented events.',
  },
  {
    title: 'Reduced Downtime & Costs',
    description: 'By preventing accidents and expediting investigations, SiteView.ai helps minimize safety-related downtime and associated costs.',
  },
  {
    title: 'Focus on a Safer Work Environment',
    description: 'Empower your team with the tools to prioritize safety. SiteView.ai contributes to a safer construction site for everyone.',
  },
];

const SafetyManagement = () => {
  return (
    <Box
      id="safety-management"
      py={10}
      minHeight="100vh"
      bgGradient="linear(to-r, blue.500, teal.500)"
      color="white"
      px={5}
    >
      <Heading as="h2" size="2xl" mb={10} textAlign="center" fontWeight="bold" fontFamily="Arial, sans-serif">
        Safety Management
      </Heading>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {safetyData.map((item, index) => (
          <GridItem key={index}>
            <Box
              bg="whiteAlpha.900"
              p={5}
              borderRadius="xl"
              boxShadow="lg"
              transition="transform 0.2s"
              _hover={{ transform: 'scale(1.05)', boxShadow: 'xl', bg: 'white' }}
              color="gray.800"
              cursor="pointer"
            >
              <Heading as="h3" size="md" mb={3} fontWeight="bold" color="teal.600">
                {item.title}
              </Heading>
              <Text fontSize="md" color="gray.600">
                {item.description}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default SafetyManagement;
