import Head from "next/head";
import styles from "./Listening.module.scss";
import Header from "../Header";
import Footer from "../Footer";

const Listening = () => {
    return (
        <>
            <Head>
                <title>Listening | Practice IELTS</title>
                <meta
                    name="Listening | Practice IELTS"
                    content="Sharpen your listening skills and ace your IELTS exam."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <Header fromPage="listening" />

                <main className={styles.main}></main>
                <Footer />
            </div>
        </>
    );
};
export default Listening;
