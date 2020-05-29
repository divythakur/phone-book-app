import React, { Component } from 'react'
import './Details.css';


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
            ]

        }
    }
    onClickHandler=(e)=>{
        console.log(e);
        //document.getElementById("e").style.display="block";
    }

    render() {
        return (
            <section>
                <center>
                    <h1>Phone book</h1>
                    <div>
                        {this.state.consumerdetails.map((ele) => {
                            let h=1;
                            let g="inner"+h;
                            return (
                                <div id={ele.id}>
                                    <div className="labelname">{ele.name}  <span><i className="arrow down" onClick={this.onClickHandler(g)}></i></span></div><br />
                                    <div >
                                        <label><i class="fa fa-phone"></i>{ele.phone}  <span><i className="fas fa-envelope-square"></i>{ele.email}
                                             
                                        </span> <span> <i class="arrow up"></i></span>
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