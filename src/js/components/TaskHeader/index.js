/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

interface ITaskHeaderProps {
	name: string;
}

class TaskHeader extends Component<ITaskHeaderProps, {}> {
	static propTypes = {
		name: PropTypes.string.isRequired
	}
	render() {
		const { name } = this.props;

		return (
			<div className={styles.taskPanelTop}>
				<div className={styles.taskHeader}>{name}</div>
				<button className={styles.taskAddButton}>{'+'}</button>
			</div>
		);
	}
}

export default TaskHeader;