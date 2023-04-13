import React from 'react'
import LineGradient from "../components/LineGradient";
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { Container, VStack ,Stack,Image,Box} from '@chakra-ui/react';


const Githubdata = () => {
  return (
    <section id="github" className="pt-24 pb-24">
    <motion.div
    className="md:w-2/5 mx-auto text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div>
      <p className="font-playfair font-semibold text-4xl">
        <span className="text-red">GIT</span>HUB
      </p>
      <div className="flex justify-center mt-5">
        <LineGradient width="w-2/3" />
      </div>
    </div>
   
  </motion.div>


  <motion.div
  className="md:w-2/5 mx-auto text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  }}
>
  <div>
    <p className="font-playfair font-semibold text-2xl m-5 ">
      <span className="text-yellow mr-2" >Github</span>calender
    </p>
    
  </div>
 
</motion.div>
<Container maxW='10xl m-auto'>
<GitHubCalendar username="Akhi4009"  style={{color:"white"}} blockSize={16} fontSize={12} />

</Container>

<Stack direction={{base:"column",md:"row"}} mt={10} justifyContent="center" gap={10}>
<VStack>
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
<p className="font-playfair font-semibold text-2xl mb-5 text-blue" >
 Github<span className="text-red">Status</span>
</p>

</motion.div>
<Image src="https://github-readme-streak-stats.herokuapp.com/?user=Akhi4009&theme=midnight-purple&background=transparent"/>

</VStack>
<VStack>
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
<p className="font-playfair font-semibold text-2xl mb-5 text-blue">
  Github <span className="text-red">Streak</span>
</p>


</motion.div>
<img src="https://github-readme-stats.vercel.app/api?username=Akhi4009&theme=midnight-purple&show_icons=true"/>
</VStack>

</Stack>




    
    </section>
  )
}

export default Githubdata