import design from "../assets/IDesign.png";
import styles from "./about.module.css";
import zainab from "../assets/zainab.png";

export default function About() {
  return (
    <div className={styles.AboutMe}>
      <div className={styles.topNotch}>
        <img src={design} alt="" />
      </div>
      <div>
        <img className={styles.zainab} src={zainab} alt="" />
      </div>
    </div>
  );
}
