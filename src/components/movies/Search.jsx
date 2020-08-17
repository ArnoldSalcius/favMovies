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
        let res = this.state.searchValue;
        if(res.length > 2){
            this.props.getResults(res);
            this.setState({searchValue: ""});
        }else{
            alert("Please enter 3 or more characters in your search!");
        }
        
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