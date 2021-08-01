import React, { useEffect, useRef, useState } from 'react';

const TestEvaluationHook = ({ count }) => {
  console.log('component re-evaluation!!');
  // const [isFirstEvalute, setFirstEvaluate] = useState(true);
  let isFirstMounted = useRef(true);
  useEffect(() => {
      if (!isFirstMounted.current) {
        console.log("this is not the first evaluation!!");
      }
      isFirstMounted.current = false;
  }, [count]);

  // useEffect(() => {
  //   setFirstEvaluate(false);
  // }, []);

  return (
    <p>{`count value is ${count}`}</p>
  );
};

export default TestEvaluationHook;