import React from "react";
import "./index.css";

import LayoutDefault from "../../layouts/layoutDefault";

class Home extends React.Component {
    componentDidMount() {
    };

    render() {
        return (
            <LayoutDefault location={this.props.location}>
                <div className={"coming-soon"}>Coming soon!</div>
                <div className={"footer"}></div>
            </LayoutDefault>
        );
    }
};

export default {
    exact: true,
    path: "/",
    component: Home
};
