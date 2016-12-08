import * as React from "react";
import Button from "./Button";

export interface IAppProps {
	name: string;
}

export default class App extends React.Component<IAppProps, any> {
	render() {
		return (
			<div>
				<h1>{this.props.name}!</h1>
				<Button name="It works I think" />
			</div>
		);
	}
}
