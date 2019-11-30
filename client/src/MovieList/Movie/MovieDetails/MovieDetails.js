import React from "react";
import MovieTitle from "./MovieTitle/MovieTitle";
import MovieRating from "./MovieRating/MovieRating";
import "./MovieDetails.css";
import ReleaseDate from "./ReleaseDate/ReleaseDate";

export default class MovieDetails extends React.Component {
    render() {
        return (
            <div className="movie-details">
                <MovieTitle date={this.props.movie.dateReleased} title={this.props.movie.title}/>
                <div className="movie-info">
                    <MovieRating rating={this.props.movie.rating}/>
                    <ReleaseDate date={this.props.movie.dateReleased}/>
                </div>
            </div>
        )
    }
}