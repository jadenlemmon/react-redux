import {INCREASE, DECREASE, SUBTRACT, ADD} from '../actions/types';

export const count = (COUNT = 0, action) => {
    switch (action.type) {
        case INCREASE :
            return COUNT + 1;
        case DECREASE :
            return COUNT - 1;
        case SUBTRACT :
            return COUNT - action.value;
        case ADD :
            return COUNT + action.value;
        default:
            return COUNT;
    }
};