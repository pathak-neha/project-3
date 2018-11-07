import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            // add some code here
        }
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
                    disabled={!(this.state.email && this.state.password)}
                    onClick={this.handleFormSubmit}>
                    SUBMIT
                </button>
                &nbsp;or <a className="btn btn-secondary" href="./signup">SIGN UP</a>
            </form>
        )
    }
}

export default Login;