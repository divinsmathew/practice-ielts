import Head from "next/head";
import styles from "./Reading.module.scss";
import Header from "../Header";
import Footer from "../Footer";

const Reading = () => {
    return (
        <>
            <Head>
                <title>Reading | Practice IELTS</title>
                <meta
                    name="Reading | Practice IELTS"
                    content="Sharpen your reading skills and ace your IELTS exam."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Header fromPage="reading" />

                <main className={styles.main}></main>
                <Footer />
            </div>
        </>
    );
};
export default Reading;
