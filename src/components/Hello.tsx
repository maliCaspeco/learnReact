import React    = require("react");
import ReactDOM = require("react-dom");

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!  Mattias is so excited! FAN</h1>;
    }
}
