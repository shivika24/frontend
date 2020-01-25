import React, { Component } from 'react'
import './stylesheets/about.css';
class About extends Component
{
    render()
    {
        return (
            <div>
            {console.log(this.props.arr)}
            <div class="containermy">
            <img style={{height:"65vh",width:"100%"}} src={this.props.arr[0].img[0]}/>
            <div class="centered"><b>We are India's only destination discovery platform...</b></div>
            </div>
            <p style={{textAlign:"left"}}>WHAT WE DO</p>
            <p><center>We make finding destinations like</center></p>
            <div className="row" style={{marginRight:0,marginLeft:0}}>
            <div className="col-4">
            <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={this.props.arr[1].img[0]} alt="Card image cap" style={{height:"12rem"}}/>

            </div>
            </div>
            <div className="col-4 ">
            <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={this.props.arr[2].img[0]} alt="Card image cap" style={{height:"12rem"}}/>

            </div>
            </div>
            <div className="col-4 ">
            <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={this.props.arr[3].img[0]} alt="Card image cap" style={{height:"12rem"}}/>

            </div>
            </div>
            </div>
            <p><center><b>SIMPLE. QUICK. PERSONALIZED.</b></center></p>
            <p>India Tourism is a destination discovery website that helps travellers find the right destinations according to their preferences and help them plan their holidays in a hassle free manner.
            <br/>
            At India Tourism, we aim to make discovering your next holiday destination as much of an eye-opener as your vacation itself. We help you break out of the monotony of the same vacation spots you have known for years and open in front of you, a world of possibilities. With our interactive map interface and powerful filters, you can plan your vacation like never before.</p>
            
            </div>        
        )
    }
}
export default About;