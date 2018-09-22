/* @flow */
import type { ListSchema, ReduxAction } from 'types';
import { SET_ACTIVE_LIST, CLEAR_ACTIVE_LIST } from 'actions/AppState';

interface IAppState {
	activeList: ListSchema|void;
}

const defaultState:IAppState = {
	activeList: undefined
};

export default function(state:IAppState = defaultState, action:ReduxAction) {
	switch(action.type) {
		case SET_ACTIVE_LIST:
		{
			let { value } = action.payload;

			return Object.assign({}, state, {
				activeList: value
			});
		}
		case CLEAR_ACTIVE_LIST:
		{
			return Object.assign({}, state, {
				activeList: undefined
			});
		}
		default:
			return state;
	}
}

