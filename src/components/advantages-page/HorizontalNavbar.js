import React, { useState, useEffect } from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import '../../styles/horizontalNav.module.css';

 
  

const sections = [
  { id: 'documentation-data', label: 'Documentation Data' },
  { id: 'safety-management', label: 'Safety Management' },
  { id: 'on-site-management', label: 'On-Site Management' },
  { id: 'remote-collaboration', label: 'Remote Collaboration' },
  { id: 'quality-control', label: 'Quality Control' },
  { id: 'planning-monitoring', label: 'Planning-Monitoring' },
  { id: 'progress-tracking', label: 'Progress Tracking' },
  { id: 'sustainability', label: 'Sustainability' },
 
];



const HorizontalNavbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Change this value to adjust when the navbar becomes sticky
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
    scroller.scrollTo(sectionId, {
      duration: 500,
      smooth: true,
      offset: -100, // Adjust this offset based on your navbar height
    });
  };

  return (
    <Flex
      as="nav"
      position={isSticky ? 'fixed' : 'relative'}
      top={isSticky ? 0 : 'auto'}
      left={0}
      width="100%"
       backgroundColor="gray.800"       
       borderRadius={10}
       zIndex={0}
       ml={0}
        
      overflowX="auto"
      sx={{
        scrollbarWidth: 'none', // Hide scrollbar for a cleaner look
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      transition="top 0.3s ease-in-out"
    >
      {sections.map((section) => (
        <Link
        
          key={section.id}
          p={4}
          mx={2}
          color={activeSection === section.id ? 'orange' : 'white'}
          _hover={{ textDecoration: 'none', color: 'blue.400' }}
          onClick={() => handleClick(section.id)}
          sx={{
            transition: 'color 0.3s, font-weight 0.3s',
            fontWeight: activeSection === section.id ? 'bold' : 'normal',
          }}
        >
          {section.label}
        </Link>
      ))}
      <ScrollLink to="footer" smooth={true} duration={500}>
        <Link key="footer" p={4} mx={2} color="white" _hover={{ textDecoration: 'none', color: 'blue.400' }}>
           
        </Link>
      </ScrollLink>
    </Flex>
  );
};

export default HorizontalNavbar;
