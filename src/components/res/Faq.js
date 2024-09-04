import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Collapse,
  IconButton,
 
} from '@chakra-ui/react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'What is SiteView.ai?',
    answer:
      'SiteView.ai is a comprehensive construction management platform that leverages 360° technology, artificial intelligence (AI), and mobile tools to empower you to build smarter and more efficiently.',
  },
  {
    question: 'How does SiteView.ai work?',
    answer:
      'SiteView.ai allows you to capture your construction site using 360° cameras, our mobile app, or even drone integration (subject to permits). You can then upload these images and videos to our secure cloud platform. Our platform offers immersive navigation tools and functionalities to analyze progress, collaborate with teams, and gain valuable insights from your project data.',
  },
  {
    question: 'What are the benefits of using SiteView.ai?',
    answer: `
      SiteView.ai offers a multitude of benefits, including:
      - Improved visibility and remote monitoring of your construction site
      - Enhanced communication and collaboration across teams
      - Streamlined workflows and increased efficiency
      - Early identification and rectification of potential issues
      - Data-driven decision making for improved project outcomes
      - Reduced rework and minimized costs
    `,
  },
  {
    question: 'Who can benefit from using SiteView.ai?',
    answer: `
      SiteView.ai is a valuable tool for everyone involved in the construction process, including:
      - General contractors
      - Architects
      - Engineers
      - Project managers
      - Field workers
      - Stakeholders and investors
    `,
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a free trial so you can experience the power of SiteView.ai firsthand. Sign up on our website to get started.',
  },
  {
    "question": "What types of 360° cameras are compatible with SiteView.ai?",
    "answer": "SiteView.ai is compatible with a wide range of industry-standard 360° cameras. Visit our Help Centre for a list of recommended cameras."
},
{
    "question": "Can I use my smartphone to capture 360° images for SiteView.ai?",
    "answer": "Absolutely! Our mobile app allows you to capture high-quality 360° images directly from your smartphone."
},
{
    "question": "How does SiteView.ai handle large files (360° videos)?",
    "answer": "SiteView.ai utilizes secure cloud storage to store your project data, including 360° videos. This ensures easy access, scalability, and redundancy for your important files."
},
{
    "question": "How long does SiteView.ai store my project data?",
    "answer": "Your project data is stored securely on our servers for as long as your subscription is active. You can choose to export your data at any time. We also offer extended data storage options upon request (additional fees may apply)."
},
{
    "question": "Can I control who sees my project data in SiteView.ai?",
    "answer": "Yes, you have complete control over data access. SiteView.ai allows you to assign permission levels to each team member, ensuring only authorized users can view specific project data."
},
{
    "question": "What security measures are in place to protect my project data?",
    "answer": "SiteView.ai takes data security very seriously. We employ industry-standard security measures to safeguard your project data, including encryption, access controls, and regular security audits."
},
{
    "question": "What happens to my project data if I cancel my SiteView.ai subscription?",
    "answer": "We will provide you with a grace period to export your project data after your subscription ends. Free accounts have limited storage, so ensure you export your data before it is automatically purged to comply with storage limitations."
},
{
    "question": "How does SiteView.ai handle my project data?",
    "answer": "Your project data is stored securely in the cloud using industry-standard encryption protocols. We restrict access to your data based on the permission levels you assign to your team members."
},
{
    "question": "Does SiteView.ai comply with data privacy regulations?",
    "answer": "SiteView.ai is committed to protecting your data privacy. We comply with all relevant data privacy regulations, including GDPR and CCPA."
},
{
    "question": "How does SiteView.ai ensure the security of my data?",
    "answer": "SiteView.ai takes data security very seriously. We employ multiple layers of security measures to protect your project data, including encryption, access controls, and regular security audits."
},
{
    "question": "What steps can I take to further secure my project data?",
    "answer": "Here are some additional steps you can take to enhance data security:\n- Enable two-factor authentication for your account.\n- Use strong passwords and update them regularly.\n- Be mindful of who you share access to your project data with."
},
{
    "question": "We have Clients with sensitive data. How secure is SiteView AI?",
    "answer": "We are aware of how crucial data security is to you and your clients, especially when sensitive information is included in the project. For this reason, a 2048-bit encryption protects all data as it moves between your web or mobile application and our servers. To ensure that your data remains safe, use the TLS (SSL) industry standard protection."
},
{
    "question": "What are your pricing plans?",
    "answer": "We offer a variety of subscription plans to cater to different project needs and budgets. Visit our website for detailed information on our pricing plans. We offer flexible month-to-month plans or annual plans at a discount."
},
{
    "question": "What payment methods do you accept?",
    "answer": "We accept all major credit cards and bank transfers for your convenience."
},
{
    "question": "How can I share my virtual construction site with others?",
    "answer": "Sharing your site with others is easy! With just a few clicks, you can invite stakeholders, team members, or clients to view your 360° project data. They can access it through a web browser on any device, no special software required."
},
{
    "question": "Can I collaborate with others in real-time on SiteView.ai?",
    "answer": "Absolutely! Our platform allows for real-time collaboration. You can share your screen, discuss project details, and annotate 360° images with your team members, all within the SiteView.ai interface."
},
{
    "question": "Does SiteView.ai integrate with other construction management software?",
    "answer": "While we don't offer direct integrations with all construction management software currently, we are constantly working on expanding our capabilities. Our platform utilizes open APIs, allowing for potential integration with your existing software through third-party solutions."
},
{
    "question": "What features are available on the SiteView.ai mobile app?",
    "answer": "Our mobile app provides a powerful toolkit for your on-site team. They can use the app to:\n- Capture high-quality 360° images directly from the field.\n- Access project plans, reports, and 360° views for real-time updates.\n- Submit progress reports and updates with photos and annotations.\n- Communicate with team members and managers directly through the app."
},
{
    "question": "What devices is the SiteView.ai mobile app compatible with?",
    "answer": "The SiteView.ai mobile app is compatible with most modern iOS and Android devices. Download it for free from the App Store or Google Play Store."
},
{
    "question": "Does the mobile app require an internet connection?",
    "answer": "While an internet connection is ideal for full functionality, the app can be used partially offline. You can capture 360° images and access downloaded project data even without an internet connection. The data will then be synced to the cloud storage when you reconnect to the internet."
},
{
    "question": "Does SiteView.ai offer any AI-powered features?",
    "answer": "Yes (on select plans)! We offer optional AI features that leverage machine learning to automate tasks and provide valuable insights. These features include automated defect detection and progress tracking analysis."
},
{
    "question": "Are AI features available on all SiteView.ai plans?",
    "answer": "No, AI features are currently offered on our advanced plans. Connect with us to offer you customised solution for your project."
},
{
    "question": "How accurate are the AI features in SiteView.ai?",
    "answer": "Our AI models are constantly being trained and improved for accuracy. However, they should not be considered a replacement for human oversight. We recommend using AI features as a helpful tool alongside regular site inspections and expert judgment."
},
{
    "question": "What kind of customer support does SiteView.ai offer?",
    "answer": "We offer comprehensive customer support through multiple channels, including email, phone, and live chat. Our support team is available to answer your questions and help you get the most out of SiteView.ai."
},
{
    "question": "Does SiteView.ai offer any training materials?",
    "answer": "Yes! We offer a variety of training resources, including video tutorials, user guides, and webinars. These resources will help you get started with SiteView.ai and learn how to use all the features effectively."
},
{
    "question": "Can I get a demo of SiteView.ai before I subscribe?",
    "answer": "Absolutely! We encourage you to schedule a free demo to see how SiteView.ai can transform your construction projects. Contact our sales team today to get started."
}
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Box
      bgGradient="linear(to-br, teal.400, blue.500)"
      color="white"
      py={10}
      px={5}
    >
      <Heading
        as="h2"
        size="xl"
        textAlign="center"
        mb={6}
        fontFamily="heading"
        textTransform="uppercase"
      >
        SiteView.ai FAQs
      </Heading>
      <Stack spacing={4} maxW="3xl" mx="auto">
        {faqData.map((faq, index) => (
          <Box
            key={index}
            p={5}
            shadow="md"
            borderWidth="1px"
            rounded="md"
            bg={('white', 'gray.700')}
            _hover={{
              bgGradient: 'linear(to-r, purple.500, pink.500)',
              color: 'white',
            }}
            cursor="pointer"
            onClick={() => handleToggle(index)}
            transition="background-color 0.3s ease"
          >
            <Stack direction="row" align="center" justify="space-between">
              <Text fontWeight="bold">{faq.question}</Text>
              <IconButton
                icon={openIndex === index ? <FaMinus /> : <FaPlus />}
                variant="outline"
                colorScheme="teal"
                aria-label="Toggle Answer"
              />
            </Stack>
            <Collapse in={openIndex === index} animateOpacity>
              <Text mt={4}>{faq.answer}</Text>
            </Collapse>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default FAQSection;
