import {TEST_ACTION} from '../actions/index.actions';

const test = (state = {test: 'test'}, action) => {
    switch (action.type) {
        case TEST_ACTION: {
            return action.payload;
        }
        default:
            return state;
    }
}

export default test;