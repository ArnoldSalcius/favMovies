import React from "react";
import CreateClass from "create-react-class";
import Movie from "./Movie";
import NoResults from "./NoResults";


const SearchList = CreateClass({

    getDefaultProps(){
        return {
            isResults: true
        }
    },
    
    getInitialState(){
        return {isSearched: false};
    },
    isEmpty(){
        return this.props.movieList.length;
    },
   

    render(){
        return (
            <div className = "movie-list">
                {
                    this.props.isResults ? this.props.movieList.map(el => <Movie type="search" addMovie = {this.props.addMovie} key={el.id} el={el}/>) : <NoResults />
                }
            </div>
        )
    }
});




export default SearchList;