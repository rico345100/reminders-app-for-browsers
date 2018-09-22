/* @flow */
import React, { Component } from 'react';
import ListPanelContainer from 'containers/ListPanelContainer';
import TaskPanel from 'components/TaskPanel';
import styles from './styles.scss';

class RemindersApp extends Component<{}, {}> {
    render() {
        return (
			<div className={styles.app}>
				<ListPanelContainer />
				<TaskPanel />
			</div>
        );
    }
}

export default RemindersApp;