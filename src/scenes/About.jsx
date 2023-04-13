
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import linkdin from "../assets/linkedin.png"
import github from "../assets/github-mark-white.png"

const About= ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="aboutme"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:flex md:justify-between md:items-center gap-16">
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0 },
      }}>
        {isAboveLarge ? (
          <div >
            <img 
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px] "
              src="https://avatars.githubusercontent.com/u/103496723?v=4"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[300px] md:max-w-[400px]"
            src="https://avatars.githubusercontent.com/u/103496723?v=4"
          />
        )}
        </motion.div>
    
      </div>
      

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Akhilesh {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              yadav
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
          Motivated and innovative aspiring full-stack web developer with hands-on experience in building websites with MERN stack and various web technologies including HTML, CSS, and JS. Curious to learn about emerging web technologies. Looking forward to making a significant contribution to an organization through dedicated effort.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkdin} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Akhi4009"
        target="_blank"
        rel="noreferrer"
      >
        <img className=" w-9" alt="linkedin-link" src={github} />
      </a>
      </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default About