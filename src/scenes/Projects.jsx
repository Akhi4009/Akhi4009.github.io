
import AirGarage from "../assets/AirGarage.png"
import SkinStore from "../assets/SkinStore.png"
import Fitnesshub from "../assets/Fitnesshub.png"
import IternIneqry from "../assets/IternIneqry.png"
import linkdin from "../assets/linkedin.png"
import github from "../assets/github-mark-white.png"

import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const obj={
  airgarage: "This is the clone of AirGarage website which is a full service of parking operator.It helps us book parking slots across various places around the United States. This is a collaborative Team Project that we have completed in 4 days.",
  skinstore: "This is the clone of SkinStore website which is a full service of cosmetic products.It helps us to buy cosmetic products across various places around the world. This is a solo Project that I have completed in 4 days.",
  fitnesshub: "Fitnesshub is the most accurate, comprehensive nutrition tracking app. It is clone website of cronometer.com.This is a collaborative Team Project that we have completed in 4 days.",
  intern:"This is a clone of website Interntheory.com. It provides oppertunity for students to get a good internship.This is a solo Project that I have completed in 4 days."
}
let gith={
  airgarage:"https://github.com/fahad9988/naughty-wind-121",
  skinstore:"https://github.com/Akhi4009/fortunate-fog-6612",
  fitnesshub:"https://github.com/srinetanuj/FitnessHub",
  intern:"https://github.com/Akhi4009/scrawny-meat-2282"
}
let livesite={
  airgarage:"https://air-garage-clone.netlify.app/",
  skinstore:"https://build-chi-five.vercel.app/",
  fitnesshub:"https://projectfitnesshub.netlify.app/",
  intern:"https://polite-platypus-d70ea6.netlify.app/"

}
 

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title,image,desc,tech,live,git }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-40 flex flex-col justify-center items-center text-center p-10 text-deep-blue  `;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles} >
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-3">
       {desc}
        </p >
        <p className=" text-xl font-playfair">Tech Used: {tech}</p>
        <div className="flex justify-center md:justify-start mt-3 gap-5">
        <button className="bg-red text-white p-2">
        <a
        className="hover:opacity-50 transition duration-500 text-lg "
        href={live}
        target="_blank"
        rel="noreferrer"
      >
      live Site
      </a>
      </button>
      <button className="bg-red text-white p-2">
      <a
        className="hover:opacity-50 transition duration-500"
        href={git}
        target="_blank"
        rel="noreferrer"
      >
       Git Repo
      </a>
      </button>
      </div>
      </div>
      <img src={image} alt={projectTitle} className="mb-10 p-5" />
      
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
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
        <p className="mt-10 mb-10">
        "This is the clone of AirGarage website which is a full service parking operator.It helps us book parking slots across various places around the United States. This is a collaborative Team Project that we have completed in 4 days."
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid  sm:grid-cols-2 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
         
<Project title="AirGarage" git={gith['airgarage']} live={livesite['airgarage']} image={AirGarage} desc={obj['airgarage']} tech="HTML, CSS, JavaScript, Bootstrap." />
<Project title="SkinStore" git={gith['skinstore']} live={livesite['skinstore']}  image={SkinStore} desc={obj['skinstore']} tech="HTML, CSS, JavaScript, ReactJS, ChakraUI."/>

          {/* ROW 2 */}
<Project title="Fitnesshub" git={gith['fitnesshub']} live={livesite['fitnesshub']}  image={Fitnesshub} desc={obj['fitnesshub']}tech="HTML, CSS, JavaScript, ReactJS, ChakraUI." />
<Project title="Inter Inqery" git={gith['intern']} live={livesite['intern']}  image={IternIneqry} desc={obj['intern']} tech="HTML, CSS, JavaScript, Bootstrap."/>
         

          {/* ROW 3 */}
        
         
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
