import React from "react";
import style from "./Basket.module.scss";
// import basketEmpty from "../../assets/ProductImg/basketEmpty.png";
import BasketCart from "../../components/BasketCart/BasketCart";

const Basket = ({ setBasket, basket, open, closeDrawer }) => {
    return (
        <>
            {basket ? (
                <div className={style.mainModal}>
                    <div className={style.mainModal__inner}>
                        <div className={style.mainModal__inner__container}>
                            <BasketCart />
                        </div>
                    </div>
                </div>
            ) : //     <div className={style.modal}>
            //         <div className={style.modal__inner}>
            //             <div className={style.modal__inner__container}>
            //                 <img src={basketEmpty} alt="" />
            //                 <h1>Ваша корзина пуста</h1>
            //                 <button>Продолжить покупки</button>
            //             </div>
            //         </div>
            //    </div>
            null}
        </>
    );
};

export default Basket;
