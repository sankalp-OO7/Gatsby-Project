import React from 'react';
import { Box, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react';

const planningMonitoringData = [
  {
    title: 'Plan with Precision',
    description:
      'Immerse yourself in the construction site with 360° views. Understand existing conditions, identify potential clashes with existing structures, and make data-driven decisions for a smoother build.',
    src: 'path/to/image1.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Monitor Progress Remotely',
    description:
      'Ditch constant site visits. Track progress in real-time with 360° images and time-lapse recordings. Identify deviations from plans early, allowing for swift adjustments and course correction.',
    src: 'path/to/image2.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Enhanced Communication & Collaboration',
    description:
      'Share virtual site visits with stakeholders worldwide. Foster clear communication between planners, architects, and field teams, ensuring everyone\'s on the same page.',
    src: 'path/to/image3.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Improved Efficiency & Reduced Costs',
    description:
      'Streamline workflows by eliminating unnecessary travel. Identify and address issues early, minimizing costly rework later.',
    src: 'path/to/image4.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Boost Project Success',
    description:
      'Make data-driven decisions with real-time progress tracking. Mitigate risks, optimize resource allocation, and stay ahead of schedule for successful project completion.',
    src: 'path/to/image5.jpg', // Replace with actual image path or URL
  },
];

const PlanningMonitoring = () => {
  return (
    <Box
      id="planning-monitoring"
      py={10}
      minHeight="100vh"
      bgGradient="linear(to-r, teal.400, blue.500)"
      color="white"
      px={5}
    >
      <Heading as="h2" size="2xl" mb={10} textAlign="center" fontWeight="bold" fontFamily="Arial, sans-serif">
        Planning & Monitoring
      </Heading>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
        {planningMonitoringData.map((item, index) => (
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
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src={item.src}
                alt={item.title}
                borderRadius="md"
                mb={4}
                width="100%"
                height="150px"
                objectFit="cover"
              />
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

export default PlanningMonitoring;
