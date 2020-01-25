import React, { Component } from "react";
import Smallnav from "./smallnav";
import Loader from '../../images/loaderweb.gif';
class Besttime extends Component {
  state = {
    data: null,
    datacomes: this.props.location.state.statedatapass,
    mapdata: null
  };
  async componentDidMount() {
    const url = "http://localhost:4000/loc";
    const response = await fetch(url);
    const jsondata = await response.json();
    this.setState({ data: jsondata });

    for (var i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].state == this.state.datacomes.name) {
        var lat = this.state.data[i].lat;
        var long = this.state.data[i].long;
        this.functionweather(lat, long);
        break;
      }
    }
  }
  async functionweather(a, b) {
    const url =
      "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c4c85d231b9981e2cfee8e119c2e8352/" +
      a +
      "," +
      b;
    const response = await fetch(url);
    const jsondata = await response.json();
    this.setState({ mapdata: jsondata, loading: true });
    console.log(this.state.mapdata);
  }
  render() {
    return (
      <div>
        <Smallnav navstatedata={this.props.location.state.statedatapass} />

        {this.state.loding || !this.state.mapdata ? (
          <div><center><img style={{marginTop:"50px"}} src={Loader}/></center></div>
        ) : (
          <div>
            <div>{console.log(this.state.datacomes)}</div>
            <center>
            <div id="besttime">
            
             <div className="row">
               <div className="col-md-4 col-12" style={{background:"#ceb77e"}}>
                 <div>
                  <center>
                 <img
                    src={"images/weather/PNG/"+this.state.mapdata.currently.icon+".png"}
                    className="card-img-top"
                    alt={this.state.mapdata.currently.icon}
                    style={{width:"70%"}}
                  />
                  <b><p style={{color:"rgba(37, 35, 15, 0.64)",textTransform:"uppercase"}}>{this.state.mapdata.currently.summary}</p></b>
                  <h3>{this.state.mapdata.currently.temperature}°F</h3>
                  <p>WindSpeed :{this.state.mapdata.currently.windSpeed}</p>
                  <p>Humidity :{this.state.mapdata.currently.humidity}</p>
                  <p>Pressure :{this.state.mapdata.currently.pressure}</p>
                  </center>
                 </div>
               </div>



               <div className="col-md-2 col-12"  style={{background:"#b9a568"}}>
                 <div>
                  <center>
                    <h5>Tomorrow</h5>
                 <img
                    src={"images/weather/PNG/"+this.state.mapdata.daily.data[0].icon+".png"}
                    className="card-img-top"
                    alt={this.state.mapdata.daily.data[0].icon}
                    style={{width:"90%"}}
                  />
                  <b><p style={{color:"rgba(37, 35, 15, 0.64)",textTransform:"uppercase"}}>{this.state.mapdata.daily.data[0].summary}</p></b>
                  <h3>{this.state.mapdata.daily.data[0].temperatureLow}°F</h3>
                  <p>WindSpeed : {this.state.mapdata.daily.data[0].windSpeed}</p>
                  <p>Humidity : {this.state.mapdata.daily.data[0].humidity}</p>
                  <p>Pressure : {this.state.mapdata.daily.data[0].pressure}</p>
                  </center>
                 </div>
               </div>



               <div className="col-md-2 col-12" style={{background:"#ceb77e"}}>
                 <div>
                  <center>
                  <h5>Day after tomorrow </h5>
                 <img
                    src={"images/weather/PNG/"+this.state.mapdata.daily.data[1].icon+".png"}
                    className="card-img-top"
                    alt={this.state.mapdata.daily.data[1].icon}
                    style={{width:"90%"}}
                  />
                  <b><p style={{color:"rgba(37, 35, 15, 0.64)",textTransform:"uppercase"}}>{this.state.mapdata.daily.data[1].summary}</p></b>
                  <h3>{this.state.mapdata.daily.data[1].temperatureLow}°F</h3>
                  <p>WindSpeed :{this.state.mapdata.daily.data[1].windSpeed}</p>
                  <p>Humidity :{this.state.mapdata.daily.data[1].humidity}</p>
                  <p>Pressure :{this.state.mapdata.daily.data[1].pressure}</p>
                  </center>
                 </div>
               </div>


               <div className="col-md-2 col-12"  style={{background:"#b9a568"}}>
                 <div>
                  <center>
                  <h5>Day after 2 days!!</h5>
                 <img
                    src={"images/weather/PNG/"+this.state.mapdata.daily.data[2].icon+".png"}
                    className="card-img-top"
                    alt={this.state.mapdata.daily.data[2].icon}
                    style={{width:"90%"}}
                  />
                  <b><p style={{color:"rgba(37, 35, 15, 0.64)",textTransform:"uppercase"}}>{this.state.mapdata.daily.data[2].summary}</p></b>
                  <h3>{this.state.mapdata.daily.data[2].temperatureLow}°F</h3>
                  <p>WindSpeed :{this.state.mapdata.daily.data[2].windSpeed}</p>
                  <p>Humidity :{this.state.mapdata.daily.data[2].humidity}</p>
                  <p>Pressure :{this.state.mapdata.daily.data[2].pressure}</p>
                  </center>
                 </div>
               </div>



               <div className="col-md-2 col-12"  style={{background:"#ceb77e"}}>
                 <div>
                  <center>
                    <h5>3 days from Now!!</h5>
                 <img
                    src={"images/weather/PNG/"+this.state.mapdata.daily.data[3].icon+".png"}
                    className="card-img-top"
                    alt={this.state.mapdata.daily.data[3].icon}
                    style={{width:"90%"}}
                  />
                  <b><p style={{color:"rgba(37, 35, 15, 0.64)",textTransform:"uppercase"}}>{this.state.mapdata.daily.data[3].summary}</p></b>
                  <h3>{this.state.mapdata.daily.data[3].temperatureLow}°F</h3>
                  <p>WindSpeed : {this.state.mapdata.daily.data[3].windSpeed}</p>
                  <p>Humidity : {this.state.mapdata.daily.data[3].humidity}</p>
                  <p>Pressure : {this.state.mapdata.daily.data[3].pressure}</p>
                  </center>
                 </div>
               </div>

               
             </div>
            
             </div>
             </center>
            </div>
        )}
      </div>
    );
  }
}
export default Besttime;
