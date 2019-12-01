import React from "react";
import MovieTitle from "./MovieDetails/MovieTitle/MovieTitle"
import "./Movie.css";
import MovieImage from "./MovieImage/MovieImage";
import MovieDetails from "./MovieDetails/MovieDetails";
import DeleteMovie from "./DeleteMovie/DeleteMovie";

export default class Movie extends React.Component {
    constructor() {
        super();
        this.state = {
            toggled: false,
            height: window.innerWidth >= 640 ? "200px" : "100px"
        }
        this.toggle = this.toggle.bind(this);
        this.resize = this.resize.bind(this);
        window.addEventListener("resize", this.resize);
    }

    resize() {
        const element = document.getElementById(`movie-${this.props.movie.id}`);
        this.setState({
            height: window.innerWidth >= 640 ? "200px" : "100px"
        }, () => {
            element.style.height = this.state.height
        })
    }

    render() {
        return (
            <div onClick={this.toggle} id={`movie-${this.props.movie.id}`} className="movie-container">
                <MovieImage movie={this.props.movie}></MovieImage>
                <MovieDetails toggled={this.state.toggled} movie={this.props.movie}></MovieDetails>
                <DeleteMovie removeMovie={this.props.removeMovie} movie={this.props.movie}></DeleteMovie>
            </div>
        )
    }

    toggle(event) {
        const movieContainer = findMovieContainer(event.target);
        if (this.state.toggled) {
            movieContainer.style.display = "flex";
            movieContainer.style.height = this.state.height;
            this.setState({
                toggled: false
            })
        } else {
            movieContainer.style.display = "relative";
            movieContainer.style.height = "auto";
            this.setState({
                toggled: true
            })
        }
    }
}

function findMovieContainer(element) {
    if (element == null) {
        return null; 
    } else if (element.className == "movie-container") {
        return element;
    } else {
        return findMovieContainer(element.parentNode);
    }
}