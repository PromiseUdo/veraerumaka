import styles from "../styles/About.module.scss";
import Section from "./Section";
import { motion } from "framer-motion";
import { useRef } from "react";
const About = () => {
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
            transition={{ duration: 0.5 }}
            viewport={{ root: scrollRef }}
            className={styles.skillBar}
          >
            <div className={styles.skillBarText}>
              <p>
                I am currently a product designer at Aceplora and I take
                quarterly bootcamp trainings. I&apos;ve mentored and trained
                designers to see beyond the tools and deliver easy and enjoyable
                products that solves real problems.
              </p>
              <p>
                When I&apos;m not designing, I am either seeing a movie, hitting
                the gym or simply being awesome. &#128513;
              </p>

              <p>
                I am open to both full-time remote and contract roles. Feel free
                to reach out to me to bring your ideas into life.
              </p>
            </div>
          </motion.div>
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
              transition={{ duration: 0.5 }}
              viewport={{ root: scrollRef }}
              className={styles.process}
            >
              <div className={styles.skillBarText}>
                <motion.p whileHover={{ scale: 1.01 }}>Understand</motion.p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ root: scrollRef }}
              className={styles.process}
            >
              <div className={styles.skillBarText}>
                <motion.p whileHover={{ scale: 1.01 }}>UX Research</motion.p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ root: scrollRef }}
              className={styles.process}
            >
              <div className={styles.skillBarText}>
                <motion.p whileHover={{ scale: 1.01 }}>Analyze</motion.p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ root: scrollRef }}
              className={styles.process}
            >
              <div className={styles.skillBarText}>
                <motion.p whileHover={{ scale: 1.01 }}>Prototype</motion.p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ root: scrollRef }}
              className={styles.process}
            >
              <div className={styles.skillBarText}>
                <motion.p whileHover={{ scale: 1.01 }}>
                  Testing/Validation
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ root: scrollRef }}
              className={styles.process}
            >
              <div className={styles.skillBarText}>
                <motion.p whileHover={{ scale: 1.01 }}>Hand Over</motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
