import Blue from "../assets/blueDesign.png";
import styles from "./portfolio.module.css";
import First from "../assets/FirstPic.png";
import Second from "../assets/SecondPic.png";
import Third from "../assets/ThirdPic.png";
import Fourth from "../assets/FourthPic.png";

export default function Portfolio() {
  return (
    <div className={styles.MyPortfolio}>
      <div className={styles.portfolio}>
        <h4>
          My <span>Portfolio</span>
        </h4>
        <img src={Blue} alt="" />
      </div>
      <div className={styles.portfolioImage}>
        <img src={First} alt="" />

        <div className={styles.second}>
          <img src={Second} alt="" />
        </div>
        <div>
          <img src={Third} alt="" />
        </div>
        <div className={styles.fourth}>
          <img src={Fourth} alt="" />
        </div>
      </div>
    </div>
  );
}
