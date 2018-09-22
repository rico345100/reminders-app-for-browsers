/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from 'components/ListItem';
import { updateList, deleteList } from 'actions/List';
import { setActiveList } from 'actions/AppState';
import { trigger } from 'hook';
import type { ListSchema } from 'types';

interface IListItemContainerProps {
	id: string;
	text: string;
	createdAt: Date;
	color: string;
	dispatch?: Function;
	activeList?: ListSchema;
}

const mapStateToProps = (state) => ({
	activeList: state.appState.activeList
});

@connect(mapStateToProps)
class ListItemContainer extends Component<IListItemContainerProps, {}> {
	static propTypes = {
		id: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		createdAt: PropTypes.instanceOf(Date).isRequired,
		color: PropTypes.string.isRequired
	}
	updateList = (newName: string) => {
		const { dispatch, id, createdAt, color } = this.props;

		if(typeof(dispatch) === 'function') {
			const newList:ListSchema = {
				id,
				name: newName,
				created_at: createdAt,
				color
			};

			dispatch(updateList(id, newList));
		}
	}
	deleteList = () => {
		const { dispatch, id } = this.props;

		if(typeof(dispatch) === 'function') {
			dispatch(deleteList(id));

			// Trigger the update for forcely update Components that doesn't update from store changes
			trigger('Update::ListPanelContainer');
		}
	}
	setActiveList = () => {
		const { dispatch, id, text, createdAt, color } = this.props;

		if(typeof(dispatch) === 'function') {
			dispatch(
				setActiveList({
					id,
					name: text,
					created_at: createdAt,
					color
				})
			);
		}
	}
	render() {
		const { id, text, activeList } = this.props;
		let isActivated = false;

		if(typeof activeList !== 'undefined') {
			isActivated = id === activeList.id ? true : false;
		}

		return (
			<ListItem id={id} text={text} updateList={this.updateList} deleteList={this.deleteList} setActiveList={this.setActiveList} activated={isActivated} />
		);
	}
}

export default ListItemContainer;