import React from "react";
import { Box } from "@chakra-ui/react";
import A from "../components/res/uguide/A";
import B from "../components/res/uguide/B";
import C from "../components/res/uguide/C";
import D from "../components/res/uguide/D";
import E from "../components/res/uguide/E";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <Box>
      <A />
      <B />
      <C />
      <D />
      <E />
    </Box>
  </Layout>
);

export default IndexPage;
