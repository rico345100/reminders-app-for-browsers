/* @flow */
import type { ReduxAction } from 'types';
export const SET_ACTIVE_LIST = "SET_ACTIVE_LIST";
export const CLEAR_ACTIVE_LIST = "CLEAR_ACTIVE_LIST";

export function setActiveList(id:string): ReduxAction {
	return {
		type: SET_ACTIVE_LIST,
		payload: {
			value: id
		}
	};
}

export function clearActiveList(): ReduxAction {
	return {
		type: CLEAR_ACTIVE_LIST,
		payload: {}
	};
}