/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTask } from 'actions/Task';
import type { TaskSchema } from 'types';
import TaskPanel from 'components/TaskPanel';

interface ITaskPanelContainerProps {
	dispatch?: Function;
	tasks?: Array<TaskSchema>;
}

const mapStateToProps = (state) => ({
	tasks: state.tasks.value
});

@connect(mapStateToProps)
class TaskPanelContainer extends Component<ITaskPanelContainerProps, {}> {
	render() {
		const { tasks } = this.props;
		return (
			<TaskPanel tasks={tasks} />
		);
	}
}

export default TaskPanelContainer;