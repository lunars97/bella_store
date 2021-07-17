import React from "react";
import classes from "./Hit.module.scss";
import { ProductCart } from "../../components";
import { PagesBtn } from "../../components";
const Hit = () => {
    let arr = [];
    for (let i = 0; i < 8; i++) {
        arr.push(i);
    }

    const [count, setCount] = React.useState(arr);
    return (
        <div className={classes.favorite_wrap}>
            <div className={classes.favorite_wrap__inner}>
                <h1 className={classes.hit}>Хит Продаж</h1>
                <div className={classes.favorite_wrap__container}>
                    {count.map((item) => {
                        return <ProductCart key={item} />;
                    })}
                </div>
                <PagesBtn />
            </div>
        </div>
    );
};

export default Hit;
