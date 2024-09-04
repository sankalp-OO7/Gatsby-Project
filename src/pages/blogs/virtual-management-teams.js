// src/pages/virtual-management.js

import React from 'react';
import { Box, Heading, Text, VStack, List, ListItem, Image } from '@chakra-ui/react';
import Layout from '../../components/Layout';

const VirtualManagement = () => {
  return (
    <Layout>
    <Box p={8} maxWidth="1200px" mx="auto">
      {/* Main Heading */}
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Virtual Management & Virtual Teams: A COVID-19 Blessing For Construction?
      </Heading>

      {/* Introduction Section */}
      <Text mb={4}>
        There’s no doubt that the pandemic has led businesses into work challenges, and overcoming
        these challenges, companies have modified their working patterns and have embraced ‘Remote
        Work’ to effectively operate the business. COVID-19 has boosted the use of technology in
        most industries and has pushed the trend of remote work for more traditional industries as
        well, with construction being one of them.
      </Text>

      <Text mb={4}>
        To look at the greener side, the construction industry which has usually been resistant to
        remote work has now accepted it as a normal trend in the industry. “Virtual management” &
        “Virtual teams” that’s being embraced due to the pandemic will be a new normal for the
        industry.
      </Text>

      {/* Image Placeholder */}
      <Image src="https://via.placeholder.com/600x300" alt="Virtual Teams in Construction" mb={8} />

      {/* Subsection: Benefits of Virtual Teams & Virtual Management During COVID-19 Epidemic */}
      <VStack align="start" mb={8} spacing={4}>
        <Heading as="h2" size="xl">
          Benefits of Virtual Teams & Virtual Management During COVID-19 Epidemic:
        </Heading>
        <List spacing={4}>
          <ListItem>
            <Text fontWeight="bold">Safety is Priority</Text>
            <Text>
              When you engage remotely in virtual management operations, you control the paranoia of
              the spread of viruses and preserve the safety of your people. As a business, you’re
              likely to be less concerned about the employees’ health as they’re protected and safe
              working at home or remotely. Keeping safety at the centre, you will still be able to
              maximize stability and avoid severe business impact as employees here require less
              supervision due to the nature of their job.
            </Text>
          </ListItem>

          <ListItem>
            <Text fontWeight="bold">Ease of Management</Text>
            <Text>
              We now see great concern and panic among managers as they’re clearing offices and
              looking for best practices for managing employees who are working from home. But when
              it comes to remote teams, they are largely hired due to their ease of management.
              Managing remote teams is a lot easier as they’re highly skilled in handling projects
              and clients regardless of the different time zones. Simply put, COVID is directing
              managers towards finding better & more efficient ways of working.
            </Text>
          </ListItem>

          <ListItem>
            <Text fontWeight="bold">Higher Flexibility</Text>
            <Text>
              Distributed teams bring higher work flexibility than traditional in-house employees.
              They scale up in terms of workflows, are 13% more productive and are not chained with
              schedules or operating hours. Homeworking is a norm to virtual teams and managers
              don’t have to worry about communication challenges, loss in productivity, on-time
              project completion, and several other roadblocks.
            </Text>
          </ListItem>

          <ListItem>
            <Text fontWeight="bold">Improved Work Quality</Text>
            <Text>
              Dedicated remote teams are believed to improve employee productivity by 43%. Working
              remotely means a better work-life balance, and a better work-life balance keeps
              employees motivated, happy, and more focused. Remote employees deliver better quality
              work as they claim to commute 78% less and have 78% less stress.
            </Text>
          </ListItem>

          <ListItem>
            <Text fontWeight="bold">Ease of Expansion</Text>
            <Text>
              Companies have realized that they can operate even with limited people in their office
              which allows them to expand with the existing infrastructure, reducing their overhead
              cost, making it a cost-efficient process. While there is a need to invest some in
              technology to work in a virtual environment, it is considerably less compared to
              adding more office space & infrastructure.
            </Text>
          </ListItem>
        </List>
      </VStack>

      {/* Conclusion */}
      <Text>
        COVID-19 has had an immediate negative impact on the construction industry, though not as
        severe as other businesses. However, pushing the industry towards adoption of technology
        will prove to be a blessing in the long run.
      </Text>
    </Box>
    </Layout>
  );
};

export default VirtualManagement;
