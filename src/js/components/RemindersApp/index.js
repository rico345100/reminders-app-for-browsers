/* @flow */
import React, { Component } from 'react';
import ListPanel from 'components/ListPanel';
import TaskPanel from 'components/TaskPanel';
import styles from './styles.scss';

class RemindersApp extends Component<{}, {}> {
    render() {
        return (
			<div className={styles.app}>
				<ListPanel />
				<TaskPanel />
			</div>
        );
    }
}

export default RemindersApp;