import React, { useState, useCallback, useMemo } from 'react';
import TestEvaluationHook from './TestEvaluationHook/TestEvaluationHookComponent';
import './Home.scss';

const Home = () => {
  const [count, setCount] = useState(0);
  const handleOnClick = useCallback(() => setCount(count + 1));

  return (
    <>
      <h2>this is Home component</h2>
      <button onClick={handleOnClick}>Click</button>
      <TestEvaluationHook count={count} />
    </>
  );
};

export default Home;
