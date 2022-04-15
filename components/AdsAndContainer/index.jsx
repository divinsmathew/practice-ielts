import styles from "./AdsAndContainer.module.scss";

const AdsAndContainer = ({ children }) => {
    return (
        <section className={styles["primary-container"]}>
            <section className={styles["ad-container"]}></section>
            <section className={styles["playground"]}>{children}</section>
            <section className={styles["ad-container"]}></section>
        </section>
    );
};

export default AdsAndContainer;
