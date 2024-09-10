import React from "react";
import {  Box,  Flex,  HStack,  IconButton,  useDisclosure,  Stack,  Link,  Image,  Menu,  MenuButton,  MenuList,  MenuItem,    } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link as GatsbyLink } from "gatsby";

const Links = ["Advantages", "The-Tech", "Contact-Us"];
 const industries = [  "Infrastructure & Engineering",  "Manufacturing & Industrial",  "Real Estate",  "Hotels & Resorts",  "Retail Stores",  "Universities & Schools",  "Hospitals & Clinics", "Event & Venue",  "Museums & Galleries",  "Oil & Gas",  "Renewable Energy",  "Archaeology & Preservation",  "Insurance & Risk Management",  "Disaster Relief & Restoration",  "Mining & Resources",  "Forestry & Agriculture",  "Telecommunications & IT",  "Data Centre",  "Government & Public Services",];
 const resources = ["User-Guide", "Blogs", "FAQ"];
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box     position="sticky" 
    top="0" 
    bgGradient="linear(to-r, gray.300, pink.500)" 
    px={4} 
    boxShadow="sm" 
    zIndex="sticky">
      <Flex   h={16} alignItems="center" justifyContent="space-between">
        {/* Logo on the left */}
        <Box>
          <Link as={GatsbyLink} to="/">
            <Image src="/siteviewlogo1.png" alt="Logo" boxSize="180px" />
          </Link>
        </Box>

        {/* Menu and Hamburger on the right */}
        <Flex alignItems="center" ml="auto">
          {/* Desktop Menu */}
          <HStack
            as="nav"
            spacing={8}
            display={{ base: "none", md: "flex" }}
            color="transparent"
            bgClip="text"
            bgGradient="linear(to-b, darkblue, black)"
            fontSize="lg"
            fontWeight="bold"
          >
            {/* Normal Links */}
            {Links.map((link) => (
              <Link
                as={GatsbyLink}
                to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                key={link}
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: "none",
                  borderBottom: "3px solid white",
                  bgGradient: "linear(to-l, darkblue, lightblue)",
                  bgClip: "text",
                }}
              >
                {link}
              </Link>
            ))}

            {/* Dropdown Menu for Resources */}
            <Menu>
              <MenuButton
                as={Link}
                color="transparent"
                bgClip="text"
                bgGradient="linear(to-r, darkblue, lightblue)"
                fontSize="lg"
                fontWeight="bold"
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: "none",
                  borderBottom: "3px solid white",
                  bgGradient: "linear(to-l, darkblue, lightblue)",
                  bgClip: "text",
                }}
              >
                Resources <ChevronDownIcon />
              </MenuButton>
              <MenuList bg="pink.500" color="black">
                {resources.map((resource) => (
                  <MenuItem
                    as={GatsbyLink}
                    to={`/${resource.toLowerCase().replace(/\s+/g, "-")}`}
                    key={resource}
                  >
                    {resource}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            {/* Dropdown Menu for Industries */}
            <Menu>
              <MenuButton
                as={Link}
                color="transparent"
                bgClip="text"
                bgGradient="linear(to-r, darkblue, lightblue)"
                fontSize="lg"
                fontWeight="bold"
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: "none",
                  borderBottom: "3px solid white",
                  bgGradient: "linear(to-l, darkblue, lightblue)",
                  bgClip: "text",
                }}
              >
                Industries <ChevronDownIcon />
              </MenuButton>
              <MenuList bg="pink.500" color="black">
                {industries.map((industry) => (
                  <MenuItem
                    as={GatsbyLink}
                    to={`/industries/${
                      industry
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/\s+/g, "-")
                        .replace(/\/$/, "")
                    }`}
                    key={industry}
                  >
                    {industry}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </HStack>

          {/* Mobile Menu Toggle Button */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ base: "flex", md: "none" }} // Only show on mobile
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <Link
                as={GatsbyLink}
                to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                key={link}
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: "none",
                  borderBottom: "3px solid white",
                  bgGradient: "linear(to-r, lightblue, darkblue)",
                  bgClip: "text",
                }}
              >
                {link}
              </Link>
            ))}

            {/* Dropdown Menu for Resources in Mobile Menu */}
            <Menu>
              <MenuButton
                as={Link}
                color="transparent"
                bgClip="text"
                bgGradient="linear(to-r, darkblue, lightblue)"
                fontSize="lg"
                fontWeight="bold"
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: "none",
                  borderBottom: "3px solid white",
                  bgGradient: "linear(to-l, darkblue, lightblue)",
                  bgClip: "text",
                }}
              >
                Resources <ChevronDownIcon />
              </MenuButton>
              <MenuList bg="pink.500" color="black">
                {resources.map((resource) => (
                  <MenuItem
                    as={GatsbyLink}
                    to={`/${resource.toLowerCase().replace(/\s+/g, "-")}`}
                    key={resource}
                  >
                    {resource}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            {/* Dropdown Menu for Industries in Mobile Menu */}
            <Menu>
              <MenuButton
                as={Link}
                color="transparent"
                bgClip="text"
                bgGradient="linear(to-r, darkblue, lightblue)"
                fontSize="lg"
                fontWeight="bold"
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: "none",
                  borderBottom: "3px solid white",
                  bgGradient: "linear(to-l, darkblue, lightblue)",
                  bgClip: "text",
                }}
              >
                Industries <ChevronDownIcon />
              </MenuButton>
              <MenuList bg="pink.500" color="black">
                {industries.map((industry) => (
                  <MenuItem
                    as={GatsbyLink}
                    to={`/industries/${
                      industry
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/\s+/g, "-")
                        .replace(/\/$/, "")
                    }`}
                    key={industry}
                  >
                    {industry}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
