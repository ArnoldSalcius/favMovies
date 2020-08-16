import React from 'react';
import Header from './components/Header';
import CreateClass from 'create-react-class';
import Movies from './components/movies/Movies';



var App = CreateClass({
  render: function() {
    return <div><Header/> <Movies/></div> ;
  }
});

export default App;
