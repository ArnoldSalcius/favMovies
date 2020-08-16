import React from "react";
import CreateClass from "create-react-class";
import Movie from "./Movie";



const SearchList = CreateClass({

    render(){
        return (
            <div className = "movie-list">
                {this.props.movieList.map(el => <Movie el={el}/>)}

            </div>
        )
    }
});




export default SearchList;