import React, { useContext } from 'react';
import { CountContext } from './context';
import Counter from './counter';

const App = (props) => {
  const countContext = useContext(CountContext);

  return (
    <>
      <Counter
        count={countContext.count}
        increment={countContext.increment}
        decrement={countContext.decrement}
      />
    </>
  );
};

// let style =

export default App;
