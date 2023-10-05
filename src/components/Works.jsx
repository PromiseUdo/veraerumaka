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
    title: "LogiKeep Web App",
    description: "Dashboard Design",
    image: Portfolio1,
  },
  {
    id: 2,
    title: "Afrimail Web App",
    description: "Logistics Mgmt App",
    image: Portfolio2,
  },
  {
    id: 3,
    title: "LogiKeep Web App",
    description: "Auth Screen Design",
    image: Portfolio3,
  },
  {
    id: 4,
    title: "Credib Mobile App",
    description: "Event Planning App",
    image: Portfolio4,
  },
];

const ProjectCard = ({ imgUrl, title, description }) => {
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
          <a href="/" className={styles.linkWrapper}>
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
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          ))}

          {/* <div className={styles.portfolioWrap}>
            <img src={Portfolio1} alt="worksImg" className={styles.worksImg} />
            <div className={styles.portfolioInfo}>
              <h4>LogiKeep Web app</h4>
              <p>Dashboard</p>
            </div>
          </div>
          <div className={styles.portfolioWrap}>
            <img src={Portfolio2} alt="worksImg" className={styles.worksImg} />
            <div className={styles.portfolioInfo}>
              <h4>Afrimail Web app</h4>
              <p>Dashboard</p>
            </div>
          </div>
          <div className={styles.portfolioWrap}>
            <img src={Portfolio3} alt="worksImg" className={styles.worksImg} />
            <div className={styles.portfolioInfo}>
              <h4>Logikeep Web app</h4>
              <p>Auth Screen</p>
            </div>
          </div>
          <div className={styles.portfolioWrap}>
            <img src={Portfolio4} alt="worksImg" className={styles.worksImg} />
            <div className={styles.portfolioInfo}>
              <h4>Credib Mobile app</h4>
              <p>Task Screen</p>
            </div>
          </div> */}
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
