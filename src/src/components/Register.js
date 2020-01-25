import React, { Component } from 'react'
import { register } from './UserFunctions'
import './stylesheet/register.css'
class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      role : '',
      pno: '',
      tourist:'',
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

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      tourist:this.state.tourist,
      pno:this.state.pno,
      password: this.state.password,
      role : this.state.role
    }

    register(newUser).then(res => {
      console.log(newUser);
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container" id="Registrationform">
        <div className="row container1">
          <div className="col-md-8 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
             <center> <h1 className="h3 mb-3 font-weight-normal" style={{fontSize:"40px"}}>Register</h1></center>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your last name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
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
                <label htmlFor="name">State Tourism</label>
                <input
                  type="text"
                  className="form-control"
                  name="tourist"
                  placeholder="Enter your state tourism"
                  value={this.state.tourist}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="pno"
                  placeholder="Enter your Contact Number"
                  value={this.state.pno}
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
              <div className="form-group">
              <input
                  type="radio"
                  name="role"
                  value={"admin"}
                  onChange={this.onChange}
                />

                <label htmlFor="password" style={{marginLeft:"20px"}} >Admin</label>
                
                <input
                type="radio"
                name="role"
                value={"normal"}
                onChange={this.onChange}
                style={{marginLeft:"20px"}}
              />
                <label htmlFor="password" style={{marginLeft:"20px"}}>Normal User</label>
               
                
              </div>
              
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                id="ssubmit"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
