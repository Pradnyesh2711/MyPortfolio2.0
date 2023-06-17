// Import React and Tilt components from the 'react' and 'react-parallax-tilt' libraries, respectively
import React from "react";
import Tilt from "react-parallax-tilt";

// Import the 'motion' component from the 'framer-motion' library and the 'Styles' object from a 'styles.js' file
import { motion } from "framer-motion";
import { Styles } from "../styles";

// Import the 'services' object from a 'constants.js' file, and the 'SectionWrapper', 'fadeIn', and 'textVariant' functions from 'hoc.js' and 'motion.js' files, respectively
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Define a new functional component called 'ServiceCard', which takes in an 'index', 'title', and 'icon' as props
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    {/* Use the 'motion' component to create an animated div with a staggered animation effect */}
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)} // Define animation variants for the child components
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      {/* Create a new div with a background color and a rounded shape */}
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {/* Render an image element with the 'icon' passed in as a prop */}
        <img
          src={icon}
          alt="webdev icon"
          className="w-16 h-16 object-contain"
        />

        {/* Render a title element with the 'title' passed in as a prop */}
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Animated introduction text */}
      <motion.div variants={textVariant()}>
        <p className={Styles.sectionSubText}>Introduction</p>
        <h2 className={Styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/* Animated paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >I am a skilled web developer proficient in JavaScript and the MERN stack. With expertise in PHP, SQL, C, and C++ I you have a strong technical foundation. As a creative head at ACSES and technical head at IEEE CS, I demonstrate leadership and organizational abilities. My contributions to GSSoC'23 and 4th position in SE Hackathon'23 highlight my commitment to collaboration and problem-solving. 
     I am skilled web developer proficient in Node.js, React.js, and I have a strong understanding of data structures. My achievements in various competitions highlight My dedication and passion for web development.Overall, I possess a diverse skill set, creative mindset, and a drive for excellence.
      </motion.p>

      {/* Container for service cards */}
      <div className="mt-20 flex flex-wrap gap-10">
        {/* Map over the array of services and render a ServiceCard for each */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// Wrap the About component with the SectionWrapper higher-order component
export default SectionWrapper(About, "about");
