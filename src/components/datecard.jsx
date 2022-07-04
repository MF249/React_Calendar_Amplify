import React, { Component } from "react";

class Datecard extends Component {
    render() {
        return (
            <div className="Date-div">
                <p>{this.props.date}</p>
            </div>
        );
    }
}

export default Datecard;