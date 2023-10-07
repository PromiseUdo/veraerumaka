import styles from "../styles/Contact.module.scss";
import Section from "./Section";
import { FaBehanceSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_ux36skr",
        "template_plz9ofx",
        form.current,
        "N6H8bFh0h9rZ6mCAW"
      )
      .then(
        (result) => {
          setIsLoading(false);
          e.target.reset();
          toast.success("I will get back to you shortly!", {
            position: toast.POSITION.TOP_CENTER,
          });
        },
        (error) => {
          setIsLoading(false);
          e.target.reset();
          toast.error("Oops! Something went wrong.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
  };

  return (
    <Section
      className={styles.contact}
      title="Let's Talk About Your Next Project"
      subtitle="Contact Me"
      description="Feel free to reach out to me to discuss your project or learn about product design"
      id="contact"
    >
      <div className={styles.container}>
        <form ref={form} className={styles.contactForm} onSubmit={sendEmail}>
          <input
            required
            type="text"
            name="user_name"
            className={styles.name}
            placeholder="Your Name"
          />
          <input
            required
            type="email"
            name="user_email"
            className={styles.email}
            placeholder="Your Email"
          />
          <textarea
            required
            className={styles.message}
            name="message"
            placeholder="Your Message"
          ></textarea>
          <motion.button
            whileTap={{ scale: 0.85 }}
            type="submit"
            className={styles.submitBtn}
          >
            {isLoading ? (
              <BeatLoader loading color="#ffffff" />
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
        <div className={styles.socialProfiles}>
          <p>Let's Connect</p>
          <div>
            <motion.a
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              whileTap={{ scale: 0.85 }}
              href="https://www.behance.net/4053cadfverauchenna/projects"
              target="_blank"
            >
              <FaBehanceSquare className={styles.link} />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              whileTap={{ scale: 0.85 }}
              href="https://www.linkedin.com/in/vera-erumaka-435254193/"
              target="_blank"
            >
              <FaLinkedin className={styles.link} />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              whileTap={{ scale: 0.85 }}
              href="https://twitter.com/ErumakaVera"
              target="_blank"
            >
              <FaSquareXTwitter className={styles.link} />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              whileTap={{ scale: 0.85 }}
              href="https://web.facebook.com/profile.php?id=100080651036442"
              target="_blank"
            >
              <FaFacebookSquare className={styles.link} />
            </motion.a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
