import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './counterTypes';

export const increaseCounter = () => {
  return {
    type: COUNTER_INCREMENT
  };
};

export const decreaseCounter = () => {
  return {
    type: COUNTER_DECREMENT
  };
};

