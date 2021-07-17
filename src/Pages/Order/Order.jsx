import classes from "./Order.module.scss";
import img1 from "../../assets/image/order.png";
const Order = () => {
  return (
    <div className={classes.order}>
      <div className={classes.bigCont}>
        <h2>Заказ 100002 / Доставлено</h2>
        <div className={classes.first__cont}>
          <div className={classes.card__cont}>
            <div>
              <img alt="loading.." src={img1} />
            </div>
            <div className={classes.text__cont}>
              <h5> Платье с сетчатами рукавами</h5>
              <p>
                Артикул <strong>PL984/dakota</strong>{" "}
              </p>
              <p>
                Размер: <strong>42-55</strong>{" "}
              </p>
              <p>
                {" "}
                Цвет: <strong>Бежевый</strong>{" "}
              </p>
              <p>
                Количество линеек: <strong>12</strong>
              </p>
            </div>
          </div>
          <div className={classes.second__cont}>
            <p>7229 с.</p>
            <div className={classes.p}>9229 с.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
