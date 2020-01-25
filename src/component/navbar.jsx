import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import "./stylesheets/navbar.css";
class Navbar extends Component {

  state = {
    navstatedata: this.props.statedatapass,
    x:0,
    y:0
  };


  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
  
  functionpass = dataset => {
    document.getElementById("modelname").innerHTML = dataset.name;
    document.getElementById("modelimg").src = dataset.images;
    document.getElementById("modeinfo").innerHTML = dataset.info;
    document.getElementById("loc").href = dataset.location;
    console.log(dataset);
  };
  functionpass1 = dataset => {
    document.getElementById("modelname").innerHTML = dataset.name;
    document.getElementById("modelimg").src = dataset.image;
    document.getElementById("modeinfo").innerHTML = "<b><center>(Rs."+dataset.price+")</center></b><br>"+dataset.description;
    console.log(dataset);
  };
  funproduinside = n => {
    return this.state.navstatedata[n].products.map((mydata,index) => {     
      return (<a
      key={index} 
      className="dropdown-item"
      onClick={() => this.functionpass1(mydata)}
      data-toggle="modal"
      data-target="#mymodalnavbar"
      >{mydata.name}</a>
    );
    });
  };
  funplaceinside = n => {
    return this.state.navstatedata[n].tourist.map((mydata,index) => {
      return (
         <a
        key={index} 
          className="dropdown-item"
          onClick={() => this.functionpass(mydata)}
          data-toggle="modal"
          data-target="#mymodalnavbar"
        >
          {mydata.name}
        </a>
      );
    });
  };
  linksmake = this.state.navstatedata.map((data, index) => {
    return (
      <li className="dropdown-submenu" key={index}>
        <a className="dropdown-item dropdown-toggle">{data.name}</a>
        <ul
          className="dropdown-menu dropdown-menu-left"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="dropdown-submenu">
            <a className="dropdown-item dropdown-toggle">products</a>
            <ul
              className="dropdown-menu dropdown-menu-left"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {this.funproduinside(index)}
              {this.setState({y:index})}
            </ul>
          </li>
          <li className="dropdown-submenu">
            <a className="dropdown-item dropdown-toggle">places</a>
            <ul
              className="dropdown-menu dropdown-menu-left"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {this.funplaceinside(index)}
              {this.setState({x:index})}
            </ul>
          </li>
        </ul>
      </li>
    );
  });

  render() {

    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    console.log(this.state.navstatedata);
    return (
      <div id="navbar">
        <nav className="navbar navbar-expand-lg navbar-light"  style={{fontSize: "20px",zIndex:10,backgroundImage: "linear-gradient(to right, rgba(191, 149, 63, 0.67), rgba(252, 246, 186, 0.64), rgba(179, 135, 40, 0.64), rgba(251, 245, 183, 0.83), rgba(170, 119, 28, 0.57))" }}>
          <Link className="navbar-brand hvr-float-shadow" to="/Home">
            <h1> Tourism</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <Link
                  className="nav-item nav-link active hvr-grow-shadow"
                  to="/Home"
                >
                  Home
                </Link>

                
              <li className="nav-item dropdown hvr-grow-shadow">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  States
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="nav1">
                  {this.linksmake}

                  {/* <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a> */}
                  
                </div>
              </li>
              <Link
              className="nav-item nav-link active hvr-grow-shadow"
              to="/aboutus"
            >
              AboutUs
            </Link>
            </ul>
            <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle btn-info btn-lg"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <span className="fas fa-user-alt"></span> User 
  </button>
  <div className="dropdown-menu" style={{flexDirection: "row", minWidth: "0rem"}} aria-labelledby="dropdownMenuButton">
  
    {localStorage.usertoken ? userLink : loginRegLink}
  </div>
</div>
          </div>
        </nav>
        
        <div
          className="modal fade"
          id="mymodalnavbar"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
          style={{padding:0}}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  <font id="modelname"></font>
                </h5>
                
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body" id="modelname">
                <div className="card container">
                  <img
                    id="modelimg"
                    className="card-img-top"
                    src=""
                    alt="Card image cap"
                  />
                  <div className="card-body">
                  <p className="card-text" id="modep"></p>
                    <p className="card-text" id="modeinfo"></p>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
              <button className="btn btn-secondary">              
                <a className="aloc" id="loc" style={{textDecoration:"none",color:"white"}}>location</a>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar)