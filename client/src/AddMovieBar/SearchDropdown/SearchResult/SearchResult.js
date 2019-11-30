import React from "react";
import "./SearchResult.css";
import moment from "moment";

export default class SearchResult extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        console.log(this.props.result);
        return (
            <div onClick={this.handleClick} className="search-result">
                <div>
                    <img className="search-img" src={`http://image.tmdb.org/t/p/w200//${this.props.result.poster_path}`}/>
                </div>
                <div className="search-title">
                    {this.props.result.title} ({moment(this.props.result.release_date).format("YYYY")})
                </div>
            </div>
        );
    }

    handleClick() {
        this.props.setInput(this.props.result.title)
    }
}