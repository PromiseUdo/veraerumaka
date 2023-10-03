import styles from "../styles/Works.module.scss";
import Section from "./Section";
const Works = () => {
  return (
    <Section
      className={styles.works}
      title="Some of my projects"
      subtitle="My Projects"
      description="I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence."
      id="skills"
    >
      Works
    </Section>
  );
};

export default Works;
