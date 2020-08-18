import React from "react";
import CreateClass from 'create-react-class';
import Movie from "./Movie";

const Liked = CreateClass({
   

    render(){
        return this.props.movieList.length ? (
            <div className = "movie-list">
                <div className = "list-title"><h1 >Liked Movies</h1></div>
                {
                    this.props.movieList.map(el => <Movie deleteMovie = {this.props.deleteMovie} type = "liked" addMovie = {this.props.addMovie} key={el.id} el={el}/>)
                }
            </div>) : null
        
    }


})






export default Liked;