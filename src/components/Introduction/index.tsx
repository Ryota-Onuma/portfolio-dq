import React from "react";
import * as styles from "./index.module.css";
import * as commonStyles from "../Common/index.module.css";

const Introduction = () => {
    const calcAge = (): number => {
        const today = new Date();
        const birthday = {
            year: 1997,
            month: 8,
            date: 29,
        };

        const thisYearsBirthday = new Date(
            today.getFullYear(),
            birthday.month - 1,
            birthday.date,
        );
        let age = today.getFullYear() - birthday.year;
        if (today < thisYearsBirthday) {
            return age--;
        }

        return age;
    };

    const technologies = ["Go", "GraphQL", "Elasitcsearch"];

    return (
        <>
            <div className={`${styles.introduction} ${commonStyles.area}`}>
                <Title />
                <div className={styles.statusArea}>
                    <div className={styles.statusCharacter}>
                        <Character />
                    </div>
                    <div className={styles.statusContainer}>
                        <div className={styles.status}>
                            <div className={styles.statusTitleWrapper}>
                                <span className={styles.statusTitle} />
                            </div>
                            <div className={styles.statusContent}>
                                <p>
                                    {" "}
                                    なまえ:{" "}
                                    <ruby>
                                        {" "}
                                        尾沼 亮太<rt>おぬま りょうた</rt>
                                    </ruby>{" "}
                                </p>
                                <p>レベル: {calcAge()}</p>
                                <p>しごと: ソフトウェアエンジニア</p>
                                <p>じもと: 長野県</p>
                            </div>
                        </div>
                        <div className={styles.status}>
                            <div className={styles.statusContent}>
                                <p>
                                    E&ensp;&ensp;
                                    {technologies.map((technology, index) => {
                                        return (
                                            <span key={index}>
                                                {technology}
                                                {index + 1 !=
                                                    technologies.length && ", "}
                                            </span>
                                        );
                                    })}
                                </p>
                                <p>
                                    E&ensp;&ensp;
                                    <a
                                        href="https://github.com/Ryota-Onuma"
                                        target="_brank"
                                    >
                                        GitHub
                                    </a>
                                </p>
                                <p>
                                    E&ensp;&ensp;
                                    <a
                                        href="https://x.com/onuma_ryota"
                                        target="_brank"
                                    >
                                        X(Twitter)
                                    </a>
                                </p>
                            </div>
                        </div>{" "}
                    </div>
                </div>
            </div>
            <div className={styles.introductionDark}></div>
        </>
    );
};

const Title = () => {
    return (
        <div className={commonStyles.titleWrapper} id="introduction">
            <div className={`${styles.title} ${commonStyles.title}`} />
        </div>
    );
};

const Character = () => {
    return <div className={styles.character} />;
};
export default Introduction;
