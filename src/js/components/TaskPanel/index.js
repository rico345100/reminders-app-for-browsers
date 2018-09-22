/* @flow */
import React, { Component } from 'react';
import TaskHeader from 'components/TaskHeader';
import TaskItem from 'components/TaskItem';
import styles from './styles.scss';

class TaskPanel extends Component<{}, {}> {
	render() {
		return (
			<div className={styles.taskPanel}>
				<TaskHeader name={"임시"} />

				<div className={styles.taskContainer}>
					<TaskItem id="0" name="Helloworld" />
					<TaskItem id="1" name="Helloworld" />
				</div>
			</div>
		);
	}
}

export default TaskPanel;