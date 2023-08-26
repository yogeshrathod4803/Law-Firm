import React from "react";
import Logo from "../../Assets/Vector.png";
import styles from "../navigation/navigation.module.css";

const navigation = () => {
  return (
    <div className={styles.navigationContainer}>
      <div className={styles.brandContainer}>
        <img className={styles.brandName} src={Logo} alt="logo" />
        <h1 className={styles.brandName}>IGSTUDIO</h1>
      </div>
      <div>
        <ul className={styles.navOpts}>
          <li className={styles.navMenu}>Home</li>
          <li className={styles.navMenu}>Attorney</li>
          <li className={styles.navMenu}>Practice Areas</li>
          <li className={styles.navMenu}>About</li>
        </ul>
      </div>
      <div>
        <button className={styles.button}>Contact Now</button>
      </div>
    </div>
  );
};

export default navigation;
