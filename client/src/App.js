import React from 'react';
import './App.css';
import MovieList from './MovieList/MovieList';
import AddMovieBar from './AddMovieBar/AddMovieBar';
import AppTitle from "./AppTitle/AppTitle";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			movies: []
		}
		this.addMovie = this.addMovie.bind(this);
		this.isDuplicate = this.isDuplicate.bind(this);
		this.removeMovie = this.removeMovie.bind(this);
	}

	componentWillMount() {
		this.getMovies();
	}

	render() {
		return (
			<div className="App">
				<div className="App-Container">
					<AppTitle></AppTitle>
					<AddMovieBar addMovie={this.addMovie}></AddMovieBar>
					<MovieList removeMovie={this.removeMovie} movies={this.state.movies}></MovieList>
				</div>
			</div>
		);
	}

	getMovies() {
		fetch('/movies').then(async (response) => {
			this.setState({
				movies: await response.json()
			})
		}).catch((err) => {
			console.error(err);
		})
	}

	addMovie(movie) {
		let newMovies = this.state.movies;
		if (!this.isDuplicate(movie)) {
			this.saveMovie(movie);
			newMovies.push(movie);
			this.setState({
				movies: newMovies
			})
		} else {
			alert("This movie is already on the list");
		}
	}

	isDuplicate(movie) {
		for (let i = 0; i < this.state.movies.length; i++) {
			if (this.state.movies[i].title === movie.title) {
				return true;
			}
		}
		return false;
	}

	saveMovie(movie) {
		fetch('/movies', {
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST",
			body: JSON.stringify(movie)
		}).catch((err) => {
			alert(err);
		})
	}

	removeMovie(movie) {
		for (let i = this.state.movies.length - 1; i >= 0; i--) {
			if (this.state.movies[i].title == movie.title) {
				const removedMovie = this.state.movies.splice(i, 1);
				this.deleteMovie(removedMovie[0]);
				this.setState({
					movies: this.state.movies
				})
			}
		}
	}

	deleteMovie(movie) {
		fetch(`/movies/${movie._id}`, {
			method: "DELETE",
		}).catch((err) => {
			alert(err);
		})
	}
}
