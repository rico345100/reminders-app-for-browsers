/* @flow */
import type { ReduxAction, ListSchema } from 'types';
import { CREATE_LIST, UPDATE_LIST, DELETE_LIST } from 'actions/List';

interface IListState {
	value: Array<ListSchema>
}

const defaultState:IListState = {
	value: []
};

export default function(state:IListState = defaultState, action:ReduxAction) {
	switch(action.type) {
		// Some of values have same name of each CASE statement,
		// let/const doesn't allow to define in same bracket.
		// To solve this, create new brackets so that let/const variables can define inside of brackets.
		case CREATE_LIST:
		{
			let currentList:Array<ListSchema> = state.value;
			currentList.push(action.payload.value);

			return Object.assign({}, state, {
				value: currentList
			});
		}
		case UPDATE_LIST:
		{
			const { id, value } = action.payload;
			let currentList:Array<ListSchema> = state.value;

			for(let i = 0; i < currentList.length; i++) {
				if(currentList[i].id === id) {
					currentList[i] = value;
					break;
				}
			}

			return Object.assign({}, state, {
				value: currentList
			});
		}
		case DELETE_LIST:
		{
			const { id } = action.payload;
			let wasDeleted = false;
			let currentList:Array<ListSchema> = state.value;

			for(let i = 0; i < currentList.length; i++) {
				if(currentList[i].id === id) {
					currentList.splice(i, 1);
					wasDeleted = true;
					break;
				}
			}

			// Update only it has changes
			if(wasDeleted) {
				return Object.assign({}, state, {
					value: currentList
				});
			}
			else {
				return state;
			}
		}
		default:
			return state;
	}
}

