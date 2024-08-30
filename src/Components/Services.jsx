import styles from "./services.module.css";
import smiley from "../assets/smiley.png";
import pinkCutDown from "../assets/pinkCutDown.png"

export default function Services() {
  return (
    <div>
      <div className={styles.services}>
        <h3>Services we're providing that derive 99% result</h3>
        <img className={styles.smiley} src={smiley} alt="" />
      </div>
      <div>
        <img className={styles.pink} src={pinkCutDown} alt="" />
      </div>
    </div>
  );
}
