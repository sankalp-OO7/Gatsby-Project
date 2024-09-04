import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Box, FormControl, FormLabel, Input, Textarea, Button, useToast, Heading } from '@chakra-ui/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Message sent.',
          description: 'We have received your message and will get back to you soon.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        title: 'An error occurred.',
        description: error.message || 'Unable to send message. Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Box 
        maxW="500px" 
        mx="auto" 
        p={6} 
        mt={8} 
        mb={8} 
        bgGradient="linear(to-r, gray.700, gray.900)" 
        borderRadius="md" 
        boxShadow="dark-lg" 
        color="white"
        border="1px solid" 
        borderColor="teal.500"
      >
        <Heading as="h3" size="lg" textAlign="center" mb={4} color="teal.300">
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              focusBorderColor="teal.300"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              focusBorderColor="teal.300"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Mobile Number</FormLabel>
            <Input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Your mobile number"
              focusBorderColor="teal.300"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              focusBorderColor="teal.300"
              _placeholder={{ color: 'gray.400' }}
            />
          </FormControl>

          <Button
            mt={6}
            colorScheme="teal"
            type="submit"
            isLoading={isSubmitting}
            isFullWidth
            _hover={{ bg: 'teal.600', boxShadow: '0 0 10px teal' }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

export default ContactForm;
