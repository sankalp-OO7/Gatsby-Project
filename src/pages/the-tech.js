// src/pages/index.js (or any other page)

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import A from '../components/tech/A';
import B from '../components/tech/B';
import C from '../components/tech/C';
import D from '../components/tech/D';
import E from '../components/tech/E';
import FeatureCards from '../components/index/FetureCards2'

import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
    <ChakraProvider>
      {/* Other components or sections */}
      <A/>
      <B/>
      <C/>
      <D/>
      <E/>
      <FeatureCards/>
      {/* Other components or sections */}
    </ChakraProvider>
    </Layout>
  );
};

export default IndexPage;
