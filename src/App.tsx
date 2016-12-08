import * as React from "react";
// import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Button from "./Button";
import Navbar from "./Navbar";

export interface IAppProps {
    name: string;
}

export interface IAppState {
    error: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props) {
        super(props);
        console.log("props:", props);
        let state = { error: false };
        this.state = state;
    }


    onClick = (value: any, event: Event) => {
        console.log("got event from child, ", value);
        this.setState({ error: true });
    };

    render() {
        return (
            <div>
                <Navbar links={["Bands", "Info"]}/>
                    <div className="container">
                    <h1>{this.props.name}!</h1>
                    <Button title="Press me!" onClick={this.onClick} disabled={this.state.error} />
                </div>
            </div>
        );
    }
}
