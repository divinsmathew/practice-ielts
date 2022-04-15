import styles from "./SectionButton.module.scss";
import { BiRightArrowAlt } from "react-icons/bi";

const SectionButton = ({ href, icon, textSecondary }) => {
    return (
        <a href={href} className={styles["section-button"]}>
            <BiRightArrowAlt className="section-arrow" size={28} />
            <span className={styles["section-button-text-secondary"]}>
                <span>{textSecondary}</span>
                {icon}
            </span>
        </a>
    );
};
export default SectionButton;
