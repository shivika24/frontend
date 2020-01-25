import React, { Component } from "react";
import Aboutpage from "./aboutpage";
import Smallnav from "./smallnav";
class Overview extends Component{
    state={
        openstate:this.props.location.state.statedatapass
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
       return(
           <div>
            <Smallnav id="top" navstatedata={this.state.openstate}/>
            <Aboutpage  aboutdata={this.state.openstate}/>
            </div>
       );
    }
}
export default Overview;