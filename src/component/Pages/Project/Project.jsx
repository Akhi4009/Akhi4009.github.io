import React from 'react'
import {  Heading} from '@chakra-ui/react'
import {Link} from "react-router-dom"
import {
  Menu,
  MenuButton,
  MenuList,
 MenuItem,
  Button,
  useMediaQuery
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
const Project = () => {
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)')
  return (
    <>
    {isLargerThan480?<Heading>Akhilesh</Heading>:<Heading>Akhilesh yadav</Heading>}
    <Menu>
  <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
   
  </MenuButton>
  <MenuList>

  <MenuItem><Link to="/">Home</Link></MenuItem>
   <MenuItem><Link to="/about">About</Link></MenuItem>
   <MenuItem><Link to="/skills">Skilss</Link></MenuItem>
   <MenuItem><Link to="/project">Project</Link></MenuItem>
   <MenuItem><Link to="/contact">Contact</Link></MenuItem>
  </MenuList>
</Menu>
    </>
  )
}

export default Project