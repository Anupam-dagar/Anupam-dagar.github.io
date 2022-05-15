import React from "react";
import * as styles from "./about.module.css";

const About = () => (
  <div className={styles.about}>
    <h1 className={styles.headline}>Anupam Dagar</h1>
    <p className={styles.underline}>
      I'm a <strong>Full Stack</strong> Developer with 2 years of experience.
      <br />
      Currently working as Software Engineer at <strong>Ula</strong>
    </p>
  </div>
);

export default About;
