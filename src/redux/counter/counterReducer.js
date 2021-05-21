import { COUNTER_INCREMENT, COUNTER_DECREMENT } from './counterTypes';

const INITIAL_STATE = {
    count: 0
};

const counterReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;

    switch(type) {
        case COUNTER_INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
};

export default counterReducer;
