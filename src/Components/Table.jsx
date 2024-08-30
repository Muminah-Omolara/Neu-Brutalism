import styles from "./table.module.css";
import UserResearch from "../assets/UserResearch.png";
import Wireframe from "../assets/Wireframing.png";
import UIDesign from "../assets/UIDesigning.png";
import Prototype from "../assets/Prototyping.png";
import { Fragment } from "react";

export default function Table() {
  return (
    <div className={styles.Table}>
      <div className={styles.mobiletable}>
        <div>
          <h2 className={styles.projects}>
            39 <p>Projects</p>
          </h2>
          <h2 className={styles.generated}>
            100K+ <p>generated</p>
          </h2>
        </div>
        <div className={styles.userOne}>
          <img src={UserResearch} alt="" />
          <h1>User Research</h1>
          <p>Services we're providing that derive 99% result</p>
        </div>
        <div>
          <h2 className={styles.learn}>Learn more</h2>
        </div>
        <div className={styles.userTwo}>
          <img src={Wireframe} alt="" />
          <h1>Wireframing</h1>
          <p>Services we're providing that derive 99% result</p>
        </div>
        <div>
          <h2 className={styles.learn}>Learn more</h2>
        </div>
        <div className={styles.userThree}>
          <img src={UIDesign} alt="" />
          <h1>UI Designing</h1>
          <p>Services we're providing that derive 99% result</p>
        </div>
        <div>
          <h2 className={styles.learn}>Learn more</h2>
        </div>

        <div className={styles.userFour}>
          <img src={Prototype} alt="" />
          <h1>Prototyping</h1>
          <p>Services we're providing that derive 99% result</p>
        </div>
        <div>
          <h2 className={styles.learn}>Learn more</h2>
        </div>
      </div>

      {/* Table View for Desktop screen */}

      <div className={styles.desktoptable}>
        <div className={styles.firstColumn}>
          <h2 className={styles.desktopProjects}>
            39 <p>Projects</p>
          </h2>
          <h2 className={styles.desktopGenerated}>
            100K+ <p>generated</p>
          </h2>
        </div>
        <div className={styles.desktopUserOne}>
          <img src={UserResearch} alt="" />
          <h1>User Research</h1>
          <p>Services we're providing that derive 99% result</p>
          <div>
            <h2 className={styles.desktopLearn}>Learn more</h2>
          </div>
          <div className={styles.desktopUserThree}>
            <img src={UIDesign} alt="" />
            <h1>UI Designing</h1>
            <p>Services we're providing that derive 99% result</p>

            <h2 className={styles.desktopLearn}>Learn more</h2>
          </div>
        </div>

        <div className={styles.desktopUserTwo}>
          <img src={Wireframe} alt="" />
          <h1>Wireframing</h1>
          <p>Services we're providing that derive 99% result</p>
          <div>
            <h2 className={styles.desktopLearn}>Learn more</h2>
          </div>
          <div className={styles.desktopUserFour}>
            <img src={Prototype} alt="" />
            <h1>Prototyping</h1>
            <p>Services we're providing that derive 99% result</p>
            <div>
              <h2 className={styles.desktopLearn}>Learn more</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
