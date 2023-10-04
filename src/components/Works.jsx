import styles from "../styles/Works.module.scss";
import Section from "./Section";
import Portfolio1 from "../assets/portfolio-1.png";
import Portfolio2 from "../assets/portfolio-2.png";
import Portfolio3 from "../assets/portfolio-3.png";
import Portfolio4 from "../assets/portfolio-4.png";
import Portfolio5 from "../assets/portfolio-5.png";
import Portfolio6 from "../assets/portfolio-6.png";
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
          <img src={Portfolio1} alt="worksImg" className={styles.worksImg} />
          <img src={Portfolio2} alt="worksImg" className={styles.worksImg} />
          <img src={Portfolio3} alt="worksImg" className={styles.worksImg} />
          <img src={Portfolio4} alt="worksImg" className={styles.worksImg} />
          <img src={Portfolio5} alt="worksImg" className={styles.worksImg} />
          <img src={Portfolio6} alt="worksImg" className={styles.worksImg} />
        </div>
        <a
          target="_blank"
          href="https://www.behance.net/4053cadfverauchenna/projects"
        >
          <button className={styles.btn}>See More</button>
        </a>
      </div>
    </Section>
  );
};

export default Works;
