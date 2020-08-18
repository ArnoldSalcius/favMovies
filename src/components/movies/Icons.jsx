import React from 'react';
import CreateClass from "create-react-class";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Icons = CreateClass({
    handleDelete(){
        console.log(this.props.el.id);
        this.props.deleteMovie(this.props.el.id);
    }
    ,
    handleLiked(){
        console.log(this.props.el);
        this.props.addMovie(this.props.el);
    },
    likeFavBtn(){
        return (
            <div>
                <button onClick={this.handleLiked}><ThumbUpIcon /></button>
                <button><FavoriteIcon /></button>
            </div>);
    },

    deleteBtn() {
        return (
            <div>
                <button onClick= {this.handleDelete}><FavoriteIcon  /></button>
            </div>

        )
    },

    render(){
        return (
            <div className="icons">
                <hr></hr>
                {this.props.type === 'liked' ? this.deleteBtn() : this.likeFavBtn()}
                
                
            </div>)
    }





})




export default Icons;