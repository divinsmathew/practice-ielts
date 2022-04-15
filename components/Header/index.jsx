import classNames from "classnames";
import { FiHeadphones, FiBookOpen, FiInfo } from "react-icons/fi";

import styles from "./Header.module.scss";

const Header = ({ fromPage }) => {
    return (
        <header className={styles.header}>
            <span>Practice IELTS</span>
            <nav>
                <a
                    href="/reading"
                    className={classNames(styles["header-link"], {
                        [styles["selected"]]: fromPage === "reading",
                    })}
                >
                    <FiBookOpen size={20} />
                </a>
                <a
                    href="/listening"
                    className={classNames(styles["header-link"], {
                        [styles["selected"]]: fromPage === "listening",
                    })}
                >
                    <FiHeadphones size={20} />
                </a>
                <a
                    href="/about"
                    className={classNames(styles["header-link"], {
                        [styles["selected"]]: fromPage === "about",
                    })}
                >
                    <FiInfo size={20} />
                </a>
            </nav>
        </header>
    );
};

export default Header;
