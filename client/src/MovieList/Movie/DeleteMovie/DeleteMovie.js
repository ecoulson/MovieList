import React from "react";
import "./DeleteMovie.css";

export default class DeleteMovie extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div onClick={this.handleClick} className="delete-container">
                <i className="fas fa-2x fa-trash"></i>
            </div>
        )
    }

    handleClick() {
        this.props.removeMovie(this.props.movie);
    }
}