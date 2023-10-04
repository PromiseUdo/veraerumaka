import React, { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { Link } from "react-scroll";
import contactImg from "../assets/contact.png";
import menu from "../assets/menu.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.navbar}>
      <Link href="/">
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
          offset={-100}
          duration={500}
          className={styles.desktopMenuListItem}
        >
          About
        </Link>

        <Link
          activeClass={styles.active}
          to=""
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={styles.desktopMenuListItem}
        >
          Works
        </Link>
        <Link
          activeClass={styles.active}
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={styles.desktopMenuListItem}
        >
          Experience
        </Link>
        <Link
          activeClass={styles.active}
          to=""
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={styles.desktopMenuListItem}
        >
          Clients
        </Link>
      </div>
      {/*  onClick={()=> {
        document.getElementById('contact').scrollIntoView({behavior:'smooth'})
      }} */}
      <button className={styles.desktopMenuBtn}>
        <img src={contactImg} alt="" className={styles.desktopMenuImg} />
        Contact Me
      </button>

      <Link href="/">
        <img
          onClick={() => setShowMenu(!showMenu)}
          className={styles.mobileMenu}
          src={menu}
          alt="menu"
        />
      </Link>
      <div
        className={styles.navMenu}
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <Link
          onClick={() => setShowMenu(false)}
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
        <Link
          onClick={() => setShowMenu(false)}
          activeClass={styles.active}
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={styles.listItem}
        >
          About
        </Link>

        <Link
          onClick={() => setShowMenu(false)}
          activeClass={styles.active}
          to=""
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={styles.listItem}
        >
          Works
        </Link>
        <Link
          onClick={() => setShowMenu(false)}
          activeClass={styles.active}
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={styles.listItem}
        >
          Experience
        </Link>
        <Link
          onClick={() => setShowMenu(false)}
          activeClass={styles.active}
          to=""
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={styles.listItem}
        >
          Clients
        </Link>
        <Link
          onClick={() => setShowMenu(false)}
          activeClass={styles.active}
          to=""
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={styles.listItem}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
