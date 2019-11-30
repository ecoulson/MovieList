import React from "react";
import moment from "moment"
import "./ReleaseDate.css"

export default class ReleaseDate extends React.Component {
    render() {
        return (
        <span className="release-date">
           {moment(this.props.date).format("MMMM Do, YYYY")}
        </span>
        )
    }
}