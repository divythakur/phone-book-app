import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:"rahul",
      phone:"3546"
    };
  }

  
  render(){
  return (
   <div>
     <p>the name is {this.state.name}</p>

   </div>
  );
  }
}

export default App;
