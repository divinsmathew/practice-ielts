import classNames from "classnames";
import styles from "./Modal.module.scss";

const Modal = ({ children, wrapperClass }) => (
    <div className={styles[classNames("modal", wrapperClass)]}>{children}</div>
);

Modal.Header = ({ children, wrapperClass }) => (
    <div className={styles[classNames("modal-header", wrapperClass)]}>
        {children}
    </div>
);

Modal.Body = ({ children, wrapperClass }) => (
    <div className={styles[classNames("modal-body", wrapperClass)]}>
        {children}
    </div>
);

Modal.Footer = ({ children, wrapperClass }) => (
    <div className={styles[classNames("modal-footer", wrapperClass)]}>
        {children}
    </div>
);

export default Modal;
