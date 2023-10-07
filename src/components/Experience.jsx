import styles from "../styles/Experience.module.scss";
import Section from "./Section";
import { FaMapMarkerAlt } from "react-icons/fa";

const work_experience = [
  {
    id: 1,
    job_title: "Design Instructor",
    company_name: "Aceplora",
    duration: "Aug 2023 - Present",
    city: "Port Harcourt",
    descriptions: [
      "Lead in the design, of layout of the app",
      "Conduct assessments of all User Interface in order to ensure quality and accuracy",
    ],
    job_type: "on-site",
  },
  {
    id: 2,
    job_title: "UI/UX Designer",
    company_name: "Credib",
    duration: "May 2023 - Aug 2023",
    city: "Port Harcourt",
    descriptions: [
      "Lead in the design, of layout of the app",
      "Conduct assessments of all User Interface in order to ensure quality and accuracy",
    ],
    job_type: "On-site",
  },
  {
    id: 3,
    job_title: "UI/UX Designer",
    company_name: "TechKraft Inc",
    duration: "Oct 2022 - Mar 2023",
    city: "Imo",
    descriptions: [
      "Lead in the design, of layout of the app",
      "Conduct assessments of all User Interface in order to ensure quality and accuracy",
    ],
    job_type: "Remote",
  },
  {
    id: 3,
    job_title: "UI/UX Designer",
    company_name: "LogiKeep",
    duration: "Aug 2023 - Oct 2022",
    city: "Lagos",
    descriptions: [
      "Lead in the design, of layout of the app",
      "Conduct assessments of all User Interface in order to ensure quality and accuracy",
    ],
    job_type: "Remote",
  },
];

const ResumeItem = ({
  job_title,
  duration,
  company_name,
  city,
  descriptions,
  job_type,
}) => {
  return (
    <div className={styles.resumeItem}>
      <h4>
        <span>{job_title}</span>
        <span className={styles.jobType}>
          <FaMapMarkerAlt /> <span> {job_type}</span>
        </span>
      </h4>
      <h5>{duration}</h5>
      <p>
        <em>{`${company_name}, ${city}`}</em>
      </p>
      <ul>
        {descriptions?.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <Section
      className={styles.contact}
      title="A summary of my work experience"
      subtitle="Professional Experience"
      description="I have worked with the these companies"
      id="experience"
    >
      <div className={styles.container}>
        {work_experience.map((exp, idx) => (
          <ResumeItem
            key={idx}
            job_title={exp.job_title}
            duration={exp.duration}
            company_name={exp.company_name}
            city={exp.city}
            descriptions={exp.descriptions}
            job_type={exp.job_type}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
