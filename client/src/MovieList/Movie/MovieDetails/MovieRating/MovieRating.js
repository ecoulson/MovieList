import React from "react";
import "./MovieRating.css"

export default class MovieRating extends React.Component {
    render() {
        return (
            <span className="movie-rating"><i className="fas fa-star"></i> {this.props.rating}</span>
        )
    }
}