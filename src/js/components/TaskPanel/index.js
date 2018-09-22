/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskHeader from 'components/TaskHeader';
import TaskItem from 'components/TaskItem';
import styles from './styles.scss';
import type { ListSchema, TaskSchema } from 'types';

interface ITaskPanel {
	headerText: string;
	tasks: Array<TaskSchema>;
	createTask: Function;
	activeList: ListSchema;
}

class TaskPanel extends Component<ITaskPanel, {}> {
	static propTypes = {
		headerText: PropTypes.string.isRequired,
		tasks: PropTypes.arrayOf(Object),
		createTask: PropTypes.func,
		activeList: PropTypes.object.isRequired
	}
	getActiveListTasks = (): Array<TaskSchema> => {
		const { tasks, activeList } = this.props;
		let activeListTasks:Array<TaskSchema> = [];

		for(let i = 0; i < tasks.length; i++) {
			if(tasks[i].list === activeList.id) {
				activeListTasks.push(tasks[i]);
			}
		}

		return activeListTasks;
	}
	render() {
		const { activeList, headerText, createTask } = this.props;
		const tasks = this.getActiveListTasks();
		
		return (
			<div className={styles.taskPanel}>
				<TaskHeader name={headerText} onCreateTask={createTask} listColor={activeList.color} />

				<div className={styles.taskContainer}>
				{
					tasks.map((taskItem:TaskSchema) => (
						<TaskItem key={taskItem.id} id={taskItem.id} name={taskItem.name} />
					))
				}
				</div>
			</div>
		);
	}
}

export default TaskPanel;