// src/pages/index.js

import React from 'react';
import { Box } from '@chakra-ui/react';
import HorizontalNavbar from '../components/advantages-page/HorizontalNavbar';
import DocumentationData from '../components/advantages-page/DocumentationData';
import SafetyManagement from '../components/advantages-page/SafetyManagement';
import OnSiteManagement from '../components/advantages-page/OnSiteManagement';
import RemoteCollaboration from '../components/advantages-page/RemoteCollaboration';
import QualityControl from '../components/advantages-page/QualityControl';
import PlanningMonitoring from '../components/advantages-page/PlanningMonitoring';
import ProgressTracking from '../components/advantages-page/ProgressTracking';
import Sustainability from '../components/advantages-page/Sustainability';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
    <Box>

      <HorizontalNavbar />
      <Box pt="60px"> {/* Offset for fixed navbar */}
        <DocumentationData />
        <SafetyManagement />
        <OnSiteManagement />
        <RemoteCollaboration />
        <QualityControl />
        <PlanningMonitoring />
        <ProgressTracking />
        <Sustainability />
      </Box>
    </Box>
    </Layout>

  );
};

export default IndexPage;
