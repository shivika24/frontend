import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker ,InfoWindow} from 'google-maps-react';
import Smallnav from "./smallnav";
const lo = {
  width: '80vw',
  height: '480px',
    marginLeft:'134px',
    marginTop:'40px',
    backgroundColor:'red',
    boxShadow: '2px 3px 18px 3px black'
  };
  const mapStyles = {
    width: '80vw',
    height: '480px',
  
  };

class mymap extends Component
{
    constructor()
    {
        super();
        this.state = {
                    openInfoWindowMarkerId: '',
                    isOpen: false,
                    arr:[]
          }
        this.f1=this.f1.bind(this);
        this.function2=this.function2.bind(this);
    }
    f1(s)
    {
      s.map((i)=>{
        const e={
          name:i.name,
          latitude:i.lat,
          longitude:i.long
        }
        return this.state.arr.push(e);
      })
      console.log(this.state.arr)
    }
    function2(arr,x)
    {
      console.log(arr[x].location)
      /*const xe=document.getElementById("map");
      const y=document.createElement("a");
      y.setAttribute("id","my");
      xe.appendChild(y);*/
      window.location=arr[x].location;
      return false;

  
  };
  
    handleToggleOpen = (markerId) => {
        this.setState({
            openInfoWindowMarkerId: markerId,
            isOpen:true
        });
    }    
    handleToggleClose = () => {
        this.setState({
          isOpen: false,
        });
      };
    displayMarkers = () => {
        return this.state.arr.map((store, index) => {
          return <Marker data-toggle="tooltip" data-placement="top" title={store.name+"\n Click to view map"} key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}         
         onClick={()=>this.function2(this.props.location.state.statedatapass.tourist,index)}>
          </Marker>  
        })
      }
    render()
    {
        return (
          <div id="map">
          <Smallnav navstatedata={this.props.location.state.statedatapass}/>
          <div id="lo"
          style={lo}
          >
          {this.f1(this.props.location.state.statedatapass.tourist)}
            <center><Map
          google={this.props.google}
          zoom={6.5}
          style={mapStyles}
          initialCenter={{ lat: this.state.arr[0].latitude, lng: this.state.arr[0].longitude}}
        >
        
          {this.displayMarkers()}
        </Map></center>
        </div>
        </div>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAqUcHWAtRkrhTFv26B8JdOv2HGDxADABk'
  })(mymap);