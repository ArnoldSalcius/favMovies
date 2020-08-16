import React from "react";
import CreateClass from 'create-react-class';



const Search = CreateClass({

    getInitialState(){
        return {searchValue: ""}
    },
    handleChange(e){
        this.setState({searchValue: e.target.value});
    },
    handleSubmit(e){

        this.props.getResults(this.state.searchValue);
        e.preventDefault();
    },
    
    render: function(){
        return (
            <form onSubmit ={this.handleSubmit} className = "search-bar">
                <input onChange= {this.handleChange} value ={this.state.searchValue} placeholder="Search for a Movie..." type="text"/>
                <button>Search</button>
            </form>
        )
    }

});







export default Search;