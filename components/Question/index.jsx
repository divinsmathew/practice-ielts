import styles from "./Question.module.scss";

const Question = ({ data: question }) => {
    const renderMappedHtml = (html) => {
        const ids = html.match(/<#\d>/g) || [];
        const idNumbers = ids.map((e) => e.match(/\d/g)[0]);

        for (let i = 0; i < ids.length; i++) {
            const htmlToReplace = `<span class="${styles["answer-blank"]}">(${idNumbers[i]})</span>`;
            html = html.replace(ids[i], htmlToReplace);
        }

        return {
            __html: html,
        };
    };

    console.log(question);

    return (
        <>
            <h3>{question.title}</h3>
            <div
                dangerouslySetInnerHTML={renderMappedHtml(
                    question.questionHtml
                )}
            ></div>
            <table className={styles["styled-table"]}>
                <thead>
                    <tr>
                        {question.table.headings.map(
                            (heading, headingIndex) => {
                                return <th key={headingIndex}>{heading}</th>;
                            }
                        )}
                    </tr>
                </thead>
                <tbody>
                    {question.table.rows.map((row, rowIndex) => {
                        return (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => {
                                    return (
                                        <td
                                            key={cellIndex}
                                            dangerouslySetInnerHTML={renderMappedHtml(
                                                cell
                                            )}
                                        ></td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Question;
