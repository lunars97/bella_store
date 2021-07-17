import React from 'react';
import classes from './Modal.module.scss';
import bella from "../../assets/image/bella.svg"

const Modal = () => {
  return (
    <form className={classes.modal}>
      <img src={bella} alt="loading.." />
      <div className={classes.input_cont}>
        <h5>Изменение номера телефона</h5>
        <input
          type="phone"
          placeholder="укажите новый номер"
          name="phone"
          required
          pattern="0[0-9]{9}|+[0-9]{13}"
          minLength="13"
        />
      </div>
      <div className={classes.btn_cont}>
        <button className={classes.btn_3}>
          <p>Продолжить</p>
        </button>
        <input
        className={classes.inp}
          type="phone"
          placeholder="Введите код подтверждения"
          name="phone"
          required
          pattern="0[0-9]{9}|+[0-9]{13}"
          minLength="13"
        />

        <button className={classes.btn_2}>
          <p>Не пришло SMS?</p>
        </button>
        <button className={classes.btn}>
          <p>Отправить снова </p>
          <p>0:59</p>
        </button>
        
        <div className={classes.btn__cont}>
          <button className={classes.btn__cansel}>
            отменить
          </button>
          <button className={classes.btn__save}>
          сохранить
          </button>
        </div>
      </div>
    </form>
  );
};

export default Modal;
