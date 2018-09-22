/* @flow */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import type { TopButtonTheme } from 'types';

interface ITopButtonProps {
	theme: TopButtonTheme;
}

class TopButton extends PureComponent<ITopButtonProps, {}> {
	static propTypes = {
		theme: PropTypes.string
	}
	static defaultProps = {
		theme: 'Default'
	}
	render() {
		const { theme } = this.props;
		let buttonStyle = styles.baseButton;

		switch(theme) {
			case "Danger":
				buttonStyle = styles.dangerButton;
				break;
			case "Warning":
				buttonStyle = styles.warningButton;
				break;
			case "Success":
				buttonStyle = styles.successButton;
				break;
			default:
				console.warn("Invalid <TopButton /> Theme: " + theme + ". Use Base Theme instead.");
				break;
		}

		return (
			<div className={buttonStyle} />
		);
	}
}

export default TopButton;