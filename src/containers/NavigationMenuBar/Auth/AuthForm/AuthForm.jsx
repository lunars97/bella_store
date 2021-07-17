import React from "react";
import { Link } from "react-router-dom";
import classes from "./AuthForm.module.scss";

const AuthForm = () => {
    return (
        <form className={classes.AuthForm}>
            <h1>BELLA</h1>
            <div className={classes.input_cont}>
                <h5>ВХОД</h5>
                <input
                    type="phone"
                    id="password"
                    name="password"
                    placeholder="Введите пароль"
                />
            </div>
            <div className={classes.btn_cont}>
                <button className={classes.btn_reg} type="submit">
                    <p>войти </p>
                </button>
                <Link to="register">
                    <button className={classes.btn_2}>
                        Зарегистрироваться
                    </button>
                </Link>
            </div>
        </form>
    );
};

export default AuthForm;
