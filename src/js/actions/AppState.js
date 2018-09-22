/* @flow */
import type { ListSchema, ReduxAction } from 'types';
export const SET_ACTIVE_LIST = "SET_ACTIVE_LIST";
export const CLEAR_ACTIVE_LIST = "CLEAR_ACTIVE_LIST";

export function setActiveList(list:ListSchema): ReduxAction {
	return {
		type: SET_ACTIVE_LIST,
		payload: {
			value: list
		}
	};
}

export function clearActiveList(): ReduxAction {
	return {
		type: CLEAR_ACTIVE_LIST,
		payload: {}
	};
}