/* @flow */
import React, { Component } from 'react';
import styles from './styles.scss';

class ListPanel extends Component<{}, {}> {
	render() {
		return (
			<div className={styles.listPanel}>
				<div className={styles.appButtons}>
					<div className={styles.redButton} />
					<div className={styles.yellowButton} />
					<div className={styles.greenButton} />
				</div>

				<div className={styles.list}>
					<div className={styles.listHeader}>On My Mac</div>
					<div className={styles.listContainer}>
						<div className={[styles.listItem, styles.listItemActive].join(' ')}>List1</div>
						<div className={styles.listItem}>List2</div>
						<div className={styles.listItem}>List3</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ListPanel;