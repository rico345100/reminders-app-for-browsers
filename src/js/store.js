/* @flow */
import { createStore, combineReducers } from 'redux';

const defaultState = {
    value: 'Init Value'
};

function testReducer(state = defaultState, action) {
    switch(action.type) {
        case 'TEST':
            return Object.assign({}, state, {
                value: action.payload
            });
        default:
            return state;
    }
}

export default createStore(
    combineReducers({
        test: testReducer
    })
);