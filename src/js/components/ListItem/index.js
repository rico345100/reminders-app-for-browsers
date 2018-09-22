/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

interface IListItemProps {
	text: string;
	updateList: Function;
	deleteList: Function;
}

interface IListItemState {
	editMode: boolean;
	value: string;
}

class ListItem extends Component<IListItemProps, IListItemState> {
	static propTypes = {
		text: PropTypes.string.isRequired,
		updateList: PropTypes.func,
		deleteList: PropTypes.func
	}
	state = {
		editMode: false,
		value: this.props.text
	}
	switchToEditMode = () => {
		this.setState({
			editMode: true
		}, () => {
			this.refs.listInput.focus();
		});
	}
	switchToTextMode = () => {
		this.setState({
			editMode: false
		});
	}
	checkEditOver = (ev:SyntheticKeyboardEvent<HTMLInputElement>) => {
		if(ev.keyCode == 13) {
			const { updateList } = this.props;
			const { value } = this.state;

			updateList(value);

			this.switchToTextMode();
		}
	}
	updateText = (ev:SyntheticInputEvent<HTMLInputElement>) => {
		this.setState({
			value: ev.target.value
		});
	}
	renderAsInput = () => {
		const { value } = this.state;

		return (
			<input ref="listInput" type="text" onKeyDown={this.checkEditOver} onChange={this.updateText} value={value} />
		);
	}
	renderAsText = () => {
		const { deleteList } = this.props;
		const { value } = this.state;

		return (
			<div className={styles.listItem} onDoubleClick={this.switchToEditMode}>
				<div>{value}</div>
				<button className={styles.listItemDeleteButton} onClick={deleteList}>{'✕'}</button>
			</div>
		);
	}
	render() {
		const { editMode } = this.state;

		if(editMode) {
			return this.renderAsInput();
		}
		else {
			return this.renderAsText();
		}
	}
}

export default ListItem;