import { Box, Flex, Heading, Image, Text, Link, VStack } from '@chakra-ui/react';
import React from 'react';

const ThreeUserscard = () => {
  return (
    <Box as="section" py={10} bg="gray.50">
      <Box maxW="7xl" mx="auto" px={8}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="xl">
            Designed for the Construction Industry
          </Heading>
          <Heading as="h3" size="lg" fontWeight="medium" color="gray.600">
            Crafted for Construction: Tailored to Your Needs
          </Heading>
        </VStack>

        <Flex mt={10} justify="space-between" wrap="wrap">
          {cardData.map((card, index) => (
            <VStack
              key={index}
              bg="white"
              borderRadius="lg"
              boxShadow="lg"
              overflow="hidden"
              w={{ base: 'full', md: '30%' }}
              mb={4}
            >
              <Image src={card.imgSrc} alt={card.title} w="full" h="auto" />
              <Box p={6}>
                <Heading as="h3" size="md" mb={4}>
                  {card.title}
                </Heading>
                <Text mb={4}>{card.description}</Text>
                <Link
                  href={card.link}
                  color="teal.500"
                  fontWeight="bold"
                  _hover={{ textDecoration: 'underline' }}
                >
                  Learn More
                </Link>
              </Box>
            </VStack>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

const cardData = [
  {
    imgSrc: 'https://track3d.ai/wp-content/themes/Track3D/assets/img/homeplatform1.webp',
    title: 'Owners',
    description:
      'Enhance oversight and ensure your contractors and subcontractors deliver on time and within budget.',
    link: '#'
  },
  {
    imgSrc: 'https://track3d.ai/wp-content/themes/Track3D/assets/img/homeplatform2.webp',
    title: 'General Contractors',
    description:
      'Empower your teams with powerful monitoring tools to improve control, execute better, and reduce risks.',
    link: '#'
  },
  {
    imgSrc: 'https://track3d.ai/wp-content/themes/Track3D/assets/img/homeplatform3.webp',
    title: 'Trade Partners',
    description:
      'Elevate project execution and control over your fast-paced projects with comprehensive progress analytics.',
    link: '#'
  }
];

export default ThreeUserscard;
