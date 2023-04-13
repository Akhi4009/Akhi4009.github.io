import LineGradient from "../components/LineGradient";
import { Image,Grid,GridItem, VStack } from "@chakra-ui/react";

import { motion } from "framer-motion";
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import React from "../assets/React.png"
import Node from "../assets/Node.png"
import mongo from "../assets/mongo.png"
import typescript from "../assets/typescript.png"
import git from "../assets/git.png"
import npm from "../assets/npm.png"
import github from "../assets/github1.png"
import tailwind from "../assets/tailwind-css.png"
import bootstrap from "../assets/bootstrap.png"
import chakra from "../assets/chakra.png"
import vscode from "../assets/vscode.png"
import { Box,  keyframes } from '@chakra-ui/react';



const skills=[
  {
   
    image:html,
    title:"html"

  },
  {
    
    image:css,
    title:"css"
},
{
 
  image:javascript,
  title:"javascript"
},
{

  image:React,
  title:"react"
},
{

  image:Node,
  title:"nodejs"
},
{

  image:mongo,
  title:"mongodb"
},
{

  image:typescript,
  title:"typescript"
},
{

  image:bootstrap,
  title:"bootstrap"
},
{

  image:chakra,
  title:"chakraui"
},
{

  image:tailwind,
  title:"tailwind"
},
{

  image:git,
  title:"git"
},
{

  image:github,
  title:"github"
},
{

  image:npm,
  title:"npm"
},
{

  image:vscode,
  title:"vscode"
},

]
// const animationKeyframes = keyframes`
//   0% { transform: scale(1) rotate(0); border-radius: 20%; }
//   25% { transform: scale(1.70) rotate(0); border-radius: 20%; }
//   50% { transform: scale(1.70) rotate(360deg); border-radius: 50%; }
//   75% { transform: scale(1) rotate(360deg); border-radius: 50%; }
//   100% { transform: scale(1) rotate(0); border-radius: 20%; }
// `;

// const animation = `${animationKeyframes} 10s ease-in-out infinite`;

const MySkills = () => {
 
  


  return <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-16">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3 mb-10" />
         
        </motion.div>
        </div>
        <Grid gridTemplateColumns={{base:"repeat(3,1fr)",md:"repeat(5,1fr)"}} gap={10}>
        {skills.map(ele=>(
          
          <GridItem key={ele.image} >
          <VStack boxShadow='sm' p='2' rounded='md' bg='white'>
          <motion.div
          className="w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
      
        
            <Image src={ele.image} alt={ele.title} />
         </motion.div>
         <text className="text-red">{ele.title}</text>
          </VStack>
          
        </GridItem>
        
        ))}
        </Grid>
        </section>

        
 

};

export default MySkills;
