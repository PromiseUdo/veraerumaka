import styles from "../styles/Works.module.scss";
import Section from "./Section";
import Portfolio1 from "../assets/portfolio-1.png";
import Portfolio2 from "../assets/portfolio-2.png";
import Portfolio3 from "../assets/portfolio-3.png";
import Portfolio4 from "../assets/portfolio-4.png";
import { AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";
import { useRef } from "react";
const projectsData = [
  {
    id: 1,
    link: "https://www.behance.net/gallery/174755889/Online-Book-Keeping-Inventory-Management-System",
    title: "LogiKeep Web App",
    description: "Book-keeping App",
    image: Portfolio1,
  },
  {
    id: 2,
    link: "https://www.behance.net/gallery/181501163/logistics-admin-page?tracking_source=project_owner_other_projects",
    title: "Afrimail Web App",
    description: "Logistics Mgmt App",
    image: Portfolio2,
  },
  {
    id: 3,
    link: "https://www.behance.net/gallery/166513147/Bank-application-for-mobile-device",
    title: "ARLBank Mobile App",
    description: "Bank Application",
    image: Portfolio3,
  },
  {
    id: 4,
    link: "https://www.behance.net/gallery/178472589/Event-Management-Application?tracking_source=project_owner_other_projects",
    title: "Credib Mobile App",
    description: "Event Planning App",
    image: Portfolio4,
  },
];

const ProjectCard = ({ ref, imgUrl, title, link, description }) => {
  return (
    <motion.div className={styles.cardContainer}>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ root: ref }}
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}
        className={styles.cardInner}
      >
        <div className={styles.overlay}>
          <a href={link} target="_blank" className={styles.linkWrapper}>
            <AiOutlineLink className={styles.linkIcon} />
          </a>
        </div>
      </motion.div>
      <div className={styles.cardText}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const scrollRef = useRef(null);

  return (
    <Section
      ref={scrollRef}
      className={styles.works}
      title="Featured Projects"
      subtitle="Projects"
      description="Here are a few of the many projects that I have worked on"
      id="works"
    >
      <div className={styles.container}>
        <div className={styles.worksImgs}>
          {projectsData.map((project, idx) => (
            <ProjectCard
              ref={scrollRef}
              key={idx}
              link={project.link}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          ))}
        </div>
        <motion.a
          whileTap={{ scale: 0.85 }}
          target="_blank"
          href="https://www.behance.net/4053cadfverauchenna/projects"
          className={styles.btn}
        >
          See More
        </motion.a>
      </div>
    </Section>
  );
};

export default Works;
