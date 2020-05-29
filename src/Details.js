import React, { Component } from 'react'
import './Details.css';

let h=1;
class Details extends Component {
    constructor() {
        super();
        this.state = {
            consumerdetails: [{
                id:1,
                name: "rahul",
                phone: "789541014",
                email: "abc@up.com"
            },
            {
                id:2,
                name: "mohit",
                phone: "5455454444",
                email: "art@kj.com"

            }
            ,
            {
                id:3,
                name: "RAm",
                phone: "5455204444",
                email: "ythj@kj.com"

            }
            ]

        }
    }
    onClickHandler=(e)=>{
        
        console.log(e);
        document.getElementById(e).style.display="block";
        console.log(e);
    }
    onClickHandler2=(e)=>{
        
        console.log(e);
        document.getElementById(e).style.display="none";
        console.log(e);
    }

    render() {
        return (
            <section>
                <center>
                    <h1>Phone book</h1>
                    <div>
                        {this.state.consumerdetails.map((ele) => {
                            
                            let g="inner"+h;
                            h=h+1;
                            return (
                                <div id={ele.id}>
                                    <div className="labelname">{ele.name}  <span><i className="arrow down" onClick={this.onClickHandler.bind(this,g)}></i></span></div><br />
                                    <div id={g} className="hidden" >
                                        <label><i class="fa fa-phone"></i>{ele.phone}  <span><i className="fas fa-envelope-square"></i>{ele.email}
                                             
                                        </span> <span> <i class="arrow up"  onClick={this.onClickHandler2.bind(this,g)}></i></span>
</label><br/>
                                    </div>
                                </div>
                            )
                        })
                        }

                    </div>

                </center>
            </section>


        )
    }
}
export default Details; 