/* @flow */
import { createStore, combineReducers } from 'redux';
import ListReducer from 'reducers/List';
import TaskReducer from 'reducers/Task';
import AppStateReducer from 'reducers/AppState';

export default createStore(
    combineReducers({
        lists: ListReducer,
        tasks: TaskReducer,
        appState: AppStateReducer
    })
);