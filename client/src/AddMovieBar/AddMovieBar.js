import React from "react";
import AddMovieBarInput from "./AddMovieBarInput/AddMovieBarInput";
import AddMovieBarButton from "./AddMovieBarButton/AddMovieBarButton";
import "./AddMovieBar.css"
import SearchDropdown from "./SearchDropdown/SearchDropdown";

export default class AddMovieBar extends React.Component {
    constructor() {
        super();
        this.state = {
            currentInput: "",
            results: []
        }
        this.updateInput = this.updateInput.bind(this);
        this.createMovie = this.createMovie.bind(this);
        this.searchForMovie = this.searchForMovie.bind(this);
        this.setInput = this.setInput.bind(this);
    }

    render() {
        return (
            <div className="add-movie-bar-container" id={this.currentInput}>
                <AddMovieBarInput createMovie={this.createMovie} input={this.state.currentInput} updateInput={this.updateInput}></AddMovieBarInput>
                <AddMovieBarButton createMovie={this.createMovie}></AddMovieBarButton>
                <SearchDropdown setInput={this.setInput} results={this.state.results} input={this.currentInput}/>
            </div>
        )
    }

    setInput(input) {
        this.setState({
            currentInput: input
        }, () => {
            this.createMovie();
        });
    }

    updateInput(event) {
        this.setState({
            currentInput: event.target.value
        }, () => {
            this.searchForMovie().then((results) => {
                if (results) {
                    this.setState({
                        results
                    })
                } else {
                    this.setState({
                        results: []
                    })
                }
            })
        })
    }

    createMovie() {
        this.searchForMovie().then((results) => {
            console.log(this.getEntryFromResults(results));
            this.props.addMovie(this.createMovieFromEntry(this.getEntryFromResults(results)));
            this.setState({
                currentInput: "",
                results: []
            })
        }).catch((error) => {
            alert(error);
        })
    }

    createMovieFromEntry(entry) {
        return {
            _id: entry.id,
            title: entry.original_title,
            rating: entry.vote_average,
            dateReleased: entry.release_date,
            posterURL: `http://image.tmdb.org/t/p/w200//${entry.poster_path}`
        }
    }

    async searchForMovie() {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=76af3bd52e60560d324d69c5cc7d9fb3&query=${this.state.currentInput}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    }

    getEntryFromResults(results) {
        for (let i = 0; i < results.length; i++) {
            if (results[i].original_title.toLowerCase() === this.state.currentInput.toLowerCase()) {
                return results[i];
            }
        }
        throw new Error("Could not find movie in DB");
    }
}