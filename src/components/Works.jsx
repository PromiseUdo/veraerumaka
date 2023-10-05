import styles from "../styles/Works.module.scss";
import Section from "./Section";
import Portfolio1 from "../assets/portfolio-1.png";
import Portfolio2 from "../assets/portfolio-2.png";
import Portfolio3 from "../assets/portfolio-3.png";
import Portfolio4 from "../assets/portfolio-4.png";
import { AiOutlineLink } from "react-icons/ai";

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

const ProjectCard = ({ imgUrl, title, link, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
        }}
        className={styles.cardInner}
      >
        <div className={styles.overlay}>
          <a href={link} target="_blank" className={styles.linkWrapper}>
            <AiOutlineLink className={styles.linkIcon} />
          </a>
        </div>
      </div>
      <div className={styles.cardText}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <Section
      className={styles.works}
      title="Some of my projects"
      subtitle="My Projects"
      description="I take pride in paying attention to the smallest details and making sure that my work is pixel perfect."
      id="works"
    >
      <div className={styles.container}>
        <div className={styles.worksImgs}>
          {projectsData.map((project, idx) => (
            <ProjectCard
              key={idx}
              link={project.link}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          ))}
        </div>
        <a
          target="_blank"
          href="https://www.behance.net/4053cadfverauchenna/projects"
          className={styles.btn}
        >
          See More
        </a>
      </div>
    </Section>
  );
};

export default Works;
