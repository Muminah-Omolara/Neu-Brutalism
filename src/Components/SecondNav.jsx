import styles from "./secondnav.module.css";

export default function SecondNav() {
  return (
    <div>
      <div className={styles.secondnav}>
        <nav className={styles.mobileNav}>
          <li>Figma</li>
          <li>Framer</li>
          <li>Webflow</li>
          <li>Notion</li>
        </nav>
        <div>
          <nav className={styles.desktopNav}>
            <li>Figma</li>
            <li>Framer</li>
            <li>Webflow</li>
            <li>Notion</li>
            <li>Lottie</li>
          </nav>
        </div>
      </div>
    </div>
  );
}
