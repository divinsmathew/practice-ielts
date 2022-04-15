import Head from "next/head";
import styles from "./Home.module.scss";
import SectionButton from "components/SectionButton";

import { FiHeadphones, FiBookOpen } from "react-icons/fi";

import Header from "components/Header";
import Footer from "components/Footer";

const Home = () => {
    return (
        <>
            <Head>
                <title>Practice IELTS</title>
                <meta
                    name="Practice IELTS"
                    content="Sharpen your reading and listening skills and ace your IELTS exams!"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="container">
                <Header fromPage="home" />
                <main className={styles.main}>
                    <h1 className={styles.title}>Practice IELTS</h1>
                    <div className={styles.description}>
                        Sharpen your reading and listening skills and ace your
                        IELTS exam.
                    </div>
                    <div className={styles["root-sections"] + " mt-15"}>
                        <SectionButton
                            href="/reading"
                            textSecondary="Reading"
                            icon={<FiBookOpen size={60} />}
                        />
                        <SectionButton
                            href="/listening"
                            textSecondary="Listening"
                            icon={<FiHeadphones size={60} />}
                        />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};
export default Home;
