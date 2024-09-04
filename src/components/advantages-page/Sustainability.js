// import React from 'react';
// import { Box, Heading } from '@chakra-ui/react';

// const Sustainability = () => {
//   return (
//     <Box id="sustainability" py={10} minHeight="100vh">
//       <Heading>Sustainability</Heading>
//       {/* Content for Sustainability */}
//     </Box>
//   );
// };

// export default Sustainability;
import React from 'react';
import { Box, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react';

// Updated data for Progress Tracking
const progressTrackingData = [
  {
    title: 'Reduce, Reuse, Revolutionize',
    description:
      'Eliminate unnecessary travel with remote progress monitoring via 360° views. This cuts down on carbon emissions associated with site visits.',
    src: 'path/to/image1.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Minimize Waste Through Visibility',
    description:
      'Identify potential issues early with detailed visual documentation. This reduces rework, saving materials and minimizing construction waste.',
    src: 'path/to/image2.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Optimize Resource Allocation',
    description:
      'Gain real-time data on progress and resource usage. Make informed decisions to optimize material use and equipment deployment, promoting resource efficiency.',
    src: 'path/to/image3.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Improved Site Management',
    description:
      'Streamline workflows and communication with SiteView.ai, leading to a more controlled construction process. This minimizes resource misuse and environmental impact.',
    src: 'path/to/image4.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Data-Driven Sustainability',
    description:
      'Analyze captured data to identify areas for improvement in resource usage and waste reduction. Track your sustainability progress and make data-driven decisions for a greener construction future.',
    src: 'path/to/image5.jpg', // Replace with actual image path or URL
  },
  {
    title: 'Embrace Transparency & Accountability',
    description:
      'SiteView.ai fosters clear communication and documentation, allowing stakeholders to track and promote sustainable practices throughout the project.',
    src: 'path/to/image6.jpg', // Replace with actual image path or URL
  },
];

const sustainability = () => {
  return (
    <Box
      id="sustainability"
      py={10}
      minHeight="100vh"
      bgGradient="linear(to-r, teal.500, green.500)"
      color="white"
      px={5}
    >
      <Heading as="h2" size="2xl" mb={10} textAlign="center" fontWeight="bold" fontFamily="Arial, sans-serif">
        Sustainability
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

export default sustainability;
