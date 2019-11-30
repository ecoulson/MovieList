import React from "react";
import MovieTitle from "./MovieDetails/MovieTitle/MovieTitle"
import "./Movie.css";
import MovieImage from "./MovieImage/MovieImage";
import MovieDetails from "./MovieDetails/MovieDetails";
import DeleteMovie from "./DeleteMovie/DeleteMovie";

export default class Movie extends React.Component {
    render() {
        return (
            <div className="movie-container">
                <MovieImage movie={this.props.movie}></MovieImage>
                <MovieDetails movie={this.props.movie}></MovieDetails>
                <DeleteMovie removeMovie={this.props.removeMovie} movie={this.props.movie}></DeleteMovie>
            </div>
        )
    }
}