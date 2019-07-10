import React from 'react';

const Increment = (props) => {
  return (
    <button style={style} onClick={props.increment}>
      +
    </button>
  );
};

let style = {
  display: 'block',
  width: '30px',
  height: '30px',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: 'green',
  color: 'white'
};

export default Increment;
