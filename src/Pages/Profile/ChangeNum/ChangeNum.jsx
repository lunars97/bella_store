import React, { useState } from 'react';
import classes from '../../../containers/NavigationMenuBar/Auth/Confirmation/Confirmation.module.scss'

const ChangeNum = () => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  function validate(values) {
    let errors = {};
    let valid = values.fullName && values.phone;

    if (!valid) {
      errors.valid = "Не заполнены обязательные поля";
    }
    return errors;
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
  }

  return (
    <>
      <form className={classes.Confirmation} > {/* onSubmit={SubmitOTP} */}
        <div id="sign-in-button"></div>
        <h1>BELLA</h1>
        <div className={classes.input_cont}>
          <h5>СМЕНА НОМЕРА</h5>
          <input
            type="tel"
            placeholder="введите код подтверждения"
            // onChange={props.handleChange}
            name="otp"
          />
        </div>
        <div className={classes.btn_cont}>
          <button className={classes.btn_3} onClick={handleSubmit}>
            <p>Продолжить</p>
          </button>

          <button className={classes.btn_2}>
            <p>Не пришло SMS?</p>
          </button>
          {/* {isActive && ( */}
          <button className={classes.btn}>
            <p>Отправить снова </p>
            <p></p>
          </button>
          {errors.valid && (
            <p className={classes.alert}>{errors.valid}</p>
          )}
          {/* )} */}
        </div>
      </form>
    </>
  );
};

export default ChangeNum;