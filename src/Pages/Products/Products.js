import React from "react";
import style from "./Products.module.scss";
import lock from "../../assets/lock_nextImg/lock.png";
import VerticalSlider from "../../components/VerticalSlider/VerticalSlider";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
// import ProductImg from '../../assets/ProductImg/vertical1.png'
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

const Products = () => {
  return (
    <>
      <BreadCrumbs />

      <div className={style.w_100}>
        <div className={style.main}>
          <div className={style.main__carousel}>
            <VerticalSlider />
          </div>

          <div className={style.main__descriptions}>
            <h1 className={style.main__desTitle}>
              Платье с сетчатыми рукавами
            </h1>
            <p>
              Артикул:{" "}
              <span className={style.main__span}>
                Платье PL984/dakota
              </span>{" "}
            </p>
            <p>
              Количество в линейке:
              <span className={style.main__span}>1</span>
            </p>
            <div className={style.main__colorsDiv}>
              Цвет:
              <span className={style.main__colorsHover}>
                <span
                  className={style.main__colors}
                  style={{ background: "#bdd4d1" }}
                ></span>
              </span>
              <span className={style.main__colorsHover}>
                <span
                  className={style.main__colors}
                  style={{ background: "#c5e7ab" }}
                ></span>
              </span>
              <span className={style.main__colorsHover}>
                <span
                  className={style.main__colors}
                  style={{ background: "#ab844a" }}
                ></span>
              </span>
              <span className={style.main__colorsHover}>
                <span
                  className={style.main__colors}
                  style={{ background: "#b9bff8" }}
                ></span>
              </span>
              <span className={style.main__colorsHover}>
                <span
                  className={style.main__colors}
                  style={{ background: "#ECECEC" }}
                ></span>
              </span>
              <span className={style.main__colorsHover}>
                <span
                  className={style.main__colors}
                  style={{ background: "#909091" }}
                ></span>
              </span>
              <span className={style.main__colorsHover}>
                <span
                  className={style.main__colors}
                  style={{ background: "#ff8787" }}
                ></span>
              </span>
            </div>
            <div className={style.main__priceDiv}>
              <h2 className={style.main__price}> 7229 сом</h2>
              <h2 className={style.main__xPrice}> 7229 сом</h2>
            </div>
            <h1 className={style.main__aboutProduct}>О товаре</h1>
            <p className={style.main__span}>
              За последние 35 лет бренд Bonucci из обычного
              производителя одежды превратился в широко узнаваемую
              марку, а его продукция – в синоним высокого качества и
              актуального стиля.
            </p>
            <div className={style.main__typeOfProduct}>
              <div className={style.main__typeOfProductDiv}>
                <p>
                  Зазмерный ряд:{" "}
                  <span className={style.main__span}>42-50</span>
                </p>
                <p>
                  Длина:{" "}
                  <span className={style.main__span}>113 См</span>
                </p>
              </div>
              <div className={style.main__typeOfProductDiv}>
                <p>
                  Состав ткани:{" "}
                  <span className={style.main__span}>
                    Полиэстер
                  </span>
                </p>
                <p>
                  Фасон :{" "}
                  <span className={style.main__span}>
                    А-Силуэт
                  </span>
                </p>
              </div>
            </div>
            <button className={style.main__addToBasketBtn}>
              <img src={lock} alt="lock" />
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
      <ProductCarousel />
    </>
  );
};

export default Products;
