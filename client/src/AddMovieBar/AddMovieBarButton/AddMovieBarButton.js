import React from "react";
import "./AddMovieBarButton.css";

export default class AddMovieBarButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.createMovie} className="add-movie-bar-button">Add</button>
        );
    }
}