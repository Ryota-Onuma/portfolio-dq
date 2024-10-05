import React from "react";
import * as styles from "./index.module.css";

const Bottom = () => {
    return (
        <>
            <div className={styles.bottom}>
                <div className={styles.bottomBackground}></div>
                <a href="#introduction">Introduction</a>
                <a href="#history">History</a>
                <a href="#articles">Articles</a>
                <div className={styles.snsContainer}>
                    <a href="https://x.com/onuma_ryota" target="_brank">
                        <X />
                    </a>
                    <a href="https://github.com/Ryota-Onuma" target="_brank">
                        <GitHub />
                    </a>
                </div>
            </div>
        </>
    );
};

const X = () => {
    return <div className={styles.x} />;
}

const GitHub = () => {
    return <div className={styles.github} />;
}

export default Bottom;
