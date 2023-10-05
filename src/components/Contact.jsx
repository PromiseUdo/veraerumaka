import styles from "../styles/Contact.module.scss";
import Section from "./Section";
import XIcon from "../assets/x.png";
import FacebookIcon from "../assets/facebook.svg";
import BehanceIcon from "../assets/behance.svg";
import LinkedinIcon from "../assets/linkedin.svg";
const Contact = () => {
  return (
    <Section
      className={styles.contact}
      title="Let's talk about your next project"
      subtitle="Contact Me"
      description="Feel free to reach out to me to discuss your project or learn about product design"
      id="contact"
    >
      <div className={styles.container}>
        <form className={styles.contactForm}>
          <input
            type="text"
            name="name"
            className={styles.name}
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            className={styles.email}
            placeholder="Your Email"
          />
          <textarea
            className={styles.message}
            name="message"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
        <div className={styles.socialProfiles}>
          <p>Let's Connect</p>
          <div>
            <a
              href="https://www.behance.net/4053cadfverauchenna/projects"
              target="_blank"
            >
              <img
                src={BehanceIcon}
                alt="behance icon"
                className={styles.link}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vera-erumaka-435254193/"
              target="_blank"
            >
              <img
                src={LinkedinIcon}
                alt="facebook icon"
                className={styles.link}
              />
            </a>
            <a href="https://twitter.com/ErumakaVera" target="_blank">
              <img src={XIcon} alt="x icon" className={styles.link} />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100080651036442"
              target="_blank"
            >
              <img
                src={FacebookIcon}
                alt="facebook icon"
                className={styles.link}
              />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
