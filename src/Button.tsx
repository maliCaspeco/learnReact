import * as React from "react";

export interface IButtonProps {
	name: string;
}

export default class Button extends React.Component<IButtonProps, any> {
	render() {
		return (
			<h1>This is button {this.props.name}!</h1>
		);
	}
}
