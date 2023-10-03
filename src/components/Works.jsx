import styles from "../styles/Works.module.scss";
import Section from "./Section";
const Works = () => {
  return (
    <Section
      className={styles.works}
      title="Some of my projects"
      subtitle="My Projects"
      description="I take pride in paying attention to the smallest details and making sure that my work is pixel perfect."
      id="skills"
    >
      Works
    </Section>
  );
};

export default Works;
