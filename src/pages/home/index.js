import React from "react";
import "./index.css";

import LayoutDefault from "../../layouts/layoutDefault";

class Home extends React.Component {
    componentDidMount() {
    };

    render() {
        return (
            <LayoutDefault location={this.props.location}>
                <div style={{fontSize: 40, color: "white"}}>{"Hi!"}</div>
            </LayoutDefault>
        );
    }
};

export default {
    exact: true,
    path: "/",
    component: Home
};
