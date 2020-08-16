import React from "react";
import CreateClass from "create-react-class";
import * as urlConfig from "../../urlConfig";



const SearchList = CreateClass({

    render(){
        return (
            <div className = "movie-list">
                {this.props.movieList.map(el => {
                    return (
                        <div className="movie" key={el.id}>
                            <h2>{el.name}</h2>
                            <img className = "poster" src={urlConfig.imageUrl + el.poster}></img>
                    <p>{el.descr}</p>
                        </div>
                    )
                })}

            </div>
        )
    }
});




export default SearchList;