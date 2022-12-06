import React from "react";
import { Heading, Text, Flex, Box, Button, Link,IconButton } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import About from "../About/About";
import Skills from "../Skiils/Skills";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Box
        p={50}
        textAlign="center"
        backgroundImage="https://gauravportfolio0083.netlify.app/images/bg.jpg" 
      >
        <Heading as="h3" size="md" color="white">
          I'm Akhilesh,Full Stack Web Developer and Mechanical Engineer
        </Heading>
        <Text mt={20} mb={20} fontSize="xl" color="white">
          Welcome to my creative universe
        </Text>
        <Button mb={20} backgroundColor="#92bcb5">Resume</Button>
        <Flex gap={10} justifyContent="center">
          <Box>
            <Link
              href="https://www.linkedin.com/in/akhilesh-yadav-2b9288236/"
              isExternal
            >
              
              <IconButton

  aria-label='Call Segun'
  size='lg'
  icon={<BsLinkedin size="40px"/>}
/>
            </Link>
          </Box>
          <Box>
            <Link href="https://github.com/Akhi4009" isExternal>
              
              <IconButton
  
  aria-label='Call Segun'
  size='lg'
  icon={<BsGithub size="40px"/>}
/>
            </Link>
          </Box>
        </Flex>
      </Box>
      <About />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
