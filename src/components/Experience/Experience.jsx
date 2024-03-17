import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>experience</h2>
      <div className={styles.experienceGrid}>
        <div className={styles.experienceBox}>
          <img src={getImageUrl("experience/eink.jpg")} />
          <div className={styles.experienceDesc}>
            <h3>E-Ink Corporation</h3>
            <p>Data Engineering Co-Op</p>
            <p>July '23 - Dec '23</p>
          </div>
        </div>
      </div>
    </section>
  );
};
