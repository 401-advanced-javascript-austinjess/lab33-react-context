import React from 'react';
import { blockParams } from 'handlebars';

const Decrement = (props) => {
  return (
    <button style={style} onClick={props.decrement}>
      -
    </button>
  );
};

let style = {
  display: 'block',
  width: '30px',
  height: '30px',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: 'red',
  color: 'white'
};

export default Decrement;
