import React, { useState } from "react";
import classes from "./Confirmation.module.scss";
import Successfully from "../Successfully/Successfully";
const Confirmation = ({ SubmitOTP, handleChangeOTP, success }) => {
    // const [seconds, setSeconds] = useState(60);
    // const [isActive, setIsActive] = useState(false);
    // useEffect(() => {
    //     timer();
    // }, [seconds]);
    // const timer = (e) => {
    //     if (seconds > 0 && seconds <= 60) {
    //         setTimeout(() => setSeconds(seconds - 1), 1000);
    //     } else if (seconds !== 1) {
    //         clearInterval();
    //         setSeconds("");
    //     }
    // };
    // function toggle(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     setIsActive((prev) => !prev);
    // }

    return (
        <>
            {success ? (
                <form className={classes.confirmation} onSubmit={SubmitOTP}>
                    <div id="sign-in-button"></div>

                    <div className={classes.input_cont}>
                        <h5>Введите код подтвержения</h5>
                        <input
                            type="text"
                            placeholder="введите код"
                            onChange={handleChangeOTP}
                            name="otp"
                        />
                    </div>
                    <div className={classes.btn_cont}>
                        <button className={classes.btn_3}>
                            <p>Продолжить</p>
                        </button>

                        <button className={classes.btn_2}>
                            <p>Не пришло SMS?</p>
                        </button>
                        {/* {isActive && ( */}
                        <button className={classes.btn}>
                            <p>Отправить снова </p>
                            <p></p>
                        </button>
                        {/* )} */}
                    </div>
                </form>
            ) : (
                <>
                    <div>
                        <Successfully />
                    </div>
                </>
            )}
        </>
    );
};

export default Confirmation;
