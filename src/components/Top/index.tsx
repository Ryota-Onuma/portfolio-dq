import {
  OnumaRyota,
  Portfolio,
  SakuraWitch,
  MusicianDuck,
  ArrowIcon,
  BackButton,
} from "../../images/index";
import React from "react";
import { animateScroll as scroll } from "react-scroll";
import * as styles from "./index.module.css";
import * as commonStyles from "../Common/index.module.css";

const Top = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className={`${styles.top} ${commonStyles.area}`}>
        <div className={styles.topBackground}></div>
      </div>
      <div className={styles.topContents}>
        <div className={styles.titleText}>
          <OnumaRyota />
          <Portfolio />
        </div>
        <div className={styles.allCharacters}>
          <div className={styles.sakuraWitch}>
            <SakuraWitch />
          </div>
          <div className={styles.hero}> </div>
          <div className={styles.princess}> </div>
          <div className={styles.musicianDuck}>
            <MusicianDuck />
          </div>
        </div>
        <div className={styles.pageMoveButtons}>
          <div className={styles.arrowWrapper}>
            <ArrowIcon />
          </div>
          <div className={styles.backButtonWrapper}>
            <span onClick={() => scrollToTop()}>
              <BackButton />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
