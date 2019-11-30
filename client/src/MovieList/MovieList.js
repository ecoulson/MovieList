import React from "react";
import Movie from "./Movie/Movie"
import "./MovieList.css"

export default class MovieList extends React.Component {
    render() {
        return (
            <div className="movie-list-container">
                <div className="movie-list">
                    {this.props.movies.map((movie, i) => {
                        return (
                            <Movie removeMovie={this.props.removeMovie} key={i} movie={movie}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}