import React from "react";
import CreateClass from 'create-react-class';
import Search from './Search';
import * as urlConfig from "../../urlConfig";
import SearchList from "./SearchList";
import Liked from "./Liked";

const Movies = CreateClass({
    findMovies(searchString){
        fetch(urlConfig.searchUrl + searchString)
        .then(res => res.json())

        .then(data => {

            const myData = data.results.map(el => ({
                id: el.id,
                name: el.title,
                poster: el.poster_path,
                descr: el.overview,
            }));
            this.setState((prev) => ({
                likedMovies: prev.likedMovies,
                favMovies: prev.favMovies,
                searchMovies: myData,
                isResults: myData.length
            }));
        }).catch(e => alert("Oops, something went wrong!"));
        // console.log(urlConfig.sampleResponse);
        // const myData = urlConfig.sampleResponse.map(el => ({
        //     id: el.id,
        //     name: el.title,
        //     poster: el.poster_path,
        //     descr: el.overview
        // }));
        // this.setState((prev) =>({
        //     likedMovies: prev.likedMovies,
        //     favMovies: prev.favMovies,
        //     searchMovies: myData
        // }));
    },

    deleteMovie(id){
        this.setState((prev) =>({
            likedMovies: prev.likedMovies.filter((movie)=> movie.id !== id)
        }));
    },
    addMovie(movie){
        console.log();
        if(this.state.likedMovies.filter(el => el.id === movie.id).length){
            console.log("Same movie Added");
            alert("Movie is already in your list!");
        }else{
            this.setState((prev) => ({
                likedMovies: [...prev.likedMovies, movie],
                favMovies: prev.favMovies,
                searchMovies: prev.searchMovies,
                isResults: prev.isResults
            }));
        }
        
        console.log(this.state.likedMovies);
    },

    getInitialState(){
        //check if localStorage has favMovies, if it doesn't, set it to empty string
        if(!localStorage.getItem('favMovies')){
            localStorage.setItem('favMovies', "");
        }
        return {likedMovies: [], favMovies: [], searchMovies: []};
    },


    render(){
        return (
        <div className = "movies">
            <Search getResults = {this.findMovies} name = {"Arnold"}/>
            <SearchList addMovie={this.addMovie} movieList = {this.state.searchMovies} isResults= {this.state.isResults}></SearchList>
            <Liked movieList = {this.state.likedMovies} deleteMovie = {this.deleteMovie} addMovie = {this.addMovie}/>
        </div>)
    }
    
})






export default Movies;