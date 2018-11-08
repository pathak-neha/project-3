import React, { Component } from "react";
import "./SignUp.css";
import API from "../../utils/API"

class SignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        cell: "",
        imageURL: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.email && this.state.password) {
            API.createUser({
                firstName: this.state.firstName,
                lastName: this.state.firstName,
                password: this.state.password,
                email: this.state.email,
                cell: this.state.cell,
                imageURL: this.state.imageURL
            })
        }
    };

    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name"
                            name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name"
                            name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                    </div>
                </div> <br />
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter email (required)"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
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
                &nbsp;or <a className="btn btn-secondary" href="/">BACK TO LOGIN</a>
            </form>
        )
    }
}

export default SignUp;