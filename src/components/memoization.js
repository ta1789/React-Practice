import React, { useState, memo } from 'react';

const Child = memo(({ count }) => {
  console.log('Child rendered');
  return <h2>Count: {count}</h2>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  return (
    <div>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br />
      <br />
      <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
      <p>Other State: {otherState.toString()}</p>
    </div>
  );
}

export default Parent;