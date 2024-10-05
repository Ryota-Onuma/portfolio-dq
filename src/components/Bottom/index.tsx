import { XIcon, GitHubIcon } from "../../images/index";
import React from "react";
import * as styles from "./index.module.css";

const Bottom = () => {
  return (
    <>
      <div className={styles.bottom}>
        <div className={styles.bottomBackground}></div>
        <a href="#introduction">Introduction</a>
        <a href="#articles">Articles</a>
        <div className={styles.snsContainer}>
          <a href="https://x.com/onuma_ryota" target="_brank">
            <XIcon />
          </a>
          <a href="https://github.com/Ryota-Onuma" target="_brank">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export default Bottom;
