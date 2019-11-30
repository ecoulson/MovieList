import React from "react";
import "./MovieImage.css";

export default class MovieImage extends React.Component {
    render() {
        return (
            <img 
                className="movie-image"
                src={this.props.movie.posterURL}/>
        )
    }
}