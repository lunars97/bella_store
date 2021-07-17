import React from "react";
import classes from "../ColorSelection/ColorSelection.module.scss";
import productJSON from "../../product";
const ColorSelection = () => {
    return productJSON.products.map((item, index) => (
        <div className={classes.main__colorsDiv} key={item.id} item={item}>
            <span className={classes.main__colorsHover}>
                <span
                    className={classes.main__colors}
                    style={{ background: item.color }}
                >
                    {item.colors[0].slug}
                </span>
            </span>
        </div>
    ));
};

export default ColorSelection;
