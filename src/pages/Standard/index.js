import React, { useState } from 'react';
import style from './standard.module.css';
import Header from '../../components/Header';
import Actions from '../../components/Actions';
import AddStandard from '../../components/AddStandard';
import Button from '../../components/Button';

const Standard = () => {
  const [standardList, setStandardList] = useState({
    1: {
      input: '',
      next: {},
    },
  });

  const onInputChange = (index, event) => {
    const updatedList = { ...standardList };
    Object.keys(updatedList).forEach((list, currentIndex) => {
      if (index === currentIndex) {
        updatedList[list].input = event.target.value;
      }
    });

    setStandardList(updatedList);
  }

  const onIndent = () => {

  };

  const onOutdent = () => {

  };

  const onMove = () => {

  };

  const onDelete = () => {

  };

  return (
    <div className={style.container}>
      <Header headerTitle='Mathematics' />
      <div className={style.actionsAndStandard}>
        <div className={style.actions}>
          <Actions title='Actions' subTitle='Move, indent, Outdent, Delete' />
        </div>
        <div className={style.standard}>
          <Actions title='Standard' subTitle='The text of the standard' />
        </div>
      </div>
      <div className={style.content}>
        {Object.keys(standardList).map((standard, index) => (
          <AddStandard
            onIndent={onIndent}
            onOutdent={onOutdent}
            onMove={onMove}
            onDelete={onDelete}
            standardInputValue={standard.input}
            onStandardInputChange={(event) => onInputChange(index, event)}
            index={index}
            key={index}
          />
        ))}
      </div>
      <div className={style.button}>
        <Button
          type='primary'
          text='Add a Standard'
          onClick={() => {
            const newList = { ...standardList };
            const length = Object.keys(newList).length;
            newList[length + 1] = {
              input: '',
              next: {},
            };
            setStandardList(newList);
          }}
        />
      </div>
    </div>
  );
};

export default Standard;
