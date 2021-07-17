import React from "react";
import money from "../../assets/image/money.png";
import truck from "../../assets/image/truck.svg";
import shop from "../../assets/image/shop.svg";
import support from "../../assets/image/support.svg";
import classes from "../Advantages/Advantages.module.scss";

const Advantages = () => {
    return (
        <div className={classes.main_advantages}>
            <div className={classes.main_advantages__wrapper}>
                <div className={classes.wrapper__card}>
                    <img src={money} alt="money_icon" />
                    <h4>Возможность оплаты при получении</h4>
                    <p>
                        Мы предлагаем возможность оплаты наложенным платежом
                        (при получении)
                    </p>
                </div>
                <div className={classes.wrapper__card}>
                    <img src={truck} alt="money_icon" />
                    <h4>Гарантия обмена и возврата товара</h4>
                    <p>
                        100% гарантия возврата товара - 14 дней на возврат, без
                        скандалов и истерик.
                    </p>
                </div>
                <div className={classes.wrapper__card}>
                    <img src={shop} alt="money_icon" />
                    <h4>Акции и бонусы для покупателей</h4>
                    <p>
                        Мы предлагаем возможность оплаты наложенным платежом
                        (при получении)
                    </p>
                </div>
                <div className={classes.wrapper__card}>
                    <img src={support} alt="money_icon" />
                    <h4>Профессиональная консультация</h4>
                    <p>
                        Промокоды со скидками для постоянных клиентов, акции на
                        новые позиции
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
