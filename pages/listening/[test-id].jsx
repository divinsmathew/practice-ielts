import Head from "next/head";

import styles from "./Listening.module.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import AudioVisualizer from "components/AudioVisualizer";
import AdsAndContainer from "components/AdsAndContainer";
import ListeningTest from "components/ListeningTest";

import { LISTENING_TESTS } from "./constants";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from "components/Modal";

const Listening = () => {
    const router = useRouter();
    const [test, setTest] = useState();
    const [isTestPlaying, setIsTestPlaying] = useState(false);
    const [isQuestionsVisible, setIsQuestionsVisible] = useState(false);
    const [isInstructionsVisible, setIsInstructionsVisible] = useState(true);

    const shouldShowInstructions = () =>
        isInstructionsVisible && !isQuestionsVisible;
    const shouldShowQuestions = () =>
        isQuestionsVisible && !isInstructionsVisible;

    const startTest = () => {
        setIsInstructionsVisible(false);
        setIsQuestionsVisible(true);
        setIsTestPlaying(true);
    };

    const endTest = () => {
        setIsInstructionsVisible(false);
        setIsQuestionsVisible(true);
        setIsTestPlaying(true);
    };

    useEffect(() => {
        let testId = router.query["test-id"];
        if (!testId) return;
        setTest(LISTENING_TESTS[testId]);
    }, [router]);

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

                        {shouldShowInstructions() && (
                            <section
                                className={styles["instruction-container"]}
                            >
                                <Modal
                                    wrapperClass={styles["instruction-modal"]}
                                >
                                    <Modal.Header>
                                        Listening Test Instructions
                                    </Modal.Header>
                                    <Modal.Body>
                                        <ul>
                                            <li>
                                                Listen to the audio and answer
                                                the questions carefully.
                                            </li>
                                            <li>
                                                The audio will be played only
                                                once, pausing or re-playing
                                                won't be allowed.
                                            </li>
                                            <li>
                                                Test will auto end when the
                                                timer runs out. You will also
                                                have an option to end the test
                                                early.
                                            </li>
                                            <li>
                                                Click the button below to start
                                                the test.
                                            </li>
                                        </ul>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button
                                            className="button"
                                            onClick={startTest}
                                        >
                                            Start Test
                                        </button>
                                    </Modal.Footer>
                                </Modal>
                            </section>
                        )}

                        {shouldShowQuestions() && (
                            <>
                                <section
                                    className={styles["question-container"]}
                                >
                                    <ListeningTest data={test} />
                                </section>

                                <section className={styles["test-footer"]}>
                                    <button className="button">End Test</button>
                                </section>
                            </>
                        )}
                    </AdsAndContainer>
                </main>
                <Footer />
            </div>
        </>
    );
};
export default Listening;
