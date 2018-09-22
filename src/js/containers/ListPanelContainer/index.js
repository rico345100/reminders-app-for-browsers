/* @flow */
import React, { Component } from 'react';
import ListPanel from 'components/ListPanel';
import { connect } from 'react-redux';
import { createList } from 'actions/List';
import { GenerateID } from 'utils';
import type { ListSchema } from 'types';

interface IListPanelContainerProps {
	dispatch: function;
}

@connect()
class ListPanelContainer extends Component<IListPanelContainerProps, {}> {
	createToList = () => {
		const { dispatch } = this.props;

		const tempList:ListSchema = {
			id: GenerateID(),
			name: '',
			created_at: new Date()
		};
	}
	render() {
		return (
			<ListPanel />
		);
	}
}

export default ListPanelContainer;