import styles from "../styles/About.module.scss";
import Section from "./Section";
import { motion } from "framer-motion";
import { useRef } from "react";
const About = () => {
  const scrollRef = useRef(null);
  const processMotion = {
    rest: { scale: 1, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      scale: 1.02,
    },
  };
  return (
    <Section
      ref={scrollRef}
      className={styles.skills}
      title="Learn More About Me"
      subtitle="About Me"
      description="A sneak peek into who I am"
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
            <p className={styles.skillBarText}>
              My name is Erumaka Uchenna Vera.🥳An experienced UI/UX and
              Graphics Designer, I specialize in creating immersive user
              experiences,Interface and captivating visual identities that make
              a lasting impact.
            </p>
            <p className={styles.skillBarText}>
              With a full range of services, I offer expertise in user
              experience research, information architecture, interactive
              prototyping, wireframing, and usability testing etc to ensure
              seamless navigation and optimal engagement.🌟
            </p>

            <p className={styles.skillBarText}>
              Let's collaborate to elevate your brand and achieve your goals
              together! 👩‍💼🌟
            </p>
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
              whileHover="hover"
              animate="rest"
              className={styles.process}
            >
              <motion.p
                className={styles.skillBarText}
                variants={processMotion}
              >
                Understand
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ root: scrollRef }}
              whileHover="hover"
              animate="rest"
              className={styles.process}
            >
              <motion.p
                className={styles.skillBarText}
                variants={processMotion}
              >
                UX Research
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ root: scrollRef }}
              whileHover="hover"
              animate="rest"
              className={styles.process}
            >
              <motion.p
                className={styles.skillBarText}
                variants={processMotion}
              >
                Analyze
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ root: scrollRef }}
              whileHover="hover"
              animate="rest"
              className={styles.process}
            >
              <motion.p
                className={styles.skillBarText}
                variants={processMotion}
              >
                Prototype
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ root: scrollRef }}
              whileHover="hover"
              animate="rest"
              className={styles.process}
            >
              <motion.p
                className={styles.skillBarText}
                variants={processMotion}
              >
                Testing/Validation
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ root: scrollRef }}
              whileHover="hover"
              animate="rest"
              className={styles.process}
            >
              <motion.p
                className={styles.skillBarText}
                variants={processMotion}
              >
                Hand Over
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
