import Head from "next/head";
import styles from "./Home.module.scss";
import SectionButton from "./SectionButton";

import { FaHeadphonesAlt } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Practice IELTS</title>
                <meta
                    name="Practice IELTS"
                    content="Sharpen your reading and listening skills and ace your IELTS exams!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Practice IELTS</h1>
                <div className={styles.description}>
                    Sharpen your reading and listening skills and ace your IELTS
                    exam.
                </div>
                <div className={styles["root-sections"] + " mt-10"}>
                    <SectionButton
                        href="/reading"
                        textSecondary="Reading"
                        icon={<VscBook size={60} />}
                    />
                    <SectionButton
                        href="/listening"
                        textSecondary="Listening"
                        icon={<FaHeadphonesAlt size={60} />}
                    />
                </div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}
