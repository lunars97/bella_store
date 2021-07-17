import { NavLink } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Drawer.module.scss";
import user from "../../../../assets/image/prof-icon.svg";
import { useState } from "react";
const Drawer = ({ open, closeDrawer }) => {
    const drawerClasses = [
        classes.content,
        open ? classes.open : classes.close,
    ];

    // const drawerClsn = clsn({
    //     [classes.content]: open
    // })

    const [profile, setProfile] = useState(false);

    let handleProfile = () => {
        setProfile(!profile);
    };

    return (
        <div className={classes.Drawer}>
            <Backdrop show={open} click={closeDrawer} />
            <div className={drawerClasses.join(" ")}>
                <ul className={classes.ul}>
                    <div className={classes.links}>
                        <li>
                            <NavLink to="/category">Товары</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us">О нас</NavLink>
                        </li>
                        <li>
                            <NavLink to="/news">Новости</NavLink>
                        </li>
                        <li>
                            <NavLink to="/info/delivery">Доставка</NavLink>
                        </li>
                        <li>
                            <NavLink to="/info/contacts">Контакты</NavLink>
                        </li>
                        <li>
                            <NavLink to="/saved">Избранное</NavLink>
                        </li>
                    </div>
                    <div>
                        <div
                            className={classes.cont}
                            style={{
                                position: "realtive",
                                marginRight: "0",
                            }}
                        >
                            {profile ? (
                                <>
                                    <div className={classes.profile}>
                                        <img alt="profile" src={user} />
                                        <div className={classes.block}>
                                            <li>
                                                <NavLink to="/profile">
                                                    Профиль
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/"
                                                    onClick={handleProfile}
                                                >
                                                    выйти
                                                </NavLink>
                                            </li>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className={classes.profile}>
                                    <img
                                        src={user}
                                        alt="logo"
                                        onClick={handleProfile}
                                    />
                                    <span
                                        className={classes.center}
                                        onClick={handleProfile}
                                    >
                                        Войти
                                    </span>{" "}
                                </div>
                            )}
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Drawer;
