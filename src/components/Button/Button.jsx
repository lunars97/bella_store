import React from 'react';
import classes from '../../styles/styles.module.scss';

const Button = () => {
  return (
    <div className={classes.main__btn_wrap}>
      <div className={classes.btn_wrap}>
        <button className={classes.btn}>
          Смотреть все &ensp;{' '}
          <i className="fa fa-chevron-right" aria-hidden="true">
          </i>
        </button>
      </div>
    </div>
  );
};

export default Button;
