import styles from "../styles/Skills.module.scss";
import Section from "./Section";
import UIDesign from "../assets/ui-design.png";
import WebDesign from "../assets/website-design.png";
import AppDesign from "../assets/app-design.png";
import Training from "../assets/training.png";
const Skills = () => {
  return (
    <Section
      className={styles.skills}
      title="Learn More About Me"
      subtitle="What I do"
      description="I am a skilled and passionate Product Designer with experience in creating visually appealing and user-friendly website and app designs. These are my services"
      id="skills"
    >
      <div className={styles.skillBars}>
        <div className={styles.skillBar}>
          <img
            className={styles.skillBarImg}
            src={WebDesign}
            alt="web design"
          />
          <div className={styles.skillBarText}>
            <h2>Website Design</h2>
            <p>
              I specialize in crafting user-centered website experiences, I
              design intuitive interfaces that engage and delight visitors.
            </p>
          </div>
        </div>
        <div className={styles.skillBar}>
          <img
            className={styles.skillBarImg}
            src={AppDesign}
            alt="app design"
          />
          <div className={styles.skillBarText}>
            <h2>Mobile App Design</h2>
            <p>
              I have experience in crafting user-friendly and visually appealing
              mobile interfaces that captivate and engage users.
            </p>
          </div>
        </div>
        <div className={styles.skillBar}>
          <img className={styles.skillBarImg} src={Training} alt="app design" />
          <div className={styles.skillBarText}>
            <h2>Training</h2>
            <p>
              I leverage my experience to guide aspiring designers through the
              intricacies of UI/UX Design. Equipping them with tools and
              knowledge to excel.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
