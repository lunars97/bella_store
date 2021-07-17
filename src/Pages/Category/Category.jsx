import React, { useEffect, useState } from "react";
import classes from "./Category.module.scss";
import { Link } from "react-router-dom";
import styles from "../../styles/styles.module.scss";
import NavigationTitleAndSortPopup from "../../components/NavigationTitleAndSortPopup/NavigationTitleAndSortPopup/NavigationTitleAndSortPopup";
import { ProductCart, PagesBtn } from "../../components";
import arrow from "../../assets/image/arrow.png";
const categorySortItems = [
  { name: "По алфавиту", type: "alphabet", order: "desc" },
  { name: "По обновлению", type: "update", order: "desc" },
  { name: "По цене (высокая > низкая) ", type: "price", order: "desc" },
  { name: "По цене (низкая > высокая)", type: "name", order: "asc" },
];

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [visibleMultilevel, setVisibleMultilevel] = useState(false);
  // const [wobble, setWobble] = useState(0);
  let arr = [];
  for (let i = 0; i < 12; i++) {
    arr.push(i);
  }
  const [count, setCount] = React.useState(arr);

  const toggleMultilevel = () => {
    setVisibleMultilevel(!visibleMultilevel);
    // setWobble(1);
  };

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.breadCrumbs}>
          <Link to="/">
            <span className={styles.breadCrumbs__left_col}>
              Главная /&ensp;
            </span>
          </Link>
          <span className={styles.breadCrumbs__right_col}>
            Товары
          </span>
        </div>
      </div>
      <div className={classes.category_wrap}>
        <div className={classes.category_wrap__inner}>
          <div className={classes.inner__multilevel}>
            <button
              className={classes.multilevel__btn}
              onClick={toggleMultilevel}
            >
              <span className={classes.multilevel__btn__span}>
                Категории
              </span>
              <img
                src={arrow}
                alt="arrow_icon"
                className={classes.arrow_btn}
              // wobble={wobble}
              />
            </button>
            <div className={classes.multilevel_fullWidth}>
              <div className={classes.item}>
                <input
                  type="checkbox"
                  className={classes.id}
                  id="A"
                />
                <div className={classes.category_name_arrow}>
                  <label htmlFor="A">Верхняя одежда</label>
                  <img
                    src={arrow}
                    className={classes.arrow}
                    alt="arrow_icon"
                  />
                </div>
                <ul>
                  <li>
                    <Link className={classes.link} to="#">
                      Верхняя одежда
                    </Link>
                  </li>
                  <li>
                    <Link className={classes.link} to="#">
                      Верхняя одежда
                    </Link>
                  </li>
                  <li>
                    <Link className={classes.link} to="#">
                      Верхняя одежда
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={classes.item}>
                <input
                  type="checkbox"
                  className={classes.id}
                  id="B"
                />
                <div className={classes.category_name_arrow}>
                  <label htmlFor="B">Верхняя одежда</label>
                  <img
                    src={arrow}
                    className={classes.arrow}
                    alt="arrow_icon"
                  />
                </div>
                <ul>
                  <div className={classes.item}>
                    <input
                      type="checkbox"
                      id="B-A"
                      className={classes.id}
                    />
                    <div
                      className={
                        classes.category_name_arrow
                      }
                    >
                      <label htmlFor="B-A">
                        Футболки
                      </label>
                      <img
                        src={arrow}
                        className={classes.arrow}
                        alt="arrow_icon"
                      />
                    </div>
                    <ul>
                      <li>
                        <Link
                          className={classes.link}
                          to="#"
                        >
                          Верхняя одежда
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={classes.link}
                          to="#"
                        >
                          Верхняя одежда
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={classes.link}
                          to="#"
                        >
                          Верхняя одежда
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={classes.item}>
                    <input
                      type="checkbox"
                      id="B-B"
                      className={classes.id}
                    />
                    <div
                      className={
                        classes.category_name_arrow
                      }
                    >
                      <label htmlFor="B-B">Рубашки</label>
                      <img
                        src={arrow}
                        className={classes.arrow}
                        alt="arrow_icon"
                      />
                    </div>
                    <ul>
                      <li>
                        <Link
                          className={classes.link}
                          to="#"
                        >
                          Клетчатые
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={classes.link}
                          to="#"
                        >
                          Белые
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={classes.link}
                          to="#"
                        >
                          Цветные
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span
                    className={classes.category_name_arrow}
                  >
                    <Link className={classes.link} to="#">
                      Шорты
                    </Link>
                  </span>
                  <div className={classes.item}>
                    <input
                      type="checkbox"
                      className={classes.checkbox}
                      id="D-A"
                    />
                    <div
                      className={
                        classes.category_name_arrow
                      }
                    >
                      <label htmlFor="D-A">Платье</label>
                      <img
                        src={arrow}
                        className={classes.arrow}
                        alt="arrow_icon"
                      />
                    </div>
                    <ul>
                      <li>
                        <Link
                          className={classes.link}
                          to="#"
                        >
                          Верхняя одежда
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={classes.link}
                          to="#"
                        >
                          Верхняя одежда
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={classes.link}
                          to="#"
                        >
                          Верхняя одежда
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <li>
                      <Link
                        className={classes.link}
                        to="#"
                      >
                        Обувь
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={classes.link}
                        to="#"
                      >
                        Аксессуары
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            {visibleMultilevel && (
              <div className={classes.multilevel_toggle}>
                <div className={classes.item}>
                  <input
                    type="checkbox"
                    className={classes.id}
                    id="F"
                  />
                  <div
                    className={classes.category_name_arrow}
                  >
                    <label htmlFor="F">
                      Верхняя одежда
                    </label>
                    <img
                      src={arrow}
                      className={classes.arrow}
                      alt="arrow_icon"
                    />
                  </div>
                  <ul>
                    <li>
                      <Link
                        className={classes.link}
                        to="#"
                      >
                        Верхняя одежда
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={classes.link}
                        to="#"
                      >
                        Верхняя одежда
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={classes.link}
                        to="#"
                      >
                        Верхняя одежда
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={classes.item}>
                  <input
                    type="checkbox"
                    className={classes.id}
                    id="H-A"
                  />
                  <div
                    className={classes.category_name_arrow}
                  >
                    <label htmlFor="H-A">
                      Верхняя одежда
                    </label>
                    <img
                      src={arrow}
                      className={classes.arrow}
                      alt="arrow_icon"
                    />
                  </div>
                  <ul>
                    <div className={classes.item}>
                      <input
                        type="checkbox"
                        id="D-Z"
                        className={classes.id}
                      />
                      <div
                        className={
                          classes.category_name_arrow
                        }
                      >
                        <label htmlFor="D-Z">
                          Футболки
                        </label>
                        <img
                          src={arrow}
                          className={classes.arrow}
                          alt="arrow_icon"
                        />
                      </div>
                      <ul>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Верхняя одежда
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Верхняя одежда
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Верхняя одежда
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className={classes.item}>
                      <input
                        type="checkbox"
                        id="B-Y"
                        className={classes.id}
                      />
                      <div
                        className={
                          classes.category_name_arrow
                        }
                      >
                        <label htmlFor="B-Y">
                          Рубашки
                        </label>
                        <img
                          src={arrow}
                          className={classes.arrow}
                          alt="arrow_icon"
                        />
                      </div>
                      <ul>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Клетчатые
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Белые
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Цветные
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <span
                      className={
                        classes.category_name_arrow
                      }
                    >
                      <Link
                        className={classes.link}
                        to="#"
                      >
                        Шорты
                      </Link>
                    </span>
                    <div className={classes.item}>
                      <input
                        type="checkbox"
                        className={classes.checkbox}
                        id="D-C"
                      />
                      <div
                        className={
                          classes.category_name_arrow
                        }
                      >
                        <label htmlFor="D-C">
                          Платье
                        </label>
                        <img
                          src={arrow}
                          className={classes.arrow}
                          alt="arrow_icon"
                        />
                      </div>
                      <ul>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Верхняя одежда
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Верхняя одежда
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={classes.link}
                            to="#"
                          >
                            Верхняя одежда
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <li>
                        <Link
                          className={classes.link}
                          to="#"
                        >
                          Обувь
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={classes.link}
                          to="#"
                        >
                          Аксессуары
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className={classes.category_wrap__container}>
            <div className={classes.popup_container}>
              <div
                className={
                  classes.category_wrap__container__secondary
                }
              >
                <div
                  className={
                    classes.category_wrap__container__inner
                  }
                >
                  <NavigationTitleAndSortPopup
                    item={categorySortItems}
                  />
                </div>
              </div>
              <div
                className={
                  classes.category_wrap__container__product
                }
              >
                {count.map((item) => {
                  return <ProductCart key={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.pageWrapper}>
        <PagesBtn />
      </div>
    </div>
  );
};

export default Category;
