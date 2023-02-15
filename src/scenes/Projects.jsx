
import AirGarage from "../assets/AirGarage.png"
import SkinStore from "../assets/SkinStore.png"
import Fitnesshub from "../assets/Fitnesshub.png"
import IternIneqry from "../assets/IternIneqry.png"
import linkdin from "../assets/linkedin.png"
import github from "../assets/github-mark-white.png"

import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { Button,Card,CardBody,CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup, Grid }  from "@chakra-ui/react"


const project=[
  {
    title:"AirGarage",
    git:"https://github.com/fahad9988/naughty-wind-121",
    live:"https://air-garage-clone.netlify.app/",
    image:AirGarage,
    desc:"This is the clone of AirGarage website which is a full service of parking operator.It helps us book parking slots across various places around the United States. This is a collaborative Team Project that we have completed in 4 days.",
    tech:"HTML, CSS, JavaScript, Bootstrap.",
    col:"#DC4492"
  },

  ,{
    title:"SkinStore",
    git:"https://github.com/Akhi4009/fortunate-fog-6612",
    live:"https://build-chi-five.vercel.app/",
    image:SkinStore,
    desc:"This is the clone of SkinStore website which is a full service of cosmetic products.It helps us to buy cosmetic products across various places around the world. This is a solo Project that I have completed in 4 days.",
    tech:"HTML, CSS, JavaScript, ReactJS, ChakraUI.",
    col:"#2CBCE9"
  },
  {
    title:"Fitnesshub",
    git:"https://github.com/srinetanuj/FitnessHub",
    live:"https://projectfitnesshub.netlify.app/",
    image:Fitnesshub,
    desc:"Fitnesshub is the most accurate, comprehensive nutrition tracking app. It is clone website of cronometer.com.This is a collaborative Team Project that we have completed in 4 days.",
    tech:"HTML, CSS, JavaScript, ReactJS, ChakraUI.",
    col:"#FDCC49"
  },

  {
    title:"Intern Inqery",
    git:"https://github.com/Akhi4009/scrawny-meat-2282",
    live:"https://polite-platypus-d70ea6.netlify.app/",
    image:IternIneqry,
    desc:"This is a clone of website Interntheory.com. It provides oppertunity for students to get a good internship.This is a solo Project that I have completed in 4 days.",
    tech:"HTML, CSS, JavaScript, Bootstrap.",
    col:"#DC4492"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-24">
      {/* HEADINGS */}
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
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
       
      </motion.div>

      {/* PROJECTS */}
      <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)"}} gap={5} mt={10}>
      {
        project.map(ele=>(
          <motion.div
      
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          
        <Card maxW='lg' bg={ele.col}>
  <CardBody>
    <Image
      src={ele.image}
      alt={ele.title}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{ele.title}</Heading>
      <Text>
       {ele.desc}
      </Text>
      <Text className=" text-sm font-playfair"><span className="text-black text-sm font-playfair">Tech Used : </span> {ele.tech}</Text>
     
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter >
    <ButtonGroup spacing='4'>
      <Button variant='solid' bg="white" color="black">
      <a
      className="hover:opacity-50 transition duration-500 text-lg "
      href={ele.live}
      target="_blank"
      rel="noreferrer"
    >
    live Site
    </a>
      </Button>
      <Button variant='solid' bg="white" color="black">
      <a
      className="hover:opacity-50 transition duration-500"
      href={ele.git}
      target="_blank"
      rel="noreferrer"
    >
     Git Repo
    </a>
      </Button>
      
    </ButtonGroup>
   
  </CardFooter>
</Card>
</motion.div>
        ))
      }
      </Grid>
    </section>
  );
};

export default Projects;
