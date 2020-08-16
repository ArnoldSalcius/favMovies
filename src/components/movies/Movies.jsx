import React from "react";
import CreateClass from 'create-react-class';
import Search from './Search';
import * as urlConfig from "../../urlConfig";
import SearchList from "./SearchList";


const Movies = CreateClass({
    findMovies(searchString){
        // fetch(urlConfig.searchUrl + searchString)
        // .then(res => res.json())

        // .then(data => {

        //     console.log(data);
        //     const myData = data.results.map(el => ({
        //         id: el.id,
        //         name: el.title,
        //         poster: el.poster_path,
        //         descr: el.overview
        //     }));
        //     console.log(myData);
        //     this.setState((prev) => ({
        //         likedMovies: prev.likedMovies,
        //         favMovies: prev.favMovies,
        //         searchMovies: myData
        //     }));
        // });
        console.log(urlConfig.sampleResponse);
        const myData = urlConfig.sampleResponse.map(el => ({
            id: el.id,
            name: el.title,
            poster: el.poster_path,
            descr: el.overview
        }));
        this.setState((prev) =>({
            likedMovies: prev.likedMovies,
            favMovies: prev.favMovies,
            searchMovies: myData
        }));
    },

    deleteMovie(id){
        this.setState((prev) =>({
            likedMovies: prev.likedMovies.filter((movie)=> movie.id !== id)
        }));
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
            <SearchList movieList = {this.state.searchMovies}></SearchList>
        </div>)
    }
    
})






export default Movies;