/* @flow */
import { createStore, combineReducers } from 'redux';
import ListReducer from 'reducers/List';
import TaskReducer from 'reducers/Task';

export default createStore(
    combineReducers({
        list: ListReducer,
        tasks: TaskReducer
    })
);