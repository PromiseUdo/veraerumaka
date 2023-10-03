import React from "react";
import styles from "../styles/Navbar.module.scss";
import { Link } from "react-scroll";
import contactImg from "../assets/contact.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <img className={styles.logo} src="/logo2.svg" alt="site logo" />
      </Link>
      <div className={styles.desktopMenu}>
        <Link className={styles.desktopMenuListItem}>Home</Link>
        <Link className={styles.desktopMenuListItem}>About</Link>
        <Link className={styles.desktopMenuListItem}>Experience</Link>
        <Link className={styles.desktopMenuListItem}>Portfolio</Link>
        <Link className={styles.desktopMenuListItem}>Clients</Link>
      </div>
      <button className={styles.desktopMenuBtn}>
        <img src={contactImg} alt="" className={styles.desktopMenuImg} />
        Contact Me
      </button>
    </div>
  );
};

export default Navbar;
