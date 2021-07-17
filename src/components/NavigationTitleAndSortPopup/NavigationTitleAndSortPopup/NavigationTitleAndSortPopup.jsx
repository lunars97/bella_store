import React from "react";
import classes from "./NavigationTitleAndPopup.module.scss";
import { SortPopup, PageName } from "./index";

const NavigationTitleAndSortPopup = ({ item }) => {
    return (
        <div className={classes.navigation_title_sort_wrap}>
            <div className={classes.sortPopUp}>
                <SortPopup item={item} />
            </div>
            <div>
                <PageName />
            </div>
        </div>
    );
};

export default NavigationTitleAndSortPopup;
