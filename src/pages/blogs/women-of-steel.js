// src/pages/women-of-steel.js

import React from 'react';
import {   Heading, Text, VStack, Image, Container } from '@chakra-ui/react';
import Layout from '../../components/Layout';

const WomenOfSteel = () => {
  return (
    <Layout>
    <Container maxW="1200px" p={6} mx="auto">
      {/* Main Heading */}
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Women Of Steel - Celebrating The Women In Construction
      </Heading>

      {/* Introduction Section */}
      <VStack align="start" spacing={6} mb={8}>
        <Text fontSize="lg">
          What is the first thing that comes to your mind when you think of a general contractor? The construction industry is often seen as a male-dominated field, and with good reason. As of 2019, women only made up 10.1% of the construction industry, with a mere 3.5% working directly in the fields and trades.
        </Text>

        <Text fontSize="lg">
          Although workplaces and teams in the industry are becoming more cooperative, an unconscious bias still lingers, portraying construction as a male-dominated industry. Despite strides towards inclusivity, a significant gap remains that we must strive to close. Achieving true equality requires gradual progress, and initiatives like Women in Construction Week play a crucial role in this journey.
        </Text>

        <Text fontSize="lg">
          Historically, it wasn’t easy for a minority to thrive in such an environment. However, over time, conditions have improved, providing women with more opportunities in the industry. The advancement of technology and increased internet literacy have made it easier for women to work both on and off the field. Women are now seen as equally competent, possessing the same skill sets as men, and excelling due to their renowned negotiation skills. They bring a unique balance to the job site, and workplaces are becoming more accommodating and adaptive to the needs of working women. Some construction companies are even led by women, highlighting their growing influence and the industry's potential for growth.
        </Text>

        <Image src="https://via.placeholder.com/600x300" alt="Women in Construction" mb={8} />

        <Text fontSize="lg">
          Many women who work in the field are proving that they can meet or exceed the standards set by their male counterparts. In fact, many women express a deep love for the industry because it offers something new every day, and each project brings its own unique challenges. As more women enter the field, they are breaking the glass ceiling and reshaping the landscape of construction.
        </Text>

        <Text fontSize="lg">
          Associations like the National Association of Women in Construction (NAWIC) are making great strides in transforming the industry into a welcoming place for women, which is revolutionary. Their efforts to pave new paths in construction have led to a positive shift in the industry’s culture. Celebrating achievements like these during Women in Construction Week, followed by International Women’s Day, is a fitting tribute to the progress made.
        </Text>

        <Text fontSize="lg">
          Women working in such a rugged and traditionally male-dominated industry is a powerful sign of evolving mindsets, diminishing prejudices, and, most importantly, a beacon of hope and encouragement for future generations.
        </Text>
      </VStack>
    </Container>
    </Layout>
  );
};

export default WomenOfSteel;
