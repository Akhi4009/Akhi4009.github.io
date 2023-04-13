
import AirGarage from "../assets/AirGarage.png"
import SkinStore from "../assets/SkinStore.png"
import Fitnesshub from "../assets/Fitnesshub.png"
import IternIneqry from "../assets/IternIneqry.png"

import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/React.png"
import node from "../assets/Node.png"
import mongo from "../assets/mongo.png"
import typescript from "../assets/typescript.png"
import git from "../assets/git.png"
import npm from "../assets/npm.png"
import github from "../assets/github1.png"
import tailwind from "../assets/tailwind-css.png"
import bootstrap from "../assets/bootstrap.png"
import chakra from "../assets/chakra.png"

import LineGradient from "../components/LineGradient";
import { motion, transform } from "framer-motion";
import { Button,Card,CardBody,CardFooter,Image,HStack,Flex,Stack,Heading,Text,Divider,ButtonGroup, Grid }  from "@chakra-ui/react"


const project=[
  {
    title:"AirGarage",
    git:"https://github.com/fahad9988/naughty-wind-121",
    live:"https://air-garage-clone.netlify.app/",
    image:AirGarage,
    desc:"This is the clone of AirGarage website which is a full service of parking operator.",
    tech:[
      {
       image: html,
        title:"Html,"
      },{
       image: css,
        title:"Css,"
      },
        {
        image:  javascript,
        title:"Javascript,"
        }

          ,{
          image:  bootstrap,
            title:"Bootstrap"
            }
          ],
    
    col:"#DC4492"
  },

  ,{
    title:"SkinStore",
    git:"https://github.com/Akhi4009/fortunate-fog-6612",
    live:"https://build-chi-five.vercel.app/",
    image:SkinStore,
    desc:"This is the clone of SkinStore website which is a full service of cosmetic products.",
    tech:[
      {
       image: html,
        title:"Html,"
      },{
       image: css,
        title:"Css,"
      },
        {
        image:  javascript,
        title:"Javascript,"
        }

          ,{
          image:  react,
            title:"React,"
            },
            {
              image:  chakra,
                title:"Chakraui"
                }
          ],
    
    col:"#2CBCE9"
  },
  {
    title:"Fitnesshub",
    git:"https://github.com/srinetanuj/FitnessHub",
    live:"https://projectfitnesshub.netlify.app/",
    image:Fitnesshub,
    desc:"Fitnesshub is the most accurate, comprehensive nutrition tracking app.",
  
      tech:[
        {
         image: html,
          title:"Html,"
        },{
         image: css,
          title:"Css,"
        },
          {
          image:  javascript,
          title:"Javascript,"
          }
  
            ,{
            image:  react,
              title:"React"
              }
            ],
    
    col:"#FDCC49"
  },

  {
    title:"Intern Inqery",
    git:"https://github.com/Akhi4009/scrawny-meat-2282",
    live:"https://polite-platypus-d70ea6.netlify.app/",
    image:IternIneqry,
    desc:"This is a clone of website Interntheory.com. It provides oppertunity for students to get a good internship.",
    tech:[
      {
       image: html,
        title:"Html,"
      },{
       image: css,
        title:"Css,"
      },
        {
        image:  javascript,
        title:"Javascript,"
        }

          ,{
          image:  bootstrap,
            title:"Bootstrap"
            }
          ],
    
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
<HStack>
{ele.tech.map(ele=>(

  <Image w="10%" src={ele.image}/>

  
 
))}
</HStack>
<Flex gap={2} alignItems="center">
<Heading as="h4" size="sm">Tech Stacks:</Heading>
<HStack ga={0}>
{ele.tech.map(ele=>(

  <Text color="white" fontWeight="bold">{ele.title}</Text>

  
 
))}
</HStack>
</Flex>


     
      
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
