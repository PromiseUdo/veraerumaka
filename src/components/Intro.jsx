import styles from "../styles/Intro.module.scss";
import Section from "./Section";
import bg from "../assets/vera.png";
import btnImg from "../assets/hireme.png";
import DownloadIcon from "../assets/download.png";
import SuitcaseIcon from "../assets/suitcase.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <Section id="intro" className={styles.intro}>
      <div className={styles.introContent}>
        <span className={styles.hello}>Hello,</span>
        <span className={styles.introText}>
          I&apos;m <span className={styles.introName}>Vera Erumaka</span> <br />
          Product Designer
        </span>
        <p className={styles.introPara}>
          I am a skilled product designer with experience in creating <br />
          visually appealing and user friendly designs.
        </p>

        <div className={styles.actions}>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className={styles.hire}>
              <img className={styles.btnImg} src={btnImg} alt="hire me" />
              <span> Hire Me</span>
            </button>
          </Link>
          <a href="/resume/vera_erumaka_cv.pdf" download>
            <button className={styles.resume}>
              <img className={styles.btnImg} src={DownloadIcon} alt="hire me" />
              <span> Download CV</span>
            </button>
          </a>
        </div>
      </div>
      <img src={bg} alt="profile picture" className={styles.bg} />
    </Section>
  );
};

export default Intro;
