import React from "react";
import "./AddMovieBarInput.css"

export default class AddMovieBarInput extends React.Component {
    constructor() {
        super();
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    render() {
        return (
            <input 
                className="add-movie-bar-input"
                value={this.props.input}
                placeholder="Add Movie..."
                onChange={this.props.updateInput}
                onKeyUp={this.handleKeyDown}/>
        );
    }

    handleKeyDown(event) {
        if (event.keyCode === 13) {
            this.props.createMovie();
        }
    }
}