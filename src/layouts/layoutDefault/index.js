import React from "react";

class LayoutWithHeader extends React.Component {
    componentDidMount() {
    };

    render() {
        return (
            <div id={"container"}>
                {this.props.children}
            </div>
        );
    }
};

export default LayoutWithHeader;
