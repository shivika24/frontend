import React, { Component } from 'react'
import { login } from './UserFunctions'
import './stylesheet/login.css'
import vid from "./vid.mp4"
import jwt_decode from 'jwt-decode';
import  { Redirect, Link } from 'react-router-dom'
import Navbar1 from './Navbar';


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        if(res.error){
          alert(res.error);
        }
        else{
          const decoded = jwt_decode(res)
          const rolis=decoded.role
          console.log(rolis)
          if(rolis=="admin")
           {
            localStorage.setItem('keys',decoded._id)
            window.location="http://localhost:3000/admin"
          }
          else
          window.location="http://localhost:3000/Home"
        }
      }
    })
  }

  render() {
    return (
      <div className="container">
      <video autoPlay muted loop id="myVideo">
<source src={vid} type="video/mp4"/>
</video>
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
         <form noValidate onSubmit={this.onSubmit}>
          <center> <h1 className="h3 mb-3 font-weight-normal ">LOGIN</h1></center>
           <div className="form-group">
             <label htmlFor="email">Email address</label>
             <input
               type="email"
               className="form-control"
               name="email"
               placeholder="Enter email"
               value={this.state.email}
               onChange={this.onChange}
             />
           </div>
           <div className="form-group">
             <label htmlFor="password">Password</label>
             <input
               type="password"
               className="form-control"
               name="password"
               placeholder="Password"
               value={this.state.password}
               onChange={this.onChange}
             />
           </div>
           <button
             type="submit"
             className="btn btn-lg btn-primary btn-block"
           >
             Sign in
           </button>
           <br/>
           <br/>
           <center><b>Not Registered Yet!!<Link to="/register"> click here...</Link></b></center>

         </form>
       </div>
     </div>
       </div>
    )
  }
}

export default Login
