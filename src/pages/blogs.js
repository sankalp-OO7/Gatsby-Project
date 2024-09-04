// src/pages/BlogPage.js

import React from "react";
import {   Container, SimpleGrid, Heading, Text, Image, VStack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import Layout from "../components/Layout";

const blogs = [
  {
    title: "Virtual Construction Management Platform",
    text: "Ant Eye tools will be integrated in a virtual, BIM-enabled, cloud-based construction management platform which is structured to mirror the most advanced integrated design and delivery frameworks for the building sector. The platform will provide installation guidelines, shared design specifications, 3D models and relevant information on regulatory frameworks.",
    image: "/blog-images/b1.png", // Replace with actual image path or URL
    link: "/blogs/virtual-construction-management", // Example route
  },
  {
    title: "ADVANCES IN CONSTRUCTION ENGINEERING",
    text: "Advances in construction engineering began with the ten volumes on architecture completed by Vitruvi, a 1 century B.C. Roman. Vitruvi laid the key and lasting foundation for a study of construction.",
    image: "/blog-images/b2.jpg", // Replace with actual image path or URL
    link: "/blogs/advances-in-construction-engineering", // Example route
  },
  {
    title: "WORKING REMOTELY IS BECOMING A NECESSITY",
    text: "Working remotely is more than common, it’s becoming a necessity for any number of reasons. There are advantages to securing the best talent wherever they might live. It helps an organization’s bottom line. Sometimes, an act of God will disrupt the normal flow of work.",
    image: "/blog-images/b3.webp", // Replace with actual image path or URL
    link: "/blogs/working-remotely", // Example route
  },
  {
    title: "Virtual Management & Virtual Teams: A COVID-19 Blessing For Construction?",
    text: "There’s no doubt that the pandemic has led businesses into work challenges and overcoming these challenges, companies have modified their working patterns and have embraced ‘Remote Work’ to effectively operate the business. COVID-19 has boosted the use of technology in most industries and has pushed the trend of remote work for more traditional industries as well with construction being one of them.",
    image: "/blog-images/b4.jpg", // Replace with actual image path or URL
    link: "/blogs/virtual-management-teams", // Example route
  },
  {
    title: "Women Of Steel- Celebrating The Women In Construction",
    text: "What is the first thing that comes to your mind when you think of a general contractor? Construction industry is always seen as a male dominant industry. It isn’t hard to believe that as of 2019, women only make up to 10.1% of the construction industry out of which only 3.5% work in the fields and trades.",
    image: "/blog-images/b5.png", // Replace with actual image path or URL
    link: "/blogs/women-of-steel", // Example route
  },
  {
    title: "What is mixed reality?",
    text: "Commonly associated with gaming, mixed reality (XR) has been slowly but surely revolutionizing almost every industry in the most unimaginable ways. The mind boggles every time it finds newer and more innovative applications. Little did we know that it could also become a part of a construction company’s toolbox.",
    image: "/blog-images/b6.jpg", // Replace with actual image path or URL
    link: "/blogs/what-is-mixed-reality", // Example route
  },
  {
    title: "Mixed Reality in Construction Industry: Uses, Advantages and Limitations",
    text: "Mixed reality (MR) is viewed by some as a futuristic notion that has yet to find a place in the building industry. On the other hand, embracing it early on comes with many benefits. Information flow is improved, and work is more efficient with MR technologies.",
    image: "/blog-images/b7.jpg", // Replace with actual image path or URL
    link: "/blogs/mixed-reality-construction", // Example route
  },
];

const BlogPage = () => {
  return (
    <Layout>
    <Container maxW="7xl" py={10}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {blogs.map((blog, index) => (
          <LinkBox
            key={index}
            as="article"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            bg="white"
            _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "all 0.3s ease-in-out" }}
          >
            <Image src={blog.image} alt={blog.title} objectFit="cover" h="200px" w="100%" />
            <VStack align="start" p={6} spacing={3}>
              <Heading fontSize="xl" bgGradient="linear(to-r, teal.500, blue.500)" bgClip="text">
                <LinkOverlay as={GatsbyLink} to={blog.link}>
                  {blog.title}
                </LinkOverlay>
              </Heading>
              <Text color="gray.600" noOfLines={4}>
                {blog.text}
              </Text>
            </VStack>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Container>
    </Layout>
  );
};

export default BlogPage;
