// src/pages/remote-work.js

import React from 'react';
import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';
import Layout from '../../components/Layout';

const RemoteWork = () => {
  return (
    <Layout>
    <Box p={8} maxWidth="1200px" mx="auto">
      {/* Main Heading */}
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        WORKING REMOTELY IS BECOMING A NECESSITY
      </Heading>

      {/* Introduction Section */}
      <Text mb={4}>
        Working remotely is more than common; it’s becoming a necessity for any number of reasons.
        There are advantages to securing the best talent wherever they might live. It helps an
        organization’s bottom line. Sometimes, an act of God will disrupt the normal flow of work.
      </Text>

      <Text mb={4}>
        Whatever the reason, virtual project management comes with its own set of challenges that
        are added to the already difficult task of managing a project. There are traditional
        protocols for making assignments, managing resources, tracking progress, and updating
        stakeholders, but not when they’re in a different locale or a foreign country.
      </Text>

      {/* Image Placeholder */}
      <Image src="https://via.placeholder.com/600x300" alt="Remote Work" mb={8} />

      {/* Subsection: What Is Virtual Project Management? */}
      <VStack align="start" mb={8} spacing={4}>
        <Heading as="h2" size="xl">
          What Is Virtual Project Management?
        </Heading>
        <Text>
          Virtual project management is the process by which one manages projects via remote or
          virtual teams. When teams are distributed across different time zones, they still need to
          get assigned tasks, and that work must be monitored and tracked to make sure it stays on
          schedule. As more teams work from home, virtual project management has become more
          defined.
        </Text>
        <Text>
          While the basics remain the same, such as the life cycle of the project and the various
          disciplines that go into controlling every aspect of a project, there is a difference. And
          it’s a big one. Those teams being managed are not in one place but rather scattered across
          the four corners of the world. Not having physical contact with one’s team creates new
          obstacles that project managers must overcome.
        </Text>
        {/* Image Placeholder */}
        <Image src="https://via.placeholder.com/600x300" alt="Virtual Project Management" />
      </VStack>

      {/* More Sections */}
      <VStack align="start" mb={8} spacing={4}>
        <Heading as="h2" size="xl">
          Why the Rise in Virtual Project Management?
        </Heading>
        <Text>
          There are many reasons why virtual project management is gaining in popularity. Many teams
          are demanding greater flexibility at work so that they have more control over their
          schedule. This might be due to having young children and wanting to stay home with them or
          finding a balance between work and home life.
        </Text>
        <Text>
          The trend of hiring contractors to outsource work has had some unexpected consequences. As
          organizations get more accustomed and comfortable working with teams who are not situated
          with them, they’ve also warmed to the idea of virtual teams and virtual project managers.
        </Text>
        {/* Image Placeholder */}
        <Image src="https://via.placeholder.com/600x300" alt="Rise in Virtual Project Management" />
      </VStack>

      {/* New Technology and a New Generation Section */}
      <VStack align="start" mb={8} spacing={4}>
        <Heading as="h2" size="xl">
          New Technology and a New Generation
        </Heading>
        <Text>
          This goes hand-in-glove with technological advances that have made it easier to manage
          remote workers. The development of a virtual office has made the transition to virtual
          project management that much smoother.
        </Text>
        <Text>
          The generational change of workers is also at play in the rise of virtual project
          management. New workers are entering the workforce, but older workers who are able to
          adapt are staying in with the help of virtual teams. This creates an even more productive
          team, one that is energized by youthful enthusiasm and new ideas but anchored by the
          experience and skills of older team members.
        </Text>
        {/* Image Placeholder */}
        <Image src="https://via.placeholder.com/600x300" alt="New Technology and Generation" />
      </VStack>

      {/* More Content Sections as Needed */}
      <VStack align="start" spacing={4}>
        <Heading as="h2" size="xl">
          It’s About Results
        </Heading>
        <Text>
          ROWE, or results-only work environment, is a management strategy that’s been gaining
          traction. Its concept of allowing workers to set the terms and time as long as they meet
          the required results. This has helped fuel the growth of virtual teams, and in so doing,
          virtual project management.
        </Text>
      </VStack>

      {/* Add more content sections with images as needed */}
    </Box>
    </Layout>
  );
};

export default RemoteWork;
