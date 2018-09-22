/* @flow */
import React, { Component } from 'react';
import styles from './styles.scss';

class TaskPanel extends Component<{}, {}> {
	render() {
		return (
			<div className={styles.taskPanel}>
				<div className={styles.taskPanelTop}>
					<div className={styles.taskHeader}>A List</div>
					<button className={styles.taskAddButton}>{'+'}</button>
				</div>

				<div className={styles.taskContainer}>
					<div className={styles.taskItem}>
						<div className={styles.taskItemCheckboxContainer}>
							<input className={styles.taskItemCheckbox} type="checkbox" />
							<span class={[styles.taskItemCheckMark, styles.taskItemCheckBoxChecked].join(' ')}></span>
						</div>

						<div className={styles.taskItemLabel}>Korea</div>
					</div>

					<div className={styles.taskItem}>
						<div className={styles.taskItemCheckboxContainer}>
							<input className={styles.taskItemCheckbox} type="checkbox" />
							<span class={styles.taskItemCheckMark}></span>
						</div>

						<div className={styles.taskItemLabel}>Korea</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TaskPanel;