import Head from "next/head";

import styles from "./Listening.module.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import AudioVisualizer from "components/AudioVisualizer";
import AdsAndContainer from "components/AdsAndContainer";

import { LISTENING_TESTS } from "./constants";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getRandomIntegerInRange } from "components/utils";

const Listening = ({ testId }) => {
    const router = useRouter();
    const [test, setTest] = useState();
    const [isTestPlaying, setIsTestPlaying] = useState(false);

    useEffect(() => {
        if (!testId) {
            const keys = Object.keys(LISTENING_TESTS);
            testId = keys[getRandomIntegerInRange(0, keys.length - 1)];
            router.push(`/listening/${testId}`, undefined, { shallow: true });
        }
        setTest(LISTENING_TESTS[testId]);
    }, []);

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

                <main className={styles.main}>
                    <AdsAndContainer>
                        <AudioVisualizer
                            isTestPlaying={isTestPlaying}
                            test={test}
                        />
                        <section className="question-container"></section>
                    </AdsAndContainer>
                </main>
                <Footer />
            </div>
        </>
    );
};
export default Listening;
