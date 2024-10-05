import React from "react";
import * as styles from "./index.module.css";
import * as commonStyles from "../Common/index.module.css";

type history = {
    period: string;
    org: string;
    job: string;
    contents: string[];
};

const History = () => {
    const histories: Array<history> = [
        {
            period: "2021年4月 〜",
            org: "株式会社 BuySell Technologies",
            job: "ソフトウェアエンジニア",
            contents: [
                "2021.12 -\nECモール出品受注一元管理システムの新規開発、保守運用",
                "2021.5 - 2021.12\n在庫管理システムの新規機能開発、保守運用",
            ],
        },
        {
            period: "2021年3月",
            org: "横浜国立大学経済学部 卒業",
            job: "",
            contents: [],
        },
    ];
    return (
        <div className={styles.histories}>
            <Title />
            <div className={styles.historyWrapper}>
                <div className={styles.historyWrapperInner}>
                    {histories.map((history, index) => {
                        return <EachHistory {...history} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );
};

const Title = () => {
    return (
        <div
            className={`${styles.titleWrapper} ${commonStyles.titleWrapper}`}
            id="history"
        >
            <div className={`${styles.title} ${commonStyles.title}`} />
        </div>
    );
};

const EachHistory = ({ period, org, job, contents }: history, idx: number) => {
    return (
        <div key={idx} className={styles.history}>
            <div className={styles.historyMetadata}>
                <div className={styles.historyPeriod}>
                    <span className={styles.historyPeriodCircle}>●</span>
                    {period}
                </div>
                <div>{org}</div>
                <div>{job}</div>
            </div>
            <div className={styles.historyDetails}>
                {contents.map((content, index) => {
                    return <p key={index}>{content}</p>;
                })}
            </div>
        </div>
    );
};

export default History;
