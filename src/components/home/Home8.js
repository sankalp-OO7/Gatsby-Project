import React, { useState, useEffect } from "react";
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const MotionBox = motion(Box);


const content = [
  { text: "Project Managers", color: "linear(to-r, skyblue, purple)" },
  { text: "General Managers", color: "linear(to-r, skyblue, orange)" },
  { text: "Project Owner", color: "linear(to-r, purple, skyblue)" },
  { text: "General Contractors", color: "linear(to-r, purple, orange)" },
  { text: "Consultants", color: "linear(to-r, orange, skyblue)" },
  { text: "Architects", color: "linear(to-r, orange, purple)" },
  { text: "Designers", color: "linear(to-r, skyblue, orange)" },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const duration = 1.5; // Animation duration

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({ y: "30%", opacity: 0 }).then(() => {
        setIndex((prevIndex) => (prevIndex + 1) % content.length);
        controls.start({ y: "50%", opacity: 1 });
      });
    }, 1500); // Change content every 0.4 seconds

    return () => clearInterval(interval);
  }, [controls]);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });


  return (
    <MotionBox 
    ref={ref}
    initial={{ opacity: 0 , x:-50}}
    animate={inView ? { opacity: 1, x:0 } : { opacity: 0, x:50 }}
    transition={{ duration: 3.5    }}
    textAlign="center" mt={10} position="relative" px={4}>
      <Heading mb={4} marginRight="10%" fontSize={useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" })}>
        Design Partner <br/> for{" "}
        <Box
          as={motion.div}
          animate={controls}
          transition={{ duration, ease: "easeInOut" }}
          position="absolute"
          left={useBreakpointValue({ base: "50%", md: "50%", lg: "50%" })}
          top={useBreakpointValue({ base: "30%", md: "30%", lg: "25%" })}
          transform="translateY(-10%)"
          fontSize={useBreakpointValue({ base: "xl", sm: "xl", md: "2xl", lg: "4xl" })}
          fontWeight="bold"
          bgGradient={content[index].color}
          bgClip="text"
          whiteSpace="nowrap"
          overflow="hidden"
          marginBottom="100%"
        >
          {content[index].text}
        </Box>
      </Heading>
    </MotionBox>
  );
};

export default Home;
