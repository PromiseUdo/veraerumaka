import styles from "../styles/Skills.module.scss";
import Section from "./Section";
import UIDesign from "../assets/ui-design.png";
import WebDesign from "../assets/website-design.png";
import AppDesign from "../assets/app-design.png";
import Training from "../assets/training.png";
import { motion } from "framer-motion";
import { useRef } from "react";
const Skills = () => {
  const scrollRef = useRef(null);

  return (
    <Section
      ref={scrollRef}
      className={styles.skills}
      title="Learn More About What I offer"
      subtitle="What I do"
      description="I am a skilled Product Designer with experience in creating visually appealing and user-friendly website and app designs. These are the services I render."
      id="skills"
    >
      <div className={styles.skillBars}>
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }} // drag="x"
          viewport={{ root: scrollRef }}
          className={styles.skillBar}
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }} // drag="x"
          viewport={{ root: scrollRef }}
          className={styles.skillBar}
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }} // drag="x"
          viewport={{ root: scrollRef }}
          className={styles.skillBar}
        >
          <img className={styles.skillBarImg} src={Training} alt="app design" />
          <div className={styles.skillBarText}>
            <h2>Training</h2>
            <p>
              I leverage my experience to guide aspiring designers through the
              intricacies of UI/UX Design. Equipping them with tools and
              knowledge to excel.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
