// Import React and React components
import React from "react";
import { motion } from "framer-motion";

// Import third-party components
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Import project-specific components and data
import { Styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Component for displaying a single experience card
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* Display bullet points for the experience */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Component for displaying all experiences using the ExperienceCard component
const Experience = () => {
  return (
    <>
      {/* Display section heading with animation */}
      <motion.div variants={textVariant()}>
        <p className={`${Styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${Styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      {/* Display all experience cards using the ExperienceCard component */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Wrap the Experience component in a section wrapper with a specific ID
export default SectionWrapper(Experience, "work");
