import React from "react";
import "./MovieTitle.css"
import moment from "moment";

export default class MovieTitle extends React.Component {
    render() {
        return (
            <h1 className="movie-title">{this.props.title} ({moment(this.props.date).format("YYYY")})</h1>
        )
    }
}