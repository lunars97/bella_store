import React from "react";
import classes from "../PagesNumber/PagesNumber.module.scss";
const PagesNumber = () => {
    return (
        <div className={classes.main_container}>
            <div className={classes.btn_wrapper}>
                <button className={classes.btn_wrapper__prevBtn}>
                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                </button>
                <span>Страница</span>
                <button className={classes.btn_wrapper__order}> 1 </button>
                из 85
                <button className={classes.btn_wrapper__nextBtn}>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
};

export default PagesNumber;
