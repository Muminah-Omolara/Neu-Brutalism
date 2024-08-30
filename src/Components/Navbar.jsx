import logo from "../assets/logo.png";
import styles from "./nav.module.css";
import hamburger from "../assets/hamburger.png";
import borderImage from "../assets/border-image.png";
import mobileNav from "../assets/mobileNav.png";

export default function NavBar() {
  return (
    <>
      <div className={styles.mobileNav}>
        <img src={mobileNav} alt="" />
      </div>
      <div>
        <hr className={styles.mobileHr} />
      </div>
      <div className={styles.navItems}>
        <div className={styles.borderImage}>
          <img src={borderImage} alt="" />
        </div>

        <img className={styles.logo} src={logo} alt="" />

        <div>
          <img src={hamburger} alt="" />
        </div>
      </div>
    </>
  );
}
