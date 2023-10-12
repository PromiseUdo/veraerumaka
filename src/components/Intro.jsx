import styles from "../styles/Intro.module.scss";
import Section from "./Section";
import bg from "../assets/vera.png";
import btnImg from "../assets/hireme.png";
import DownloadIcon from "../assets/download.png";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const Intro = () => {
  return (
    <Section id="intro" className={styles.intro}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={styles.introContent}
      >
        <span className={styles.hello}>Hello,</span>
        <span className={styles.introText}>
          I&apos;m <span className={styles.introName}>Vera Erumaka</span> <br />
          <TypeAnimation
            sequence={[
              "Product Designer",
              1000,
              "Tutor",
              1000,
              "UX Designer",
              1000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </span>
        <p className={styles.introPara}>
          I specialize in UI and UX design. With experience in creating
          intuitive designs that deliver outstanding results.
        </p>

        <div className={styles.actions}>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <motion.button whileTap={{ scale: 0.85 }} className={styles.hire}>
              <img className={styles.btnImg} src={btnImg} alt="hire me" />
              <span> Hire Me</span>
            </motion.button>
          </Link>
          <a href="/resume/vera_erumaka_cv.pdf" download>
            <motion.button whileTap={{ scale: 0.85 }} className={styles.resume}>
              <img className={styles.btnImg} src={DownloadIcon} alt="hire me" />
              <span> Download CV</span>
            </motion.button>
          </a>
        </div>
      </motion.div>
      <div className={styles.illustrationContainer}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={styles.illustration}
        >
          <img src={bg} alt="profile picture" className={styles.bg} />
          <span className={styles.circleSpin}></span>
        </motion.div>
      </div>
    </Section>
  );
};

export default Intro;
