// gatsby-ssr.js
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import '@fontsource/roboto'; // For Roboto font
import '@fontsource/open-sans'; // For Open Sans font

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>;
};
