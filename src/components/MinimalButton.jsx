import React from 'react';
import MinimalButtonStyle from './MinimalButtonStyle';

const MinimalButton = ({ children, onClick, style, ...props }) => {
  return (
    <MinimalButtonStyle onClick={onClick} {...props}>
      {children}
    </MinimalButtonStyle>
  );
};

export default MinimalButton;
