import React, { Component } from 'react'
import './Details.css';

let h = 1;
class Details extends Component {
    
    onClickHandler = (e) => {

        console.log(e);
        document.getElementById(e).style.display = "block";
        console.log(e);
    }
    onClickHandler2 = (e) => {

        console.log(e);
        document.getElementById(e).style.display = "none";
        console.log(e);
    }
   
    
    
    handleChange=(e)=>{
        
        
       
        }
    

    render() {
        
        
        return (
            <section style={{ position: "absolute", top: "40px", left: "45%" }}>
                <center>
                    <div id="listall">
                        <h1>Phone book</h1>
                        <div>
                            {this.props.details.map((ele) => {

                                let g = "inner" + h;
                                h = h + 1;
                                return (
                                    <div key={ele.id}>
                                        <div className="labelname">{ele.name}  <span><i className="arrow down" onClick={this.onClickHandler.bind(this, g)}></i></span></div><br />
                                        <div id={g} className="hidden" >
                                            <label><i className="fa fa-phone"></i>{ele.phone}  <span><i className="fas fa-envelope-square"></i>{ele.email}

                                            </span> <span> <i className="arrow up" onClick={this.onClickHandler2.bind(this, g)}></i></span>
                                            </label><br />
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                   

                </center>
            </section>


        )
    }
}
export default Details; 