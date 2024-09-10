import React, { useEffect, useState } from "react";
import { Box, Image, Text, VStack, Flex, Button } from "@chakra-ui/react";
 import { Link as GatsbyLink, Link } from "gatsby";

const ScrollingSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-item");
      const newActiveIndex = Array.from(elements).findIndex((element) => {
        const rect = element.getBoundingClientRect();
        const viewHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight
        );
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
      });

      setActiveIndex(newActiveIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount to handle initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex
      direction="column"
      align="center"
      py={16}
      px={{ base: 4, md: 8 }}
      bg="blue.900"
      color="white"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Use SiteView at every phase of construction
      </Text>
      <Text fontSize="lg" mb={12}>
        Capture critical milestones throughout the project lifecycle.
      </Text>
      <Box position="relative" width="100%" maxWidth="800px">
        {/* Vertical line with zigzag effect */}
        <Box
          position="absolute"
          top=""
          left="1%"
          width="15px"
          height="40%"
          bg="lightblue"
          transition="transform 2.3s ease-in-out"
          transform={`translateY(${
            activeIndex !== null ? activeIndex * 250 : 0
          }px)`}
          zIndex="0"
          _before={{
            content: '""',
            position: " absolute",
            width: "200%",
            height: "4px",
            bg: "lightblue",
            top: "59%",
            left: activeIndex % 2 === 0 ? "0%" : "0%", // Adjust the line direction
            transition: "left 0.3s ease-in-out",
          }}
        />
        <VStack marginLeft="5%" spacing={16} align="start">
          {sections.map((section, index) => (
            <Flex
              key={index}
              className="scroll-item"
              align="center"
              justifyContent={index % 2 === 0 ? "flex-start" : "flex-end"}
              width="100%"
              position="relative"
            >
              {index % 2 === 0 && (
                <Image
                  src={section.imgSrc}
                  alt={`${section.title} Icon`}
                  boxSize="40px"
                  mr={4}
                  zIndex="2"
                />
              )}
              <Box textAlign={index % 2 === 0 ? "left" : "right"}>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  {section.title}
                </Text>
                <Text fontSize="md">{section.description}</Text>
              </Box>
              {index % 2 !== 0 && (
                <Image
                  src={section.imgSrc}
                  alt={`${section.title} Icon`}
                  boxSize="40px"
                  ml={4}
                  zIndex="2"
                />
              )}
            </Flex>
          ))}
        </VStack>
        {/* Get Started button at the end */}
        <Flex justifyContent="center" mt={16}>
          <Button colorScheme="teal" size="lg">
            <Link as={GatsbyLink} to="/contact-us">
              Start Now 
            </Link> 
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

// Define your sections data here
const sections = [
  {
    imgSrc:
      "https://cdn.prod.website-files.com/615c859841b72966b6929d52/62fe55a387e7691fbed05e79_Pin.png",
    title: "Pre-Construction",
    description: "Site Walk, Existing & Exploratory Conditions, Site Logistics",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/615c859841b72966b6929d52/62fe55a387e7691fbed05e79_Pin.png",
    title: "Construction",
    description: "Site Work, Concrete, Structural, MEPF, Framing & In-Wall",
  },
  {
    imgSrc:
      "https://cdn.prod.website-files.com/615c859841b72966b6929d52/62fe55a387e7691fbed05e79_Pin.png",
    title: "Closeout",
    description:
      "Offline Deliverable, Facility Management Tool, Future Project & Lessons Learned",
  },
];

export default ScrollingSection;
