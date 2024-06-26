import styles from "../styles/Experience.module.scss";
import Section from "./Section";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const work_experience = [
  {
    id: 1,
    job_title: "UI UX designer",
    company_name: "MyAfrimall",
    duration: "Aug 2023 - Present",
    city: "Lagos",
    descriptions: [
      "Work closely with stakeholders to understand business goals and align design solutions accordingly",
      "Conduct user research to understand target users, their behaviors, and preferences, ensuring designs are user-centered.",
      "Generate UI review reports to ensure developers meet design requirements and maintain design consistency.",
    ],
    job_type: "remote",
  },
  {
    id: 2,
    job_title: "Product Designer",
    company_name: "Impacto",
    duration: "Jan 2024 - March 2024",
    city: "Lagos",
    descriptions: [
      "Preparing rough drafts and presenting to internal teams and key stakeholders.",
      "Presented 20+ wireframes, high-fidelity screens, and design prototypes to stakeholders for feedback.",
      "Make layout changes based on user feedback",
    ],
    job_type: "remote",
  },
  {
    id: 3,
    job_title: "Product Designer",
    company_name: "Luxpay",
    duration: "October 2023 - Present",
    city: "Lagos",
    descriptions: [
      "Collaborated with a team of developers and designers to build a fully-functional Fintech application",
      "Collaborated with a team of developers to build a fully functional crypto bank application",
      "Continuous iteration and refinement of product design to ensure crypto bank’s digital products promoted trust, security and efficiency in transaction",
    ],
    job_type: "remote",
  },
  {
    id: 4,
    job_title: "Bootcamp Instructor",
    company_name: "Aceplora",
    duration: "Aug 2023 - October 2023",
    city: "Port Harcourt",
    descriptions: [
      "Coached students on User Interface design adhering to the curriculum.",
      "Prepared learning materials such as exercises, lesson handouts and projects.",
      "Conducted reviews and provided feedback on how to improve learning standards.",
    ],
    job_type: "on-site",
  },
  {
    id: 5,
    job_title: "UI/UX Designer",
    company_name: "Credib",
    duration: "May 2023 - Aug 2023",
    city: "Port Harcourt",
    descriptions: [
      "Designed UI elements adhering to style standards and typography of the app.",
      "Provided advice on the implementation of UI elements based on UX research I carried out.",
      "Tested UI elements prior and after development and created variance reports for developers.",
    ],
    job_type: "On-site",
  },
  // {
  //   id: 3,
  //   job_title: "UI/UX Designer",
  //   company_name: "TechKraft Inc",
  //   duration: "Oct 2022 - Mar 2023",
  //   city: "Imo",
  //   descriptions: [
  //     "Designed UI elements adhering to style standards and typography of the app.",
  //     "Tested UI elements after developments.",
  //     "Collaborated with other designers to produce high-quality UX designs.",
  //   ],
  //   job_type: "Remote",
  // },
  // {
  //   id: 3,
  //   job_title: "UI/UX Designer",
  //   company_name: "LogiKeep",
  //   duration: "Aug 2023 - Oct 2022",
  //   city: "Lagos",
  //   descriptions: [
  //     "Lead in the design, of layout of the app.",
  //     "Conducted assessments of all User Interface in order to ensure quality and accuracy.",
  //   ],
  //   job_type: "Remote",
  // },
];

const ResumeItem = ({
  ref,
  job_title,
  duration,
  company_name,
  city,
  descriptions,
  job_type,
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { duration: 1 });
    }
  }, [isInView]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ root: ref }}
      className={styles.resumeItem}
    >
      <h4>
        <span className={styles.jobTitle}>{job_title}</span>
        <span className={styles.jobType}>
          <FaMapMarkerAlt /> <span> {job_type}</span>
        </span>
      </h4>
      <h5>{duration}</h5>
      <p>
        <em>{`${company_name}, ${city}`}</em>
      </p>
      <ul ref={scope}>
        {descriptions?.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  const scrollRef = useRef(null);

  return (
    <Section
      ref={scrollRef}
      className={styles.contact}
      title="Where I Have Gained Experiences"
      subtitle="Professional Experience"
      description="They revolve around SAAS, Edu-Tech, Fintech, NGOs, etc"
      id="experience"
    >
      <div className={styles.container}>
        {work_experience.map((exp, idx) => (
          <ResumeItem
            ref={scrollRef}
            key={idx}
            job_title={exp.job_title}
            duration={exp.duration}
            company_name={exp.company_name}
            city={exp.city}
            descriptions={exp.descriptions}
            job_type={exp.job_type}
          />
        ))}

        <motion.a
          whileTap={{ scale: 0.85 }}
          target="_blank"
          href="https://www.linkedin.com/in/vera-erumaka/"
          className={styles.btn}
        >
          See More
        </motion.a>
      </div>
    </Section>
  );
};

export default Experience;
