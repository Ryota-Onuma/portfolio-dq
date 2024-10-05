import "../font/PixelMplus10-Regular.ttf";
import type { HeadFC, PageProps } from "gatsby";
import * as styles from "../styles/index.module.css";
import Top from "../components/Top";
import Bottom from "../components/Bottom";
import Introduction from "../components/Introduction";
import History from "../components/History";
import Articles from "../components/Articles";
import { Connector } from "../components/Common";
import React from "react";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main className={styles.body}>
            <Top />
            <Connector />
            <Introduction />
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
