import React from "react";
import "./AppTitle.css";

export default class AppTitle extends React.Component {
    render() {
        return (
            <div className="app-title-container">
                {/* <h1 className="app-title">Movie List</h1> */}
                <h1 className="app-title">Lauren + Evan's Movie List <span className="heart"></span></h1>
            </div>
        )
    }
}