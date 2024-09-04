import React from 'react';
import { Box, Heading, Text, Stack, Image,   Grid, GridItem } from '@chakra-ui/react';
import '../../styles/horizontalNav.module.css';

// Example images/videos - replace with actual paths or URLs
const mediaItems = [
  { type: 'image', src: '../1.jpg', alt: '360° View of Construction Site' },
  { type: 'video', src: '../2.mp4', alt: 'Centralized Data Repository' },
  { type: 'image', src: '../3.png', alt: 'Effortless Data Sharing' },
  { type: 'image', src: 'path/to/image4.jpg', alt: 'Enhanced Project Transparency' }
];

const DocumentationData = () => {
  return (
    <Box
 
      id="documentation-data"
      py={12}
      mt={0}
      minHeight="100vh"
      bgGradient="linear(to-r, purple.400, pink.400)"
      color="white"
      px={5}
    >
      <Heading as="h2" size="2xl" mb={10} textAlign="center" fontWeight="bold" fontFamily="Arial, sans-serif">
        Documentation & Data
      </Heading>

      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={6}
      >
        {/* Section 1 */}
        <GridItem>
          <Box bg="whiteAlpha.900" p={5} borderRadius="xl" boxShadow="lg" overflow="hidden">
            <Image
              src={mediaItems[0].src}
              alt={mediaItems[0].alt}
              borderRadius="md"
              objectFit="cover"
              mb={4}
            />
            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              Capture Everything, Miss Nothing
            </Text>
            <Text fontSize="md" color="gray.600">
              Capture comprehensive 360° views of your construction site, capturing details traditional photos might miss. Create a rich visual record of your project's progress.
            </Text>
          </Box>
        </GridItem>

        {/* Section 2 */}
        <GridItem>
          <Box bg="whiteAlpha.900" p={5} borderRadius="xl" boxShadow="lg" overflow="hidden">
            <Image
              src={mediaItems[1].src}
              alt={mediaItems[1].alt}
              borderRadius="md"
              objectFit="cover"
              mb={4}
            />
            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              Centralized Data Repository
            </Text>
            <Text fontSize="md" color="gray.600">
              Store all your project data – 360° images, time-lapse recordings, progress reports – in one secure, cloud-based location. Eliminate document clutter and ensure easy access for all stakeholders.
            </Text>
          </Box>
        </GridItem>

        {/* Section 3 */}
        <GridItem>
          <Box bg="whiteAlpha.900" p={5} borderRadius="xl" boxShadow="lg" overflow="hidden">
            <Image
              src={mediaItems[2].src}
              alt={mediaItems[2].alt}
              borderRadius="md"
              objectFit="cover"
              mb={4}
            />
            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              Effortless Data Sharing & Collaboration
            </Text>
            <Text fontSize="md" color="gray.600">
              Share 360° data and reports with stakeholders instantly, fostering seamless collaboration across teams and locations. Improve communication and keep everyone on the same page.
            </Text>
          </Box>
        </GridItem>

        {/* Section 4 */}
        <GridItem>
          <Box bg="whiteAlpha.900" p={5} borderRadius="xl" boxShadow="lg" overflow="hidden">
            <Image
              src={mediaItems[3].src}
              alt={mediaItems[3].alt}
              borderRadius="md"
              objectFit="cover"
              mb={4}
            />
            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              Enhanced Project Transparency
            </Text>
            <Text fontSize="md" color="gray.600">
              Provide a clear visual audit trail with 360° documentation. This allows for improved transparency and accountability throughout the construction process.
            </Text>
          </Box>
        </GridItem>
      </Grid>

      {/* Additional Text Content in Cards */}
      <Stack spacing={4} mt={10} px={{ base: 0, lg: 20 }}>
        <Box bg="whiteAlpha.900" p={5} borderRadius="xl" boxShadow="lg" textAlign="center">
          <Text fontSize="lg" fontWeight="bold" color="gray.800">
            Streamlined Reporting & Recordkeeping
          </Text>
          <Text fontSize="md" color="gray.600">
            Generate comprehensive reports with detailed 360° visuals. Simplify recordkeeping and streamline handover processes.
          </Text>
        </Box>
        <Box bg="whiteAlpha.900" p={5} borderRadius="xl" boxShadow="lg" textAlign="center">
          <Text fontSize="lg" fontWeight="bold" color="gray.800">
            Data-Driven Decisions
          </Text>
          <Text fontSize="md" color="gray.600">
            Leverage captured data to gain valuable insights into project progress and identify areas for improvement. Make informed decisions based on real-world data.
          </Text>
        </Box>
        <Box bg="whiteAlpha.900" p={5} borderRadius="xl" boxShadow="lg" textAlign="center">
          <Text fontSize="lg" fontWeight="bold" color="gray.800">
            Reduced Paper Waste
          </Text>
          <Text fontSize="md" color="gray.600">
            Eliminate the need for paper-based documentation. SiteView.ai promotes a sustainable approach to project management.
          </Text>
        </Box>
        <Box bg="whiteAlpha.900" p={5} borderRadius="xl" boxShadow="lg" textAlign="center">
          <Text fontSize="lg" color="gray.600">
            SiteView.ai empowers you to manage data and documentation efficiently, ensuring clear communication, project transparency, and data-driven decision-making.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default DocumentationData;
