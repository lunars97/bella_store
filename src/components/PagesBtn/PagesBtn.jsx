import React from "react";
import classes from "./PagesBtn.module.scss";
import prevBtn from "../../assets/image/prevBtn.svg";
import nextBtn from "../../assets/image/nextBtn.png";
// import jsonPlaceholder from "../../adapters/axios.config";
// import { useEffect } from "react";
const PagesBtn = () => {
    // useEffect(() => {
    //     jsonPlaceholder("/posts").then((res) => console.log(res));
    // }, []);
    return (
        <div className={classes.main_container}>
            <div className={classes.btn_wrapper}>
                <button className={classes.btn_wrapper__prevBtn}>
                    <img src={prevBtn} alt="previous_button" />
                </button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className={classes.btn_wrapper__nextBtn}>
                    <img src={nextBtn} alt="next_button" />
                </button>
            </div>
        </div>
    );
};

export default PagesBtn;
