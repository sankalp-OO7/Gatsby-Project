// src/components/IndustriesList.js

import React from "react";
import { Link } from "gatsby";
import { Box, Heading, Stack } from "@chakra-ui/react";

const IndustriesList = ({ industries }) => (
  <Stack spacing={4}>
    {industries.map((industry) => (
      <Box key={industry.name} p={4} borderWidth="1px" borderRadius="md">
        <Heading as="h3" size="md" mb={2}>
          {industry.name.replace("-", " ")}
        </Heading>
        <Link to={`/industries/${industry.name}`}>
          <Box as="button" bg="blue.500" color="white" p={2} borderRadius="md">
            Learn More
          </Box>
        </Link>
      </Box>
    ))}
  </Stack>
);

export default IndustriesList;
