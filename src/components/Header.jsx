import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        borderBottom: `1px solid #efefef`,
        padding: '16px',
      }}
    >
      <img src="./logo.svg" alt="match" width="110" />
    </header>
  );
};

export default Header;
