import styles from "../styles/Footer.module.scss";
import { AiFillHeart } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &#169; 2023 Vera Erumaka. Made with </p>
      <BsFillSuitHeartFill style={{ margin: "0 0.2rem" }} />
      <p>and CSS </p>
    </footer>
  );
};

export default Footer;
