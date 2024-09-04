import React from 'react';
import { Box, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react';

const qualityControlData = [
  {
    title: 'See it All, Catch it Early',
    description:
      'Capture detailed 360° views and track progress with time-lapses. This comprehensive visual record lets you identify potential issues before they become costly problems.',
    src: 'path/to/image1.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Remote Inspections, Real Results',
    description:
      'No need for constant on-site visits. Share virtual tours with your QA/QC team, allowing them to inspect remotely and collaborate seamlessly.',
    src: 'path/to/image2.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Clear Communication, Faster Resolution',
    description:
      'Annotate 360° images to pinpoint issues and assign responsibility. This streamlines communication and ensures defects get addressed quickly.',
    src: 'path/to/image3.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Reduced Rework, Increased Savings',
    description:
      'Early issue detection minimizes costly rework later. Plus, remote inspections and streamlined workflows boost efficiency, saving you time and money.',
    src: 'path/to/image4.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Empower Your QA/QC Team',
    description:
      'SiteView.ai empowers your QA/QC team to work smarter, not harder, leading to higher quality construction projects.',
    src: 'path/to/image5.jpg', // Replace with actual image path or URL
  },
];

const QualityControl = () => {
  return (
    <Box
      id="quality-control"
      py={10}
      minHeight="100vh"
      bgGradient="linear(to-r, purple.500, pink.500)"
      color="white"
      px={5}
    >
      <Heading as="h2" size="2xl" mb={10} textAlign="center" fontWeight="bold" fontFamily="Arial, sans-serif">
        Quality Control
      </Heading>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
        {qualityControlData.map((item, index) => (
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

export default QualityControl;
