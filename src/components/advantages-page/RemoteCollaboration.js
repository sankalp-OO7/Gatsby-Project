import React from 'react';
import { Box, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react';

const collaborationData = [
  {
    title: 'Collaborate Seamlessly, Regardless of Location',
    description: 'Eliminate geographical barriers. Share immersive 360° views of your construction site, fostering a shared understanding for teams worldwide. Conduct virtual site visits and collaborate in real-time.',
    src: 'path/to/image1.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Break Down Silos, Build Stronger Teams',
    description: 'Connect on-site crews, remote planners, architects, and stakeholders. SiteView.ai fosters cross-functional collaboration, ensuring everyone is on the same page and working towards a common goal.',
    src: 'path/to/image2.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Enhanced Communication & Transparency',
    description: 'Annotate 360° images to pinpoint issues, assign tasks, and clarify project details. Promote clear communication and avoid misunderstandings for a smoother workflow.',
    src: 'path/to/image3.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Streamlined Decision-Making',
    description: 'Gain real-time insights from 360° data and progress tracking. Make informed decisions collaboratively, even when teams are physically distant.',
    src: 'path/to/image4.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Boost Project Efficiency',
    description: 'Spend less time coordinating and more time building. Remote collaboration with SiteView.ai eliminates the need for constant travel, freeing up valuable time and resources.',
    src: 'path/to/image5.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Reduced Costs & Improved Sustainability',
    description: 'Minimize travel expenses associated with on-site visits. SiteView.ai promotes a more sustainable approach to construction by reducing your carbon footprint.',
    src: 'path/to/image6.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Empower Your Virtual Workforce',
    description: 'Equip remote teams with the tools they need to be successful. SiteView.ai fosters a collaborative environment where everyone feels involved and contributes effectively.',
    src: 'path/to/image7.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Embrace the Power of Remote Collaboration',
    description: 'Build stronger teams, improve project efficiency, and achieve success from anywhere with SiteView.ai.',
    src: 'path/to/image8.jpg', // Replace with actual image path or URL
  },
];

const RemoteCollaboration = () => {
  return (
    <Box
      id="remote-collaboration"
      py={10}
      minHeight="100vh"
      bgGradient="linear(to-r, blue.500, teal.500)"
      color="white"
      px={5}
    >
      <Heading as="h2" size="2xl" mb={10} textAlign="center" fontWeight="bold" fontFamily="Arial, sans-serif">
        Remote Collaboration
      </Heading>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={6}
      >
        {collaborationData.map((item, index) => (
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
              <Heading as="h3" size="md" mb={3} fontWeight="bold" color="blue.600">
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

export default RemoteCollaboration;
