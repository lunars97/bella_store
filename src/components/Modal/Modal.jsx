import React, { useRef } from "react";
import styles from "../Modal/Modal.module.scss";
import bella_logo from "../../assets/image/bella_small.png";

export const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    return showModal ? (
        <div
            className={styles.modal_container}
            ref={modalRef}
            onClick={closeModal}
        >
            <div className={styles.modal_container__inner}>
                <img src={bella_logo} alt="bella_logo" />
                <span className={styles.modal_thanks}>
                    Спасибо что подписались!
                </span>
                <button
                    className={styles.inner_btn}
                    onClick={() => setShowModal((prev) => !prev)}
                >
                    Хорошо
                </button>
            </div>
        </div>
    ) : null;
};
