import * as React from "react";

export interface INavbarProps {
    links:string[];
}

export default class Navbar extends React.Component<INavbarProps, any> {

    constructor(props) {
        super(props);        
    }

    render() {
        let linksToRender = [];
        this.props.links.forEach(element => {
            linksToRender.push(<li key={element}><a href="#">{element}</a></li>);
        });

        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <img alt="Brand" src="assets/logo.png" height="100%"/>
		                    </a>
		                </div>

                        <div className="" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-left">
                                {linksToRender}
                            </ul>
                        </div>
                    </div>
		        </nav>
		    </div>
        );
    }
}


