import React from 'react';

function Wrapper({ children }) {
  const style = {
    fontSize: '2rem',
    border: '2px solid green',
    padding: '1rem',
  };

  return (
    <div style={style}>
      <div>React children</div>
      <div>{children}</div>
    </div>
  );
}

export default Wrapper;
