import styles from "../styles/Intro.module.scss";
import Section from "./Section";
import bg from "../assets/vera.png";
import btnImg from "../assets/hireme.png";
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
        <Link>
          <button className={styles.btn}>
            <img className={styles.btnImg} src={btnImg} alt="hire me" /> Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile picture" className={styles.bg} />
    </Section>
  );
};

export default Intro;
