import "../font/PixelMplus10-Regular.ttf";
import type { HeadFC, PageProps } from "gatsby";
import { animateScroll as scroll } from "react-scroll";
import * as styles from "../styles/index.module.css";
import {
  OnumaRyota,
  Portfolio,
  SakuraWitch,
  MusicianDuck,
  ArrowIcon,
  BackButton,
  CharacterPageTitle,
  ArticlePageTitle,
  ProfileTitle,
  StatusTitle,
  XIcon,
  GitHubIcon,
} from "../images/index";
import React from "react";

const Top = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className={styles.top}>
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

const SelfIntroduction = () => {
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
      <div className={styles.selfIntroduction}>
        <div className={styles.selfIntroductionTitle} id="introduction">
          <CharacterPageTitle />
        </div>
        <div className={styles.statusArea}>
          <div className={styles.statusHero}>
            <MusicianDuck />
          </div>
          <div className={styles.status}>
            <span className={styles.statusTitle}>
              <StatusTitle />
            </span>
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
                      {index + 1 != technologies.length && ", "}
                    </span>
                  );
                })}
              </p>
              <p>
                E&ensp;&ensp;
                <a href="https://github.com/Ryota-Onuma" target="_brank">
                  GitHub
                </a>
              </p>
              <p>
                E&ensp;&ensp;
                <a href="https://x.com/onuma_ryota" target="_brank">
                  X(Twitter)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.selfIntroductionDark}></div>
    </>
  );
};

const Connector = () => {
  return <div className={styles.connector}> </div>;
};

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

const Articles = () => {
  const articleInfos = [
    {
      title: "LeetCode: 121. Best Time to Buy and Sell Stock をGoで解く",
      link: "https://zenn.dev/ryota_onuma/articles/c050d03d6f3bae",
      imageURL:
        "https://res.cloudinary.com/zenn/image/upload/s--iN926th1--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:LeetCode%253A%2520121.%2520Best%2520Time%2520to%2520Buy%2520and%2520Sell%2520Stock%2520%25E3%2582%2592Go%25E3%2581%25A7%25E8%25A7%25A3%25E3%2581%258F%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Ryota%2520Onuma%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzAzN2QwZTdkYzQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png",
    },
    {
      title: "LeetCode: 189. Rotate Array をGoで解く",
      link: "https://zenn.dev/ryota_onuma/articles/b12e4e994a2245",
      imageURL:
        "https://res.cloudinary.com/zenn/image/upload/s--uFAdbChk--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:LeetCode%253A%2520189.%2520Rotate%2520Array%2520%25E3%2582%2592Go%25E3%2581%25A7%25E8%25A7%25A3%25E3%2581%258F%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Ryota%2520Onuma%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzAzN2QwZTdkYzQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png",
    },
    {
      title: "LeetCode: 169. Majority Element をGoで解く",
      link: "https://zenn.dev/ryota_onuma/articles/b0fa3fc1173648",
      imageURL:
        "https://res.cloudinary.com/zenn/image/upload/s--yx5daGRN--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:LeetCode%253A%2520169.%2520Majority%2520Element%2520%25E3%2582%2592Go%25E3%2581%25A7%25E8%25A7%25A3%25E3%2581%258F%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:Ryota%2520Onuma%2Cx_203%2Cy_121/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzAzN2QwZTdkYzQuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_95/v1627283836/default/og-base-w1200-v2.png",
    },
    {
      title: "サービス運用の負担軽減に繋がった、Playwrightの紹介 - バイセル Tech Blog",
      link: "https://tech.buysell-technologies.com/entry/adventcalendar2023-12-03-01",
      imageURL:
        "https://cdn-ak.f.st-hatena.com/images/fotolife/b/bst-tech/20231130/20231130195121.png",
    },
    {
      title:
        "プレ負荷テストの導入が、新規開発プロジェクトの負荷テストを円滑にした体験談 - バイセル Tech Blog",
      link: "https://tech.buysell-technologies.com/entry/2023/10/30/102458",
      imageURL:
        "https://cdn-ak.f.st-hatena.com/images/fotolife/b/bst-tech/20231023/20231023164227.png",
    },
    {
      title:
        "HasuraのRemote Schema to Database Relationshipsを用いたElasticsearchとの検索連携 - バイセル Tech Blog",
      link: "https://tech.buysell-technologies.com/entry/2023/02/28/080000",
      imageURL:
        "https://cdn-ak.f.st-hatena.com/images/fotolife/b/bst-tech/20230228/20230228121619.png",
    },
    {
      title:
        "リファイメントとプランニングを改善することで、チームの属人化が解消された話 - バイセル Tech Blog",
      link: "https://tech.buysell-technologies.com/entry/adventcalendar2022-12-03",
      imageURL:
        "https://cdn-ak.f.st-hatena.com/images/fotolife/b/bst-tech/20221129/20221129105529.png",
    },
    {
      title:
        "Hasura CLIで挿入するマスタデータをスプレッドシート管理に移行させたので振り返ってみた",
      link: "https://tech.buysell-technologies.com/entry/2022/07/30/153326",
      imageURL:
        "https://ogimage.blog.st-hatena.com/17680117126983215210/4207112889903915559/1692772760",
    },
    {
      title:
        "在庫管理システムの本番環境DBアップグレードを振り返ってみる - バイセル Tech Blog",
      link: "https://tech.buysell-technologies.com/entry/2022/01/26/202243",
      imageURL:
        "https://ogimage.blog.st-hatena.com/17680117126983215210/13574176438052951327/1692772890",
    },
    {
      title:
        "CircleCIで構築されたCI/CD環境をGitHub Actionsに移行した際のポイント - バイセル Tech Blog",
      link: "https://tech.buysell-technologies.com/entry/adventcalendar2021-12-05",
      imageURL:
        "https://ogimage.blog.st-hatena.com/17680117126983215210/13574176438029286846/1692774674",
    },
    {
      title: "バイセルの内定者インターン with コロナってどんなことするの？？",
      link: "https://tech.buysell-technologies.com/entry/2020/12/21/092653",
      imageURL:
        "https://res.cloudinary.com/djprqtbkw/image/upload/v1702647393/lomxlnblevpqm9fg8l7v.png",
    },
  ];

  return (
    <div className={styles.articles}>
      <div className={styles.selfIntroductionTitle} id="articles">
        <ArticlePageTitle />
      </div>
      <div className={styles.articlesWrapper}>
        {articleInfos.map((info, index) => {
          return (
            <div key={index} className={styles.article}>
              <a href={info.link} target="_blank">
                <img src={info.imageURL} alt={info.title} />
              </a>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={styles.body}>
      <Top />
      <Connector />
      <SelfIntroduction />
      <Connector />
      <History />
      <Connector />
      <Articles />
      <Connector />
      <Bottom />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
