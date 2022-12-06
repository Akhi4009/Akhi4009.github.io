import React from 'react'
import{Flex,Box, HStack,Heading,Button, } from "@chakra-ui/react"
import {Link}from "react-router-dom"
import { FaSun, FaMoon} from 'react-icons/fa'
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  
  
  
  useMediaQuery
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'







const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)')

  
  return (
    <>
    <Flex justifyContent="space-around" backgroundColor={isDark?"none":"#92bcb5"} p={10}  align="center" 
    top={0} pos="sticky"
   >
    <Box ><Heading>Akhilesh yadav</Heading></Box>

    {isLargerThan900? <HStack gap={5}>
   <Link  to="/" >Home</Link>
   <Link  to="/about">About</Link>
   <Link  to="/skills">Skilss</Link>
   <Link  to="/project">Project</Link>
   <Link  to="/contact">Contact</Link>
   
    </HStack>: <Menu>
  <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
   
  </MenuButton>
  <MenuList>

  <MenuItem><Link to="/">Home</Link></MenuItem>
   <MenuItem><Link to="/about">About</Link></MenuItem>
   <MenuItem><Link to="/skills">Skilss</Link></MenuItem>
   <MenuItem><Link to="/project">Project</Link></MenuItem>
   <MenuItem><Link to="/contact">Contact</Link></MenuItem>
  </MenuList>
</Menu>}
   
    <Box>
    <IconButton  ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
    </Box>
   
  </Flex>
  
  </>

  )
}

export default Navbar