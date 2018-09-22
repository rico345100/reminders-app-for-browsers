/* @flow */
import type { ListSchema } from 'types';

export const CREATE_LIST = "CREATE_LIST";
export const UPDATE_LIST = "UPDATE_LIST";
export const DELETE_LIST = "DELETE_LIST";

export function CreateList(newList:ListSchema) {
	return {
		type: CREATE_LIST,
		payload: {
			value: newList
		}
	};
}

export function UpdateList(id:string, newList:ListSchema) {
	return {
		type: UPDATE_LIST,
		payload: {
			id,
			value: newList
		}
	};
}

export function DeleteList(id:string) {
	return {
		type: DELETE_LIST,
		payload: {
			id
		}
	};
}