import * as React from "react";

export interface IButtonProps {
    title: string;
    onClick: (value: any, event: Event) => void;
    disabled?: boolean;
}

export default class Button extends React.Component<IButtonProps, any> {

    private onClick = (event) => {
        this.props.onClick("Some value", event);
    };

    render() {
        return (
            <button className="btn btn-primary" disabled={this.props.disabled} onClick={this.onClick}> {this.props.title}!</button>
        );
    }
}
