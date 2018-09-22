/* @flow */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

interface IListItemProps {
	text: string;
}

class ListItem extends PureComponent<IListItemProps, {}> {
	static propTypes = {
		text: PropTypes.string.isRequired
	}
	render() {
		const { text } = this.props;

		return (
			<div className={styles.listItem}>{text}</div>
		);
	}
}

export default ListItem;