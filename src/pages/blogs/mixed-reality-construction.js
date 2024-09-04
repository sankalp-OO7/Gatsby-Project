import React from 'react';
import { Box, Container, Heading, Text, Image, Stack, Divider } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import Layout from '../../components/Layout';

const BlogPost = () => {
  return (
    <>
    <Layout>
    <Container maxW="container.lg" py={6}>
      <Box mb={6}>
        <Image 
          src="/blog-images/b7.jpg" 
          alt="Mixed Reality in Construction" 
          objectFit="cover" 
          h="400px"
          w="100%"
          borderRadius="md" 
          mb={4}
        />
        <Heading as="h1" size="xl" mb={4}   bgGradient="linear(to-r, blue.400, teal.500)"  bgClip="text"

        >
          Mixed Reality in Construction Industry: Uses, Advantages and Limitations
        </Heading>
        <Text fontSize="lg" color="gray.700">
          Mixed reality (MR) is viewed by some as a futuristic notion that has yet to find a place in the building industry. On the other hand, embracing it early on comes with many benefits. Information flow is improved, and work is more efficient with MR technologies. They are intuitive to use because they mimic real life, yet without the constraints of the physical world. This article discusses the mixed reality in the construction industry, its uses, advantages, and limitations. 
        </Text>
      </Box>
      <Stack spacing={6}>
        <Box>
          <Heading  bgGradient="linear(to-r, blue.400, teal.500)"  bgClip="text" as="h2" size="lg" mb={2}>
            What is Mixed Reality in Construction?
          </Heading>
          <Text>
            “Mixed reality” refers to a technical advancement blurred between fantasy and reality. Mixed Reality combines real-world things with digital content in an interactive, real-time environment...
          </Text>
        </Box>

        <Box>
          <Heading  bgGradient="linear(to-r, blue.400, teal.500)"  bgClip="text" as="h2" size="lg" mb={2}>
            How can Mixed Reality be Used in Construction?
          </Heading>
          <Text>
            Mixed reality is a technology that mixes the physical and virtual worlds. Mixed reality (MR) is a term that refers to a combination of digital and real-world elements...
          </Text>
        </Box>

        <Box>
          <Heading  bgGradient="linear(to-r, blue.400, teal.500)"  bgClip="text" as="h2" size="lg" mb={2}>
            How is Mixed Reality improving construction?
          </Heading>
          <Text>
            Mixed reality boosts construction by providing perfect alignment of holographic data on the job site via hard hat-mounted devices...
          </Text>
        </Box>

        <Box>
          <Heading  bgGradient="linear(to-r, blue.400, teal.500)"  bgClip="text" as="h2" size="lg" mb={2}>
            Advantages of Mixed Reality in Construction
          </Heading>
          <Text>
            Mixed Reality and holographic technology enable consumers to engage and interact with design data more intuitively by bringing models out of the screen...
          </Text>
        </Box>

        <Box>
          <Heading  bgGradient="linear(to-r, blue.400, teal.500)"  bgClip="text" as="h2" size="lg" mb={2}>
            Limitations of Mixed Reality in the Construction Industry
          </Heading>
          <Text>
            Mixed reality is seen as a costly and immature technology, the biggest barrier to adoption. Furthermore, these constraints impact the mixed reality’s potential usage in buildings...
          </Text>
        </Box>

        <Box>
          <Heading  bgGradient="linear(to-r, blue.400, teal.500)"  bgClip="text" as="h2" size="lg" mb={2}>
            A future of limitless hands-free data by Mixed Reality in Construction
          </Heading>
          <Text>
            The influence of MR on day-to-day work is beneficial. It gives you a larger field of view and hands-free information access. The need to understand and decode 2D drawings and collect data has vanished with a richer user interface and complete 3D support...
          </Text>
        </Box>

        <Box>
          <Heading  bgGradient="linear(to-r, blue.400, teal.500)"  bgClip="text" as="h2" size="lg" mb={2}>
            Conclusion
          </Heading>
          <Text>
            Construction sites are changing. Construction has grown more technologically advanced. Moving on from 3D models and drones, the industry is now using mixed reality to achieve new levels of accuracy and efficiency...
          </Text>
        </Box>
      </Stack>

      <Divider my={6} />
      
      <Text
  as={GatsbyLink}
  to="/"
  fontSize="lg"
  fontWeight="bold"
  bgGradient="linear(to-r, pink.400, teal.500)"
  bgClip="text"
  _hover={{
    bgGradient: "linear(to-r, teal.800, blue.400)",
    bgClip: "text",
    textDecoration: "underline"
  }}
  _focus={{ outline: "none" }}
>
  Back to Home
</Text>    </Container>
    </Layout>
</>
  );
};

export default BlogPost;
