import React from "react";
import style from "./BasketCart.module.scss";
import basketCartImg from "../../assets/image/basketCartImg.png";

const BasketCart = () => {
    return (
        <>
            <div className={style.cart}>
                <div className={style.cart__mother}>
                    <div className={style.cart__blockOne}>
                        <img src={basketCartImg} alt="" />
                    </div>
                    <div className={style.cart__blockTwo}>
                        <h1 className={style.cart__blockTwo__title}>
                            Платье с сетчатыми рукавами
                        </h1>
                        <p className={style.cart__blockTwo__size}>
                            Размер: <span> 36 35</span> {/* 36 35*/}
                        </p>
                        <p className={style.cart__blockTwo__color}>
                            Цвет: <span> Бежевый</span> {/* Бежевый */}
                        </p>
                        <div className={style.cart__blockTwo__btns}>
                            <button className={style.cart__blockTwo__btnMinus}>
                                -
                            </button>
                            <p className={style.cart__blockTwo__btnText}>
                                20 {/* 20 */}
                            </p>
                            <button className={style.cart__blockTwo__btnMPlus}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style.cart__blockThree}>
                    <div className={style.cart__blockThree__close}>
                        <h1>&times;</h1>
                    </div>
                    <div className={style.cart__blockThree__price}>
                        <p> 7222 c. {/*  7222 c. */} </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BasketCart;
