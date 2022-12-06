import { Heading,Box, Grid, GridItem,Image,Flex,Card,CardBody } from '@chakra-ui/react'
import React from 'react'

const Skills = () => {
  return (
   <Box textAlign="center" w='75%' m='auto'>
    <Heading textAlign="center" m={10}>My Skills</Heading>
    <Grid display="grid"  gridTemplateColumns={{base:"repeat(2,1fr)",md:"repeat(3,1fr)"}}alignItems="center" gap={10} >
      <GridItem><Flex direction="column" textAlign="center">

        <Card><CardBody><Image src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" width="50%" alt="HTML"/>
        <Heading as="h3" size="sm">HTML</Heading>

      </CardBody></Card></Flex></GridItem>
      <GridItem><Flex direction="column" textAlign="center">
        <Card><CardBody><Image src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" width="50%" alt="CSS"/>
        <Heading as="h3" size="sm">CSS</Heading>
        </CardBody></Card></Flex></GridItem>
      <GridItem><Flex direction="column" textAlign="center">
        <Card><CardBody><Image src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" width="50%" alt="JS"/>
        <Heading as="h3" size="sm">JS</Heading>
        </CardBody></Card></Flex></GridItem>
      <GridItem><Flex direction="column" textAlign="center">
        <Card><CardBody><Image src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" width="50%" alt="REACT"/>
        <Heading as="h3" size="sm">REACT.JS</Heading>
        </CardBody></Card></Flex></GridItem>
      <GridItem><Flex direction="column" textAlign="center">
        <Card><CardBody><Image src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" width="50%" alt="Redux"/>
        <Heading as="h3" size="sm">REDUX</Heading>
        </CardBody></Card></Flex></GridItem>
      <GridItem><Flex direction="column" textAlign="center">
        <Card><CardBody><Image src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg" width="50%" alt="Node.js"/>
        <Heading as="h3" size="sm">NODE.JS</Heading>
        </CardBody></Card></Flex></GridItem>
    </Grid>
   
   </Box>
  )
}

export default Skills