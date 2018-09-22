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
	dispatch?: Function;
	activeList?: string;
}

const mapStateToProps = (state) => ({
	activeList: state.appState.activeList
});

@connect(mapStateToProps)
class ListItemContainer extends Component<IListItemContainerProps, {}> {
	static propTypes = {
		id: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		createdAt: PropTypes.instanceOf(Date).isRequired
	}
	updateList = (newName: string) => {
		const { dispatch, id, createdAt } = this.props;

		if(typeof(dispatch) === 'function') {
			const newList:ListSchema = {
				id,
				name: newName,
				created_at: createdAt
			};

			dispatch(updateList(id, newList));
		}
	}
	deleteList = () => {
		const { dispatch, id } = this.props;

		if(typeof(dispatch) === 'function') {
			dispatch(deleteList(id));

			// Trigger the update for forcely update Components that doesn't update from store changes
			trigger();
		}
	}
	setActiveList = () => {
		const { dispatch, id } = this.props;

		if(typeof(dispatch) === 'function') {
			dispatch(setActiveList(id));
		}
	}
	render() {
		const { id, text, activeList } = this.props;
		const isActivated = id === activeList ? true : false;

		return (
			<ListItem id={id} text={text} updateList={this.updateList} deleteList={this.deleteList} setActiveList={this.setActiveList} activated={isActivated} />
		);
	}
}

export default ListItemContainer;