import React,{Component} from 'react';


class Addsubscriber extends Component{
  state={
    name:"",
    phone:"",
    email:""
  }
  onchangeHandler=(e)=>{
    this.setState({[e.target.id]:e.target.value});
    
  }


  onsubmitHandler=(e)=>{
    e.preventDefault();
    this.props.addPerson(this.state);


  }

    render(){
      return (
           <form >
             <label htmlFor="name">name</label>
             <input type="text" id="name" placeholder="add name here" onChange={this.onchangeHandler}/><br />
             <label htmlFor="phone">phone</label> 
             <input type="number" id="phone" placeholder="add phone no here" onChange={this.onchangeHandler} /><br />
             <label htmlFor="email">Email</label>     
             <input type="text" id="email" placeholder="enter email here" onChange={this.onchangeHandler} /><br />
             <button type="submit"  onClick={this.onsubmitHandler}>Click here </button>
           </form>
      );  
    }

}

export default Addsubscriber; 