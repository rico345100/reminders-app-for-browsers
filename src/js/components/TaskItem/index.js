/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import type { TaskSchema } from 'types';
import styles from './styles.scss';

interface ITaskItemProps {
	id: string;
	name: string;
}

class TaskItem extends Component<ITaskItemProps, {}> {
	static propTypes = {
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
	}
	render() {
		const { name } = this.props;

		// selected style name: styles.taskItemCheckBoxChecked

		return (
			<div className={styles.taskItem}>
				<div className={styles.taskItemCheckboxContainer}>
					<input className={styles.taskItemCheckbox} type="checkbox" />
					<span className={[styles.taskItemCheckMark].join(' ')}></span>
				</div>

				<div className={styles.taskItemLabel}>{name}</div>
			</div>
		);
	}
}

export default TaskItem;