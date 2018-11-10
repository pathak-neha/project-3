import React, { Component } from "react";
import "./Login.css";
import { BrowserRouter as Link ,Router, Route, Switch } from "react-router-dom";
import API from "../../API/API";


class Login extends Component {
    state = {
        email: "",
        password: "",
        user: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        localStorage.removeItem("id")
        //if (this.state.username && this.state.password) {
        //What this is doing is getting the user from the data base, and returning it up to the login page
        API.getUser()
            .then(res => {
                this.setState({
                    email: "",
                    password: "",
                    user: res.data
                })
                console.log(this.state.user)
                var id=this.state.user[0]._id;
                localStorage.setItem("id",id)
            })
            .catch(err => console.log(err));
        
       
        //}
    };

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">EMAIL ADDRESS</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email (required)"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">PASSWORD</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password (required)"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    //disabled={!(this.state.email && this.state.password)}
                    onClick={this.handleFormSubmit}>
                    Submit
                </button>
                &nbsp;or <button className="btn btn-secondary"><a href="./CreateUser">SIGN UP</a></button>
            </form>
        )
    }
}

export default Login;