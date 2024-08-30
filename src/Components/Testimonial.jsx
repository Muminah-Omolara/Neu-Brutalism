import styles from "./testimonial.module.css";
import newlogo from "../assets/new.png";
import Testimonial1 from "../assets/Testimonial1.png";
import Testimonial2 from "../assets/testimonial2.png";
import Testimonial3 from "../assets/Testimonial3.png";
import Testimonial4 from "../assets/Testimonial4.png";
import pinkImg from "../assets/pink.png";
import lines from "../assets/threeLines.png";
import logo from "../assets/logo.png";
import social from "../assets/social.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";

export default function Testimonials() {
  return (
    <div>
      <div className={styles.heading}>
        <h3>Here's what my clients are saying about my work</h3>
        <img className={styles.newlogo} src={newlogo} alt="" />
      </div>
      <div className={styles.Testimonials}>
        <img className={styles.first} src={Testimonial1} alt="" />
        <img className={styles.second} src={Testimonial2} alt="" />
        <div>
          <img className={styles.third} src={Testimonial3} alt="" />
          <img className={styles.fourth} src={Testimonial4} alt="" />
        </div>
      </div>
      <div className={styles.pinkbottom}>
        <div className={styles.pink}>
          <img src={pinkImg} alt="" />
        </div>
        <div className={styles.bottom}>
          <h3>Let's start designing your project</h3>
          <p>
            Want to see how to transform your brand into a unique style, send us
            a message
          </p>
          <div className={styles.ButtonContainer}>
            <button className={styles.button}>See Portfolio</button>
          </div>
          <img className={styles.line} src={lines} alt="" />
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.footer}>
        <div className={styles.mobileFooter}>
          <img src={logo} alt="" />
          <div>
            <p>Portfolio 2024</p>
          </div>
          <div>
            <div className={styles.mobileSocialMedia}>
              <img src={social} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.footer}>
          <div className={styles.desktopSocialMedia}>
            <img src={logo} alt="" />
            <div>
              <p>Portfolio 2024</p>
            </div>
            <img src={social} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
