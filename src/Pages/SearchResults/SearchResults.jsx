import React from "react";
import { Link } from "react-router-dom";
import classes from "./SearchResults.module.scss";
import { ProductCart, PagesBtn } from "../../components";
import styles from "../../styles/styles.module.scss";
const SearchResults = () => {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    arr.push(i);
  }

  const [count, setCount] = React.useState(arr);
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.breadCrumbs}>
          <Link to="/">
            <span className={styles.breadCrumbs__left_col}>
              Главная /&ensp;
            </span>
          </Link>
          <Link>
            <span className={styles.breadCrumbs__right_col}>
              Результаты поиска
            </span>
          </Link>
        </div>
      </div>
      <div className={classes.main_container}>
        <div className={classes.main_container__inner}>
          <h4>Результаты поиска</h4>
          <p>Найдено 256 моделей</p>
          <div className={classes.main_container__inner__cards}>
            <div className={classes.wrap__container}>
              {count.map((item) => {
                return <ProductCart key={item} />;
              })}
            </div>
          </div>
          <PagesBtn />
        </div>
        {/* <h4>Ничего не найдено</h4> */}
      </div>
    </>
  );
};

export default SearchResults;
