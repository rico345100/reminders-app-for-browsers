/* @flow */
import type { ReduxAction, TaskSchema } from 'types';
import { CREATE_TASK, UPDATE_TASK, DELETE_TASK } from 'actions/Task';

interface ITaskState {
	value: Array<TaskSchema>
}

const defaultState:ITaskState = {
	value: []
};

export default function(state:ITaskState = defaultState, action:ReduxAction) {
	switch(action.type) {
		// Some of values have same name of each CASE statement,
		// let/const doesn't allow to define in same bracket.
		// To solve this, create new brackets so that let/const variables can define inside of brackets.
		case CREATE_TASK:
		{
			let currentTasks:Array<TaskSchema> = state.value;
			currentTasks.push(action.payload.value);

			return Object.assign({}, state, {
				value: currentTasks
			});
		}
		case UPDATE_TASK:
		{
			const { id, value } = action.payload;
			let currentTasks:Array<TaskSchema> = state.value;

			for(let i = 0; i < currentTasks.length; i++) {
				if(currentTasks[i].id === id) {
					currentTasks[i] = value;
					break;
				}
			}

			return Object.assign({}, state, {
				value: currentTasks
			});
		}
		case DELETE_TASK:
		{
			const { id } = action.payload;
			let wasDeleted = false;
			let currentTasks:Array<TaskSchema> = state.value;

			for(let i = 0; i < currentTasks.length; i++) {
				if(currentTasks[i].id === id) {
					currentTasks.splice(i, 1);
					wasDeleted = true;
					break;
				}
			}

			// Update only it has changes
			if(wasDeleted) {
				return Object.assign({}, state, {
					value: currentTasks
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