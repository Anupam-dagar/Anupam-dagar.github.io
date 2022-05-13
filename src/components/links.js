import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import styles from './links.module.css'
import GitHub from "../../assets/icons/github.svg";
import LinkedIn from "../../assets/icons/linkedIn.svg";
import Mail from "../../assets/icons/mail.svg";
import Medium from  "../../assets/icons/medium.svg";
import Heroku from "../../assets/icons/heroku.svg";


export default () => (
  <div className={styles.links}>
    <OutboundLink href="https://portfolio.anupamdagar.com/" rel="noopener noreferrer" aria-label="Link to my portfolio">
      <button className={styles.portfolio}>
        <strong>View My Portfolio</strong>
      </button>
    </OutboundLink>

    <OutboundLink href="https://www.linkedin.com/in/anupamdagar" rel="noopener noreferrer" target="_blank" aria-label="Link to my LinkedIn profile">
      <LinkedIn alt="LinkedIn icon" />
    </OutboundLink>

    <OutboundLink href="https://github.com/Anupam-dagar" rel="noopener noreferrer" target="_blank" aria-label="Link to my GitHub profile">
      <GitHub alt="GitHub icon" />
    </OutboundLink>

    <OutboundLink href="https://blog.anupamdagar.com" rel="noopener noreferrer" target="_blank" aria-label="Link to my Blog">
      <Medium alt="Medium icon" />
    </OutboundLink>

    <OutboundLink href="https://www.heroku.com/podcasts/codeish/43-the-github-student-developer-pack" rel="noopener noreferrer" aria-label="Link to my Heroku podcast">
      <Heroku alt="Heroku icon" />
    </OutboundLink>
    
    <OutboundLink href="mailto:dagaranupam@gmail.com" rel="noopener noreferrer" aria-label="Link to my email address">
      <Mail alt="Mail icon" />
    </OutboundLink> 
  </div>
)
