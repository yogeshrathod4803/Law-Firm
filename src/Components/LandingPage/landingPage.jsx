// LandingPage.js

import React from "react";
import HeroImage from "../../Assets/HeroImage.png";
import styles from "../LandingPage/landing.module.css";
import Navigation from "../navigation/navigation.jsx";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <div className={styles.landingContainer}>
        <div>
          <div>
            <h1 className={styles.heading}>You don't have to</h1>
            <h1 className={styles.heading2}>Fight them Alone</h1>
          </div>
          <div>
            <p className={styles.subheading}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur illo, voluptates eaque laboriosam similique mollitia
              perferendis iusto perspiciatis, consequuntur sit dolore commodi
              doloribus adipisci ducimus quasi. Dolorum tempore nemo ullam.
            </p>
          </div>
          <div className={styles.searchBar}>
            {/* <i className={styles.logoPlaceholder}></i> */}
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Enter your email address"
            />
            <button className={styles.button}>Let's Talk</button>
          </div>
        </div>
        <div className={styles.HeroImage}>
          <img src={HeroImage} alt="HeroImage" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
