import React, { useState, useEffect } from "react";
import classes from "./RegisterForm.module.scss";
import {
    userSchema,
    otpSchema,
} from "../../../../../components/Validations/UserValidation";
import app from "../../../../../firebase";
import { useFormik, FormikProvider } from "formik";
import Confirmation from "../../Confirmation/Confirmation";
import { useDispatch } from "react-redux";
import { login } from "../../../../../redux/actions/auth_action";
const RegisterForm = () => {
    const [next, setNext] = useState(true);
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState();
    const [values, setValues] = useState();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setValues((oldState) => {
            const registerObj = { ...oldState };
            registerObj[e.target.name] = e.target.value;
            return registerObj;
        });
    };
    const handleChangeOTP = (e) => {
        setName({
            ...name,
            otp: e.target.value,
        });
    };
    useEffect(() => {
        window.recaptchaVerifier = new app.auth.RecaptchaVerifier(
            "sign-in-button",
            {
                size: "invisible",
                callback: (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    SignInSubmit();
                    console.log("Recaptca varified");
                },
                defaultCountry: "KG",
            }
        );
    }, []);

    const registerFormik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            password: "",
            repeatPassword: "",
        },
        validationSchema: userSchema,
        onSubmit: (values) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                SignInSubmit();
            }, 1000);
        },
    });
    const SignInSubmit = (e) => {
        // e.preventDefault();
        const phoneNumber = registerFormik.values.phone;
        console.log(registerFormik.values.phone);
        const appVerifier = window.recaptchaVerifier;
        app.auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                visible();
                window.confirmationResult = confirmationResult;
                console.log(confirmationResult);
                console.log("OTP has been sent");

                // ...
                appVerifier.clear();
            })
            .catch((error) => {
                // Error; SMS not sent
                // ...
                console.log(error);
                console.log("SMS not sent");
                // appVerifier.clear();
            });
    };
    const createOTP = async (e) => {
        const isValid = await otpSchema.isValid(name);
        console.log(isValid);
        successToggle();
    };
    const SubmitOTP = (e) => {
        e.preventDefault();
        const code = name.otp;
        console.log(code);
        window.confirmationResult
            .confirm(code)
            .then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(JSON.stringify(user));
                createOTP();

                // ...
            })
            .catch((error) => {
                console.error(error);
                // User couldn't sign in (bad verification code?)
                // ...
            });
    };
    let visible = () => {
        setNext(!next);
    };
    const successToggle = () => {
        setSuccess((prev) => !prev);
        dispatch(login());
    };
    return (
        <>
            {next ? (
                <>
                    <FormikProvider value={registerFormik}>
                        <form
                            className={classes.registerForm}
                            onSubmit={registerFormik.handleSubmit}
                        >
                            <div id="sign-in-button"></div>
                            <h3>Регистрация</h3>
                            <div className={classes.input_cont}>
                                <p>Ваше имя</p>
                                <input
                                    type="text"
                                    placeholder="введите имя"
                                    name="firstName"
                                    id="firstName"
                                    onChange={registerFormik.handleChange}
                                    onBlur={registerFormik.handleBlur}
                                    value={
                                        registerFormik.values.firstName || ""
                                    }
                                />
                                {registerFormik.touched.firstName &&
                                registerFormik.errors.firstName ? (
                                    <p className={classes.alert}>
                                        {registerFormik.errors.firstName}
                                    </p>
                                ) : null}
                            </div>

                            <div className={classes.input_cont}>
                                <p>Ваше Фамилия</p>
                                <input
                                    type="text"
                                    placeholder="введите фамилию"
                                    name="lastName"
                                    onChange={registerFormik.handleChange}
                                    onBlur={registerFormik.handleBlur}
                                    value={registerFormik.values.lastName || ""}
                                    id="lastName "
                                />
                                {registerFormik.touched.lastName &&
                                registerFormik.errors.lastName ? (
                                    <p className={classes.alert}>
                                        {registerFormik.errors.lastName}
                                    </p>
                                ) : null}
                            </div>

                            <div className={classes.input_cont}>
                                <p>Номер телефона</p>
                                <input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    placeholder="введите номер телефона"
                                    onChange={registerFormik.handleChange}
                                    onBlur={registerFormik.handleBlur}
                                    value={registerFormik.values.phone || ""}
                                />
                                {registerFormik.touched.phone &&
                                registerFormik.errors.phone ? (
                                    <p className={classes.alert}>
                                        {registerFormik.errors.phone}
                                    </p>
                                ) : null}
                            </div>
                            <div className={classes.input_cont}>
                                <p>Введите пароль</p>
                                <input
                                    id="password"
                                    type="text"
                                    name="password"
                                    placeholder="введите пароль"
                                    onChange={registerFormik.handleChange}
                                    onBlur={registerFormik.handleBlur}
                                    value={registerFormik.values.password || ""}
                                />
                                {registerFormik.touched.password &&
                                registerFormik.errors.password ? (
                                    <p className={classes.alert}>
                                        {registerFormik.errors.password}
                                    </p>
                                ) : null}
                            </div>
                            <div className={classes.input_cont}>
                                <p>Подтвердите пароль</p>
                                <input
                                    id="repeatPassword"
                                    type="text"
                                    name="repeatPassword"
                                    placeholder="подтвердите пароль"
                                    onChange={registerFormik.handleChange}
                                    onBlur={registerFormik.handleBlur}
                                    value={
                                        registerFormik.values.repeatPassword ||
                                        ""
                                    }
                                />
                                {registerFormik.touched.repeatPassword &&
                                registerFormik.errors.repeatPassword ? (
                                    <p className={classes.alert}>
                                        {registerFormik.errors.repeatPassword}
                                    </p>
                                ) : null}
                            </div>
                            <div className={classes.btn_cont}>
                                <span className={classes.span}>
                                    <input
                                        type="checkbox"
                                        name="checked"
                                        id="checked"
                                        className={classes.check}
                                    />
                                    <p>Согласен с условиями публичной оферты</p>
                                </span>
                                <button
                                    className={classes.btn}
                                    type="submit"
                                    id="sign-in-button"
                                >
                                    <p>Продолжить </p>
                                </button>
                            </div>
                        </form>
                    </FormikProvider>
                </>
            ) : (
                <div>
                    <Confirmation
                        handleChangeOTP={handleChangeOTP}
                        SubmitOTP={SubmitOTP}
                        success={success}
                        setSuccess={setSuccess}
                        // successToggle={successToggle}
                    />
                </div>
            )}
        </>
    );
};

export default RegisterForm;
