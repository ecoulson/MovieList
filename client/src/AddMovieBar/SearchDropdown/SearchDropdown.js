import React from "react";
import SearchResult from "./SearchResult/SearchResult";
import "./SearchDropdown.css"

export default class SearchDropdown extends React.Component {
    render() {
        if (this.props.results.length > 0) {
            return (
                <div className="search-dropdown">
                    <h3 className="dropdown-title">Results</h3>
                    {this.props.results.map((result, i) => {
                        return (
                            <SearchResult setInput={this.props.setInput} key={i} result={result}/>
                        )
                    })}
                </div>
            )
        } else {
            return null;
        }
    }
}