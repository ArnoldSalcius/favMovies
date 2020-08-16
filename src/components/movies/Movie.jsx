import React from "react";
import CreateClass from 'create-react-class';
import * as urlConfig from "../../urlConfig";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Movie = CreateClass({

    render() {
        return (<div className="movie" key={this.props.el.id}>
            <div><h1>{this.props.el.name}</h1></div>
            <div><img className="poster" src={urlConfig.imageUrl + this.props.el.poster}></img></div>
            <div className="descr">{this.props.el.descr.slice(0, 197)}... <a href="https://google.com">Read more</a></div>
            <div className="icons">
                <hr></hr>

                <button><ThumbUpIcon /></button>
                <button><FavoriteIcon /></button>
            </div>

        </div>)
    }
})





export default Movie;