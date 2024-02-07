import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.aboutSkills}>
        <div className={styles.aboutSkillsContainer}>
          <h2 className={styles.title}>about</h2>
          <p className={styles.description}>
            Senior at University of the Pacific majoring in Computer Science
            with an interest in full-stack development and artificial
            intelligence
          </p>

          <p className={styles.description}>
            In my free time, I enjoy coding, listening to music, watching
            documentaries and spending time with family and friends.
          </p>
        </div>

        <div className={styles.aboutSkillsContainer}>
          <h2 className={styles.title}>skills</h2>
          <p className={styles.description}>
            Languages: Python, Javascript, HTML/CSS, Java, C, C++
          </p>
          <p className={styles.description}>
            Frameworks/ Libraries: React, React Native, Node.js
          </p>
          <p className={styles.description}>
            Tools: Visual Studio Code, Git, MongoDB
          </p>
        </div>
      </div>
    </section>
  );
};
