import styles from "./ListeningTest.module.scss";
import Question from "components/Question";

const ListeningTest = ({ data }) => {
    return (
        <div className={styles["questions-grid"]}>
            {data.sections.map((section, sectionIndex) => {
                return (
                    <div key={sectionIndex}>
                        <div className={styles["section-header"]}>
                            {section.title}
                        </div>
                        <div className={styles["section-body"]}>
                            {section.questions.map(
                                (question, questionIndex) => (
                                    <Question
                                        key={questionIndex}
                                        data={question}
                                    />
                                )
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListeningTest;
