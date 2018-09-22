/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTask } from 'actions/Task';
import type { ListSchema, TaskSchema } from 'types';
import TaskPanel from 'components/TaskPanel';

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
	render() {
		const { activeList } = this.props;
		const { tasks } = this.props;	
		let headerText = '';

		if(typeof activeList !== 'undefined') {
			headerText = activeList.name;
		}

		return (
			<TaskPanel tasks={tasks} headerText={headerText} />
		);
	}
}

export default TaskPanelContainer;