import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Favourites.module.scss";
import styles from "../../styles/styles.module.scss";
import { ProductCart } from "../../components";
import NavigationTitleAndSortPopup from "../../components/NavigationTitleAndSortPopup/NavigationTitleAndSortPopup/NavigationTitleAndSortPopup";
import { PagesBtn } from "../../components";
const favoriteSortItems = [
    { name: "По обновлению", type: "update", order: "desc" },
    { name: "По цене (высокая > низкая) ", type: "price", order: "desc" },
    { name: "По цене (низкая > высокая)", type: "name", order: "asc" },
];

const Favourites = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    let arr = [];
    for (let i = 0; i < 12; i++) {
        arr.push(i);
    }

    const [count, setCount] = React.useState(arr);

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.breadCrumbs}>
                    <Link to="/" className={styles.breadCrumbs__left_col}>
                        <span>Главная /&ensp;</span>
                    </Link>
                    <span className={styles.breadCrumbs__right_col}>
                        Избранное
                    </span>
                </div>
            </div>
            <div className={classes.favorite_wrap}>
                <div className={classes.favorite_wrap__inner}>
                    <div className={classes.favorite_wrap__header}>
                        <span>Избранное</span>
                        <NavigationTitleAndSortPopup item={favoriteSortItems} />
                    </div>
                    <div className={classes.favorite_wrap__container}>
                        {count.map((item) => {
                            return <ProductCart key={item} />;
                        })}
                    </div>
                    <PagesBtn />
                </div>
            </div>
        </>
    );
};

export default Favourites;
