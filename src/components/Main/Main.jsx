import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Main.module.css";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";

export const Main = () => {
  return (
    <section className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarIcon}>
          <a href="https://github.com/YJSong30" target="_blank">
            <span className={styles.iconBackground}>
              <FaGithub size="30" />
            </span>
          </a>
        </div>
        <div className={styles.sidebarIcon}>
          <a
            href="https://www.linkedin.com/in/young-song-1954251ab/"
            target="_blank"
          >
            <span className={styles.iconBackground}>
              <AiOutlineLinkedin size="30" />
            </span>
          </a>
        </div>
        <div className={styles.sidebarIcon}>
          <a href="mailto:youngsong1230@gmail.com">
            <span className={styles.iconBackground}>
              <MdOutlineEmail size="30" />
            </span>
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Young Song</h1>
        <p className={styles.description}>
          I'm currently a senior in my last semester as a Computer Science major
          at University of the Pacific. Reach out if you'd like to learn more!
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
