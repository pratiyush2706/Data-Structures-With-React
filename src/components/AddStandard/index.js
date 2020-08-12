import React from 'react';
import style from './addStandard.module.css';
import Indent from '../../assets/forward.svg';
import Outdent from '../../assets/backward.svg';
import Move from '../../assets/sort.svg';
import Delete from '../../assets/bin.svg';
import InputBox from '../InputBox';

const AddStandard = ({ onIndent, onOutdent, onMove, onDelete, standardInputValue, onStandardInputChange }) => {
  const images = [
    {
      imgSrc: Indent,
      onClick: onIndent,
    },
    {
      imgSrc: Outdent,
      onClick: onOutdent,
    },
    {
      imgSrc: Move,
      onClick: onMove,
    },
    {
      imgSrc: Delete,
      onClick: onDelete,
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.actions}>
        {images.map(image => (
          <img key={image.imgSrc} src={image.imgSrc} alt={image.alt} onClick={image.onClick} className={style.image} />
        ))}
      </div>
      <div className={style.input}>
        <InputBox
          isValid
          type="text"
          label="standard"
          name="standard"
          value={standardInputValue}
          onChange={(event) => onStandardInputChange(event)}
          style={{
            width: '100%',
            color: 'rgba(0,0,0,1)',
            fontWeight: '600',
            fontSize: '1.5rem',
          }}
          placeholder="Type standard here(e.g. Numbers)"
          autoComplete="off"
          maxLength={30}
        />
      </div>
    </div>
  );
};

export default AddStandard;
