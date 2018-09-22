/* @flow */
import React, { PureComponent } from 'react';
import styles from './styles.scss';

class ListCreateButton extends PureComponent<{}, {}> {
	render() {
		return (
			<button className={styles.listCreateButton}>{"+"} 목록 추가</button>
		);
	}
}

export default ListCreateButton;