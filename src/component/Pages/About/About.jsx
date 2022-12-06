import React from 'react'
import {Heading,Box,Flex,Image,Text} from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/color-mode";
const About = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box  textAlign="center" p={10} backgroundColor={isDark?"none":"#f1f1f1"}>
<Heading p={10}>About Me</Heading>
<Flex justifyContent="space-around" direction={{base:"column", md:"row"}}gap={10} alignItems="center">
<Box>
    <Image src='https://avatars.githubusercontent.com/u/103496723?v=4' alt='Dan Abramov'
   width="300px" borderRadius="50%"

    />
    </Box>
    <Box>
      <Heading>I'm Akhilesh Yadav,</Heading>
      <Text>
      A passionate, Full Stack MERN Developer.
      </Text>
    </Box>

</Flex>

     
    </Box>
  )
}

export default About