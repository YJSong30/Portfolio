import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, i'm Young</h1>
        <p className={styles.description}>
          I'm currently a senior in my last semester as a computer science major
          at the University of the Pacific. Reach out if you'd like to learn
          more!
        </p>
        <div className={styles.flexContainer}>
          <a
            href="mailto:youngsong1230@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <nav className={styles.navbar}>
            <div className={styles.menu}>
              <ul className={styles.menuItems}>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <img
        src={getImageUrl("mainImage/mainImage.gif")}
        alt="main image"
        className={styles.mainImg}
      ></img>
      <div className={styles.topBlur} />
      {/* <div className={styles.bottomBlur} /> */}
    </section>
  );
};
