/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import TopButton from 'components/TopButton';
import ListCreateButton from 'components/ListCreateButton';
import ListItemContainer from 'containers/ListItemContainer';
import type { ListSchema } from 'types';

interface IListPanelProps {
	lists: Array<ListSchema>;
	createList: Function;
}

class ListPanel extends Component<IListPanelProps, {}> {
	static propTypes = {
		lists: PropTypes.array.isRequired,
		createList: PropTypes.func
	}
	static defaultProps = {
		lists: []
	}
	render() {
		const { lists, createList } = this.props;
		
		return (
			<div className={styles.listPanel}>
				<div className={styles.appButtons}>
					<TopButton theme="Danger" />
					<TopButton theme="Warning" />
					<TopButton theme="Success" />
				</div>

				<div className={styles.list}>
					<div className={styles.listHeader}>On My Mac</div>
					<div className={styles.listContainer}>
					{
						lists.map((listItem:ListSchema) => (
							<ListItemContainer key={listItem.id} id={listItem.id} text={listItem.name} createdAt={listItem.created_at} color={listItem.color} />
						))
					}
					</div>
				</div>

				<div className={styles.listBottom}>
					<ListCreateButton onClick={createList} />
				</div>
			</div>
		);
	}
}

export default ListPanel;