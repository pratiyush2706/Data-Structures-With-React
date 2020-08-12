import React from 'react';
import buttonStyle from './button.module.css';

const Button = ({
  text, type, style, ...otherAttributes
}) => {
  const { disabled } = otherAttributes;
  return (
    <button
      type="button"
      {...otherAttributes}
      className={
        disabled
          ? `${buttonStyle[type]} ${buttonStyle.disabled} ${buttonStyle.styledButton}`
          : `${buttonStyle[type]} ${buttonStyle.styledButton}`
      }
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
