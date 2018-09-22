/* @flow */
import React, { Component } from 'react';
import styles from './styles.scss';

class TaskPanel extends Component<{}, {}> {
	render() {
		return (
			<div className={styles.taskPanel}>
				<h1>Task Panel</h1>
			</div>
		);
	}
}

export default TaskPanel;