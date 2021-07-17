import React from "react";
import { Link } from "react-router-dom";
import { PagesNumber, Collection } from "../../components";
import styles from "../../styles/styles.module.scss";
import classes from "../CollectionPage/CollectionPage.module.scss";
const CollectionPage = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.breadCrumbs}>
          <Link to="/" className={styles.breadCrumbs__left_col}>
            <span>Главная /&ensp;</span>
          </Link>
          <span className={styles.breadCrumbs__right_col}>
            Коллекция
          </span>
        </div>
      </div>
      <div className={classes.header}>
        <h4>Коллекция</h4>
      </div>
      <div className={classes.collection_wrapper}>
        <div>
          <Collection />
        </div>
        <div className={classes.collection_wrapper__page}>
          <PagesNumber />
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
