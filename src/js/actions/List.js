/* @flow */
import type { ListSchema, ReduxAction } from 'types';

export const CREATE_LIST = "CREATE_LIST";
export const UPDATE_LIST = "UPDATE_LIST";
export const DELETE_LIST = "DELETE_LIST";

export function createList(newList:ListSchema):ReduxAction {
	return {
		type: CREATE_LIST,
		payload: {
			value: newList
		}
	};
}

export function updateList(id:string, newList:ListSchema):ReduxAction {
	return {
		type: UPDATE_LIST,
		payload: {
			id,
			value: newList
		}
	};
}

export function deleteList(id:string):ReduxAction {
	return {
		type: DELETE_LIST,
		payload: {
			id
		}
	};
}