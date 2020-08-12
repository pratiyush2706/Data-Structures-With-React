import React from 'react';
import style from './actions.module.css';

const Actions = ({ title, subTitle }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        {title}
      </div>
      <div className={style.subtitle}>
        {subTitle}
      </div>
    </div>
  );
};

export default Actions;
