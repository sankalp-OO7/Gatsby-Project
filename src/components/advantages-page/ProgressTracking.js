import React from 'react';
import { Box, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react';

const progressTrackingData = [
  {
    title: 'See It All, Track It All',
    description:
      'Capture detailed 360° views of your construction site. Track progress over time with time-lapse recordings, creating a comprehensive visual record of your project\'s journey.',
    src: 'path/to/image1.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Effortless Remote Monitoring',
    description:
      'Ditch the constant on-site presence. Conduct virtual site visits anytime, anywhere with 360° access. Monitor progress remotely, freeing up valuable time and resources.',
    src: 'path/to/image2.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Real-Time Insights, Data-Driven Decisions',
    description:
      'Gain instant visibility into progress with real-time data. Identify areas lagging behind schedule or exceeding expectations, allowing for proactive adjustments to keep your project on track.',
    src: 'path/to/image3.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Improved Collaboration & Communication',
    description:
      'Share 360° views with stakeholders, fostering transparent communication and clear understanding of progress across teams.',
    src: 'path/to/image4.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Minimize Rework, Maximize Savings',
    description:
      'Identify potential deviations from plans early on. This allows for swift course correction, minimizing costly rework later in the project.',
    src: 'path/to/image5.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Boost Project Efficiency',
    description:
      'Streamline workflows by eliminating unnecessary site visits. Focus your team\'s energy on critical tasks, leading to a more efficient and productive construction process.',
    src: 'path/to/image6.jpg', // Replace with actual image path or URL
  },
];

const ProgressTracking = () => {
  return (
    <Box
      id="progress-tracking"
      py={10}
      minHeight="100vh"
      bgGradient="linear(to-r, purple.500, pink.500)"
      color="white"
      px={5}
    >
      <Heading as="h2" size="2xl" mb={10} textAlign="center" fontWeight="bold" fontFamily="Arial, sans-serif">
        Your Progress Tracking Powerhouse
      </Heading>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
        {progressTrackingData.map((item, index) => (
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
              <Heading as="h3" size="md" mb={3} fontWeight="bold" color="purple.600">
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

export default ProgressTracking;
