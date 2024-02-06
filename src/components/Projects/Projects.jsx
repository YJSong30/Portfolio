import React, { useState } from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>projects</h2>
      {/* <h3 className={styles.learnMore}>click on an item to learn more</h3> */}
      <div className={styles.projectGrid}>
        <div className={styles.projectBox}>
          <img
            src={getImageUrl("projects/recyclethis.png")}
            alt="RecycleThis"
          />
          <div className={styles.projectDisc}>
            <h3 className={styles.projectDisc1}>RecycleThis</h3>
            <div class={styles.projectDisc2}>
              <p class={styles.projectDisc3}>
                - Full-stack application that utilizes image/voice recognition
                for recycling needs using React Native, MongoDB
              </p>
              <p>- CruzHacks Hackathon 2024 Winner</p>
            </div>
          </div>
        </div>

        <div className={styles.projectBox}>
          <img src={getImageUrl("projects/portfolio.png")} />
          <div className={styles.projectDisc}>
            <h3 className={styles.projectDisc1}>Portfolio Website</h3>
            <div class={styles.projectDisc2}>
              <p class={styles.projectDisc3}>
                - Personal portfolio website built using React.js
              </p>
            </div>
          </div>
        </div>

        <div className={styles.projectBox}>
          <img src={getImageUrl("projects/fruitninja.jpg")} />
          <div className={styles.projectDisc}>
            <h3 className={styles.projectDisc1}>2D Fruit Ninja</h3>
            <div class={styles.projectDisc2}>
              <p class={styles.projectDisc3}>
                - 2D web version of Fruit Ninja with Java using Eclipse
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
