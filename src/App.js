import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Addsubscriber from './Addsubscriber'
import Details from './Details';

class App extends Component {

  state = {
    consumerdetails:[
      { id: "1", name: "rahul", phone: "78957487547", email: "abc@werty.com" },
      { id: 2, name: "mohit", phone: "5455454444", email: "art@kj.com" },
      { id: 3, name: "RAm", phone: "5455204444", email: "ythj@kj.com" }
    ]
  }
 
  addperson=(info)=>{
      let i=[...this.state.consumerdetails,info];
      this.setState({consumerdetails:i});

  }
  render() {
    return (
      <div>
       <Details details={this.state.consumerdetails}></Details>
       <Addsubscriber addPerson={this.addperson} />

      </div>
    );
  }
}

export default App;
