/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskHeader from 'components/TaskHeader';
import TaskItem from 'components/TaskItem';
import styles from './styles.scss';

interface ITaskPanel {
	headerText: string;
}

class TaskPanel extends Component<ITaskPanel, {}> {
	static propTypes = {
		headerText: PropTypes.string.isRequired
	}
	render() {
		const { headerText } = this.props;
		
		return (
			<div className={styles.taskPanel}>
				<TaskHeader name={headerText} />

				<div className={styles.taskContainer}>
					<TaskItem id="0" name="Helloworld" />
					<TaskItem id="1" name="Helloworld" />
				</div>
			</div>
		);
	}
}

export default TaskPanel;