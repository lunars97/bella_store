import classes from "./Nav.module.scss";
import search_icon from "../../../../assets/image/search-icon.svg";
import like_icon from "../../../../assets/image/fav-icon.svg";
import basket_icon from "../../../../assets/image/bag.svg";
import profile_icon from "../../../../assets/image/prof-icon.svg";
import logo from "../../../../assets/image/bella.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import RegisterForm from "../../Auth/Register/RegisterForm/RegisterForm";
import { useState } from "react";
import Basket from "../../../../Pages/Basket/Basket";

const Nav = ({ search, profile, register }) => {
    const isAuthed = useSelector((state) => state.auth);

    function log() {
        if (isAuthed) {
            profile();
        }
    }

    const [basket, setBasket] = useState(false);
    let handleBasketClick = () => {
        setBasket(!basket);
    };

    return (
        <>
            <nav className={classes.Nav}>
                <div className={classes.big__cont}>
                    <div className={classes.drawerItems}>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    activestyle={{ color: "#965815A" }}
                                    exact={true}
                                >
                                    Товары
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about-us"
                                    activestyle={{ color: "#965815" }}
                                >
                                    О нас
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/news"
                                    activestyle={{ color: "#965815" }}
                                >
                                    Новости
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/info/delivery"
                                    activestyle={{ color: "#965815" }}
                                >
                                    Доставка
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/info/contacts"
                                    activestyle={{ color: "#965815" }}
                                >
                                    Контакты
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className={classes.logoDiv}>
                        <img alt="logo" src={logo} />
                    </div>
                    <div>
                        <ul>
                            <li>
                                <span
                                    className={classes.search}
                                    to="/"
                                    onClick={search}
                                >
                                    <img alt="icon" src={search_icon} />
                                    <span>Поиск</span>
                                </span>
                            </li>
                            <li>
                                <NavLink
                                    className={classes.saved}
                                    to="/saved"
                                    activestyle={{ color: "#965815" }}
                                >
                                    <img alt="icon" src={like_icon} />
                                    <span>Избранное</span>
                                </NavLink>
                            </li>
                            <li>
                                <span
                                    className={classes.profile}
                                    to="/profile"
                                    onClick={log}
                                >
                                    <img alt="icon" src={profile_icon} />
                                    <span onClick={register}>
                                        {isAuthed ? "Профиль" : "Войти"}
                                    </span>
                                </span>
                            </li>
                            <li>
                                <span
                                    onClick={handleBasketClick}
                                    className={classes.basket}
                                    activestyle={{ color: "#965815" }}
                                >
                                    <img alt="icon" src={basket_icon} />
                                    <span>Корзина</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Basket setBasket={setBasket} basket={basket} />
            <div style={{ display: "none" }}>
                <RegisterForm />
            </div>
        </>
    );
};
export default Nav;
