/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTask } from 'actions/Task';
import { RandomGenerator } from 'utils';
import type { ListSchema, TaskSchema } from 'types';
import TaskPanel from 'components/TaskPanel';
import { InvalidRenderException } from 'errors';

interface ITaskPanelContainerProps {
	dispatch?: Function;
	tasks?: Array<TaskSchema>;
	activeList?: ListSchema;
}

const mapStateToProps = (state) => ({
	tasks: state.tasks.value,
	activeList: state.appState.activeList
});

@connect(mapStateToProps)
class TaskPanelContainer extends Component<ITaskPanelContainerProps, {}> {
	// Type Defs
	randomGenerator: RandomGenerator

	// Variable Defs
	randomGenerator = new RandomGenerator()

	createTask = () => {
		const { activeList, dispatch } = this.props;

		if(typeof activeList === 'undefined') {
			throw new InvalidRenderException("Active List is undefined. Normally this not could be happened. Check the rendering code of <TaskPanelContainer />.");
		}

		const newID = this.randomGenerator.generateNumber();

		const newTask:TaskSchema = {
			id: newID.toString(),
			list: activeList.id,
			name: `Task ${newID}`,
			status: '',
			created_at: new Date(),
			remind_at: new Date()
		};

		if(typeof(dispatch) === 'function') {
			dispatch(createTask(newTask));
		}

		// I don't know why, but Render doesn't happend even dispatched, I checked every related source codes, but every flow works fine except this.
		// Just for now, I just forcely update, however this must be reported as issue.
		this.forceUpdate();
	}
	renderTaskPanel = () => {
		const { activeList } = this.props;
		const { tasks } = this.props;
		let headerText = '';
		let currentTasks = [];

		// This should be filtered by render function,
		// However flow still requires undefined checking

		if(typeof activeList === 'undefined') {
			throw new InvalidRenderException("Active List is undefined. Normally this not could be happened. Check the rendering code of <TaskPanelContainer />.");
		}
		else {
			headerText = activeList.name;
		}

		if(typeof tasks !== 'undefined') {
			currentTasks = tasks;
		}

		return (
			<TaskPanel tasks={currentTasks} headerText={headerText} createTask={this.createTask} activeList={activeList} />
		);
	}
	render() {
		const { activeList } = this.props;

		// Render nothing if no active list
		if(typeof activeList === 'undefined') {
			return (<div></div>);
		}
		else {
			return this.renderTaskPanel();
		}
	}
}

export default TaskPanelContainer;