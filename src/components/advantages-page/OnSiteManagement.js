import React from 'react';
import { Box, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react';

const onsiteData = [
  {
    title: 'Enhanced Visibility & Communication',
    description: 'Get a clear picture of the entire project through shared 360° views. Eliminate confusion and ensure everyone on-site understands project plans and progress.',
    src: 'path/to/image1.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Streamlined Workflows & Increased Efficiency',
    description: 'Reduce time spent searching for information. Access project data, plans, and updates directly through the SiteView.ai mobile app, allowing for faster task completion.',
    src: 'path/to/image2.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Improved Quality Control & Defect Management',
    description: 'Capture detailed 360° images of work progress. Identify potential issues early, allowing for timely correction and minimizing rework later.',
    src: 'path/to/image3.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Enhanced Collaboration & Team Spirit',
    description: 'Collaborate seamlessly with remote teams and management. Annotate 360° images to pinpoint issues, receive feedback, and stay connected for a smoother workflow.',
    src: 'path/to/image4.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Reduced Reliance on Paperwork',
    description: 'Access and update project documents electronically through the SiteView.ai app. Eliminate paper waste and simplify recordkeeping for on-site crews.',
    src: 'path/to/image5.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Improved Training & Safety',
    description: 'Access safety protocols and training materials through the mobile app. Engage with immersive 360° training simulations to enhance safety awareness and knowledge retention.',
    src: 'path/to/image6.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Empowerment & Increased Productivity',
    description: 'Equip your on-site team with the tools they need to be successful. SiteView.ai empowers them to work more independently, efficiently, and confidently.',
    src: 'path/to/image7.jpg', // Replace with actual image path or URL
  },
];

const OnSiteManagement = () => {
  return (
    <Box
      id="on-site-management"
      py={10}
      minHeight="100vh"
      bgGradient="linear(to-r, purple.500, pink.500)"
      color="white"
      px={5}
    >
      <Heading as="h2" size="2xl" mb={10} textAlign="center" fontWeight="bold" fontFamily="Arial, sans-serif">
        On-Site Management
      </Heading>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {onsiteData.map((item, index) => (
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

export default OnSiteManagement;
