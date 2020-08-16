var React = require('react');
var CreateClass = require('create-react-class');

const Header = CreateClass({
    render(){
        return <header><h1 className="brand-name">FavMovies</h1><button>Register</button></header>
    }
});





module.exports = Header;