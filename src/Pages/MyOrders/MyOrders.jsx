import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles.module.scss";
import classes from "./MyOrders.module.scss";
import summer from "../../assets/image/summer.png";
import { PagesBtn } from "../../components";
const MyOrders = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [hideButton, setHideButton] = useState(true);
  const [hideButton2, setHideButton2] = useState(true);
  const openImages = () => {
    setVisible((prev) => !prev);
    setHideButton(!hideButton);
  };
  const openSentImages = () => {
    setVisible2((prev) => !prev);
    setHideButton2(!hideButton2);
  };
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.breadCrumbs}>
          <Link to="/" className={styles.breadCrumbs__left_col}>
            <span>Главная /&ensp;</span>
          </Link>
          <span className={styles.breadCrumbs__right_col}>
            Мои заказы
          </span>
        </div>
      </div>

      <div className={classes.main_container}>
        <section className={classes.main_container__text}>
          <span>Мои заказы</span>
        </section>
        <div className={classes.main_container__inner}>
          <div className={classes.card_wrapper}>
            <div className={classes.card_wrapper__all_images}>
              <div className={classes.all_images}>
                <section
                  className={classes.all_images__order_num}
                >
                  <span>Заказ №2032e231w </span>
                  <span className={classes.order_status}>
                    Доставлено
                  </span>
                </section>
                <section>
                  <span className={classes.date}>
                    24/03/21
                  </span>
                </section>
              </div>

              <div
                className={
                  classes.card_wrapper__all_images__images
                }
              >
                <div
                  className={
                    classes.card_wrapper__all_images__images__one
                  }
                >
                  <img src={summer} alt="" />
                </div>
                <div
                  className={
                    classes.card_wrapper__all_images__images__one
                  }
                >
                  <img src={summer} alt="" />
                </div>
                <div
                  className={
                    classes.card_wrapper__all_images__images__one
                  }
                >
                  <img src={summer} alt="" />
                </div>
                <div
                  className={
                    classes.card_wrapper__all_images__images__one
                  }
                >
                  <img src={summer} alt="" />
                </div>
                {hideButton && (
                  <button
                    onClick={openImages}
                    className={classes.btn}
                  >
                    <p>+10</p>
                  </button>
                )}
                {visible && (
                  <>
                    <div
                      className={
                        classes.card_wrapper__all_images__images__one
                      }
                    >
                      <img src={summer} alt="" />
                    </div>
                    <div
                      className={
                        classes.card_wrapper__all_images__images__one
                      }
                    >
                      <img src={summer} alt="" />
                    </div>
                    <div
                      className={
                        classes.card_wrapper__all_images__images__one
                      }
                    >
                      <img src={summer} alt="" />
                    </div>
                    <div
                      className={
                        classes.card_wrapper__all_images__images__one
                      }
                    >
                      <img src={summer} alt="" />
                    </div>
                  </>
                )}
              </div>
              <section className={classes.price_section_wrapper}>
                <span className={classes.price_section}>
                  23200c
                </span>
              </section>
            </div>
          </div>
          <div className={classes.card_wrapper}>
            <div className={classes.card_wrapper__all_images}>
              <div className={classes.all_images}>
                <section
                  className={classes.all_images__order_num}
                >
                  <span>Заказ №2032e231w </span>
                  <span className={classes.order_status}>
                    Доставлено
                  </span>
                </section>
                <section>
                  <span className={classes.date}>
                    24/03/21
                  </span>
                </section>
              </div>

              <div
                className={
                  classes.card_wrapper__all_images__images
                }
              >
                <div
                  className={
                    classes.card_wrapper__all_images__images__one
                  }
                >
                  <img src={summer} alt="" />
                </div>
                <div
                  className={
                    classes.card_wrapper__all_images__images__one
                  }
                >
                  <img src={summer} alt="" />
                </div>
                <div
                  className={
                    classes.card_wrapper__all_images__images__one
                  }
                >
                  <img src={summer} alt="" />
                </div>
                <div
                  className={
                    classes.card_wrapper__all_images__images__one
                  }
                >
                  <img src={summer} alt="" />
                </div>
                {hideButton2 ? (
                  <button
                    onClick={openSentImages}
                    className={classes.btn}
                  >
                    <p>+10</p>
                  </button>
                ) : null}
                {visible2 && (
                  <>
                    <div
                      className={
                        classes.card_wrapper__all_images__images__one
                      }
                    >
                      <img src={summer} alt="" />
                    </div>
                    <div
                      className={
                        classes.card_wrapper__all_images__images__one
                      }
                    >
                      <img src={summer} alt="" />
                    </div>
                    <div
                      className={
                        classes.card_wrapper__all_images__images__one
                      }
                    >
                      <img src={summer} alt="" />
                    </div>
                    <div
                      className={
                        classes.card_wrapper__all_images__images__one
                      }
                    >
                      <img src={summer} alt="" />
                    </div>
                  </>
                )}
              </div>
              <section className={classes.price_section_wrapper}>
                <span className={classes.price_section}>
                  23200c
                </span>
              </section>
            </div>
          </div>
          <PagesBtn />
        </div>
      </div>
    </>
  );
};

export default MyOrders;
