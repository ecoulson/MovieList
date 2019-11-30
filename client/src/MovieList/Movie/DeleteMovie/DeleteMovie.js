import React from "react";
import "./DeleteMovie.css";

export default class DeleteMovie extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            width: window.innerWidth
        }
        this.handleWindowResize = this.handleWindowResize.bind(this);
        window.addEventListener("resize", this.handleWindowResize)
    }

    handleWindowResize() {
        this.setState({
            width: window.innerWidth
        })
    }

    render() {
        if (this.state.width >= 640) {
            return (
                <div onClick={this.handleClick} className="delete-container">
                    <i className="fas fa-2x fa-trash"></i>
                </div>
            )
        } else {
            return (
                <div onClick={this.handleClick} className="delete-container">
                    <i className="fas fa-1x fa-trash"></i>
                </div>
            )
        }
    }

    handleClick() {
        this.props.removeMovie(this.props.movie);
    }
}