import { useEffect, useRef, useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { Link } from "react-scroll";
import contactImg from "../assets/contact.png";
import menu from "../assets/menu.png";
import { useToggleState } from "../hooks/useToggleState";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
const Navbar = () => {
  // const [showMenu, setShowMenu] = useState(false);
  const dropDownRef = useRef();
  const hamburgerBtn = useRef();

  // main nav variants
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  //mobile nav variants
  const mobileVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };
  const {
    state: showMenu,
    toggle,
    close: closeMobileNav,
  } = useToggleState(false);

  const handleOutsideClick = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      closeMobileNav();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: "easeOut", duration: 2 }}
      className={styles.container}
    >
      <div className={styles.navbar}>
        <Link
          className={styles.logoLink}
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img className={styles.logo} src="/logo2.svg" alt="site logo" />
        </Link>

        <div className={styles.desktopMenu}>
          <Link
            activeClass={styles.active}
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={styles.desktopMenuListItem}
          >
            Home
          </Link>
          <Link
            activeClass={styles.active}
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={styles.desktopMenuListItem}
          >
            About
          </Link>

          <Link
            activeClass={styles.active}
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={styles.desktopMenuListItem}
          >
            Works
          </Link>
          <Link
            activeClass={styles.active}
            to="experience"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={styles.desktopMenuListItem}
          >
            Experience
          </Link>
        </div>

        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className={styles.desktopMenuBtn}
        >
          <img
            src={contactImg}
            alt="mail icon"
            className={styles.desktopMenuImg}
          />
          Contact Me
        </motion.button>

        {!showMenu ? (
          <img
            onClick={() => toggle()}
            className={styles.mobileMenu}
            src={menu}
            alt="menu"
            ref={hamburgerBtn}
          />
        ) : (
          <AiOutlineClose className={styles.closeIcon} />
        )}

        <motion.div
          initial={false}
          animate={showMenu ? "open" : "closed"}
          ref={dropDownRef}
          className={styles.navMenu}
          style={{
            display: showMenu ? "flex" : "none",
          }}
        >
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: showMenu ? "auto" : "none" }}
          >
            <motion.li variants={mobileVariant}>
              <Link
                onClick={closeMobileNav}
                activeClass={styles.active}
                to="intro"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={styles.listItem}
              >
                Home
              </Link>
            </motion.li>

            <motion.li variants={mobileVariant}>
              <Link
                onClick={closeMobileNav}
                activeClass={styles.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className={styles.listItem}
              >
                About
              </Link>
            </motion.li>

            <motion.li variants={mobileVariant}>
              <Link
                onClick={closeMobileNav}
                activeClass={styles.active}
                to="works"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className={styles.listItem}
              >
                Works
              </Link>
            </motion.li>
            <motion.li variants={mobileVariant}>
              <Link
                onClick={closeMobileNav}
                activeClass={styles.active}
                to="experience"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className={styles.listItem}
              >
                Experience
              </Link>
            </motion.li>

            <motion.li variants={mobileVariant}>
              <Link
                onClick={closeMobileNav}
                activeClass={styles.active}
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className={styles.listItem}
              >
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
