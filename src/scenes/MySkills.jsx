import LineGradient from "../components/LineGradient";
import { Flex,Image,Text,Grid,GridItem } from "@chakra-ui/react";

import { motion } from "framer-motion";
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import React from "../assets/React.png"
import Node from "../assets/Node.png"
import mongo from "../assets/mongo.png"


const skills=[
  {
    Title:"HTML",
    image:html

  },
  {
    Title:"CSS",
    image:css
},
{
  Title:"JavaScript",
  image:javascript
},
{
  Title:"React",
  image:React
},
{
  Title:"Node",
  image:Node
},
{
  Title:"MongoDB",
  image:mongo
}
]


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
          <LineGradient width="w-1/3" />
         
        </motion.div>
        </div>
        <Grid gridTemplateColumns={{base:"repeat(3,1fr)"}} >
        {skills.map(ele=>(
          
          <GridItem >
          <motion.div
          className="w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
         <Flex direction="column" gap={5} alignItems="center" >
         <Text>{ele.Title}</Text>
         <Image src={ele.image} alt={ele.Title}/>
         </Flex>
          
        </motion.div>
        </GridItem>
        
        ))}
        </Grid>
        </section>

        
 

};

export default MySkills;
