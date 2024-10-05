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
                <div className={styles.background}></div>
            </div>
            <div className={styles.contents}>
                <div className={styles.title}>
                    <OnumaRyota />
                    <Portfolio />
                </div>
                <div className={styles.characters}>
                    <SakuraWitch />
                    <Hero />
                    <Princess />
                    <MusicianDuck />
                </div>
                <div className={styles.buttons}>
                    <Scroll />
                    <div className={styles.backButton}>
                        <span onClick={() => scrollToTop()}>
                            <Back />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

// 画像は明示的にわかりやすくコンポーネント化することで、コードの見通しを良くする
const OnumaRyota = () => {
    return <div className={styles.onumaRyota} />;
};

const Portfolio = () => {
    return <div className={styles.portfolio} />;
};

const SakuraWitch = () => {
    return <div className={styles.sakuraWitch} />;
};

const Hero = () => {
    return <div className={styles.hero} />;
};

const Princess = () => {
    return <div className={styles.princess} />;
};

const MusicianDuck = () => {
    return <div className={styles.musicianDuck} />;
};

const Scroll = () => {
    return <div className={styles.scroll} />;
}

const Back = () => {
    return <div className={styles.back} />;
}

export default Top;
