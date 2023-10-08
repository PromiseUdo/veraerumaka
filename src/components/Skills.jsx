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
      title="Learn More About Me"
      subtitle="About Me"
      description="A sneak peek into who I am."
      id="skills"
    >
      <div className={styles.container}>
        <div className={styles.skillBars}>
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }} // drag="x"
            viewport={{ root: scrollRef }}
            className={styles.skillBar}
          >
            {/* <img
            className={styles.skillBarImg}
            src={WebDesign}
            alt="web design"
          /> */}
            <div className={styles.skillBarText}>
              {/* <h2>Website Design</h2> */}
              <p>
                I am currently a product designer at Aceplora and I take
                quarterly bootcamp trainings. I've mentored and trained
                designers to see beyond the tools and deliver easy and enjoyable
                products that solves real problems.
              </p>
              <p>
                When I'm not designing, I am either seeing a movie, hitting the
                gym or simply being awesome. &#128513;
              </p>

              <p>
                I am open to both full-time remote and contract roles. Feel free
                to reach out to me to bring your ideas into life.
              </p>
            </div>
          </motion.div>
          {/* <motion.div
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
        </motion.div> */}
          {/* <motion.div
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
        </motion.div> */}
        </div>

        <div className={styles.skillBars}>
          <h3>My Design Process</h3>
          <p className={styles.processDesc}>
            My method ensures that I understand the purpose of the project and
            produce good looking results.
          </p>
          <div className={styles.processes}>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }} // drag="x"
              viewport={{ root: scrollRef }}
              className={styles.process}
            >
              <div className={styles.skillBarText}>
                <p>Understand</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }} // drag="x"
              viewport={{ root: scrollRef }}
              className={styles.process}
            >
              <div className={styles.skillBarText}>
                <p>UX Research</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }} // drag="x"
              viewport={{ root: scrollRef }}
              className={styles.process}
            >
              <div className={styles.skillBarText}>
                <p>Analyze</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }} // drag="x"
              viewport={{ root: scrollRef }}
              className={styles.process}
            >
              <div className={styles.skillBarText}>
                <p>Prototype</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }} // drag="x"
              viewport={{ root: scrollRef }}
              className={styles.process}
            >
              <div className={styles.skillBarText}>
                <p>Testing/Validation</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }} // drag="x"
              viewport={{ root: scrollRef }}
              className={styles.process}
            >
              <div className={styles.skillBarText}>
                <p>Hand Over</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
