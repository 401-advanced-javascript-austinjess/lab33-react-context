import React from 'react';
import Increment from './increment';
import Decrement from './decrement';

const Counter = (props) => {
  return (
    <>
      <Increment increment={props.increment} />
      <span style={countStyle}>{props.count}</span>
      <Decrement decrement={props.decrement} />
    </>
  );
};

let countStyle = {
  textAlign: 'center',
  fontSize: '2rem',
  margin: '20px 0'
};

export default Counter;
