/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

interface ITaskHeaderProps {
	name: string;
	listColor: string;
	onCreateTask: Function;
}

class TaskHeader extends Component<ITaskHeaderProps, {}> {
	static propTypes = {
		name: PropTypes.string.isRequired,
		listColor: PropTypes.string.isRequired,
		onCreateTask: PropTypes.func
	}
	render() {
		const { name, onCreateTask, listColor } = this.props;
		const bgStyle = {
			color: listColor
		};

		return (
			<div className={styles.taskPanelTop}>
				<div className={styles.taskHeader} style={bgStyle}>{name}</div>
				<button onClick={onCreateTask} className={styles.taskAddButton}>{'+'}</button>
			</div>
		);
	}
}

export default TaskHeader;