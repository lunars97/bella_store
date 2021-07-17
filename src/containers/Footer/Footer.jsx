import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";
import ok from "../../assets/image/ok.svg";
import vk from "../../assets/image/vk.svg";
import inst from "../../assets/image/inst.svg";
import fb from "../../assets/image/fb.svg";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.links}>
        <ul>
          <h6>Покупателям</h6>
          <li>
            <Link className={classes.link} to="/">
              Как сделать заказ
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/">
              Способы оплаты
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/">
              Доставка
            </Link>
          </li>
        </ul>
        <ul>
          <h6>Покупателям</h6>
          <li>
            <Link className={classes.link} to="/">
              Возврат товара
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/">
              Вопросы и ответы
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/">
              Публичная оферта
            </Link>
          </li>
        </ul>
        <ul>
          <h6>Компания</h6>
          <li>
            <Link className={classes.link} to="/">
              О нас
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/">
              Реквизиты
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/">
              Контакты
            </Link>
          </li>
        </ul>
        <ul>
          <h6>Контакты</h6>
          <li>+996 778 898 776</li>
          <li>mail@zulya.kg</li>
          <li>г.Бишкек, Чуй 23</li>
        </ul>
      </div>
      <div className={classes.otherInfo}>
        <small>Developed by Sunrise Studio 2021</small>
        <div>
          <a href="https://ok.ru/dk?st.cmd=anonymMain&st.redirect=%2Fguests%3Fst.layer.cmd%3DPopLayerClose">
            <img alt="icon" src={ok} />
          </a>
          <a href="https://vk.com/?lang=en">
            <img alt="icon" src={vk} />
          </a>
          <a href="https://www.instagram.com/">
            <img alt="icon" src={inst} />
          </a>
          <a href="https://www.facebook.com/">
            <img alt="icon" src={fb} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
