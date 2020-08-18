import React from "react";
import CreateClass from 'create-react-class';
import * as urlConfig from "../../urlConfig";
import Icons from "./Icons";


const Movie = CreateClass({

    render() {
        return (<div className="movie" key={this.props.el.id}>
            <div><h1>{this.props.el.name}</h1></div>
            <div><img className="poster" src={urlConfig.imageUrl + this.props.el.poster}></img></div>
            <div className="descr">{this.props.el.descr.slice(0, 197)}... <a href="https://google.com">Read more</a></div>
            <Icons deleteMovie = {this.props.deleteMovie} addMovie = {this.props.addMovie} el = {this.props.el} type = {this.props.type} />

        </div>)
    }
})





export default Movie;