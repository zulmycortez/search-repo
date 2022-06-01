import React from 'react';
import ButtonStyle from './ButtonStyle';

const Button = ({ children, onClick, variant = 'text', ...props }) => {
  return (
    <ButtonStyle onClick={onClick} variant={variant} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
