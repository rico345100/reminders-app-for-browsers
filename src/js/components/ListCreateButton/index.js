/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

interface IListCreateButtonProps {
	onClick: Function;
}

class ListCreateButton extends Component<IListCreateButtonProps, {}> {
	static propTypes = {
		onClick: PropTypes.func
	}
	render() {
		const { onClick } = this.props;
		
		return (
			<button className={styles.listCreateButton} onClick={onClick}>{"+"} 목록 추가</button>
		);
	}
}

export default ListCreateButton;