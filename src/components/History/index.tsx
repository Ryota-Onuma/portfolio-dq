import { ProfileTitle } from "../../images/index";
import React from "react";
import * as styles from "./index.module.css";

const History = () => {
  const histories = [
    {
      period: "2021年4月 ~",
      org: "株式会社 BuySell Technologies",
      job: "バックエンドエンジニア",
      contents: [
        "2021.12 -\nECモール出品受注一元管理システム",
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
    <div className={styles.history}>
      <div className={styles.historyTitle} id="history">
        <ProfileTitle />
      </div>
      <div className={styles.historyWrapper}>
        <div className={styles.historyWrapperInner}>
          {histories.map((history, index) => {
            return (
              <div key={index} className={styles.historyContent}>
                <div className={styles.historyMetadata}>
                  <div className={styles.historyPeriod}>
                    <span className={styles.historyPeriodCircle}>●</span>
                    {history.period}
                  </div>
                  <div>{history.org}</div>
                  <div>{history.job}</div>
                </div>
                <div className={styles.historyDetails}>
                  {history.contents.map((content, index) => {
                    return <p key={index}>{content}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default History;
