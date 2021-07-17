import React, { useRef } from "react";
import styles from "../ModalOrder/ModalOrder.module.scss";
import bella_logo from "../../assets/image/bella_small.png";
const ModalOrder = ({ showModal, setShowModal }) => {
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
                    Поздравляем! Ваш заказ успешно
                    <br /> оформлен. В ближайшее время мы <br /> обязательно
                    свяжемся с вами!
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
export default ModalOrder;
