import React, { Component } from "react";
import "./CreateUser.css";
import API from "../../API/API.js"

class createUser extends Component {
    state = {
        userName: "",
        firstName: "",
        lastName: "",
        Password: "",
        Email: "",
        Mobile: "",
        imageUrl: null,
    }
    handleInputChange = event => {

        console.log("stuff")
        this.setState({
            [event.target.name]: event.target.value
        });

    };
    handleImgFile = event => {

        this.setState({
            imageUrl: event.target.files[0],
        })
        console.log("files")
        console.log(event.target.files[0])
        // console.log(event)
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.imageUrl)
        //if (this.state.userName && this.state.Password && this.state.lastName && this.state.firstName) {
        const data = new FormData();
        data.append('firstName', this.state.firstName);
        data.append('lastName', this.state.lastName);
        data.append('password', this.state.Password);
        data.append('email', this.state.Email);
        data.append('cell', this.state.Mobile);
        data.append('imageUrl', this.state.imageUrl);
        API.createUser(data).then(res => { console.log(res) }
        )
            .catch(err => console.log(err));

    }


    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="User Name"
                            name="userName" value={this.state.userName} onChange={this.handleInputChange} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First Name"
                            name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                    </div>
                    <div className="col">
                        <input type="text" name="lastName" className="form-control" placeholder="Last name"
                            value={this.state.lastName} onChange={this.handleInputChange} />
                    </div>
                    <div className="col">
                        <input type="text" name="Mobile" className="form-control" placeholder="Mobile"
                            value={this.state.Mobile} onChange={this.handleInputChange} />
                    </div>
                    <div className="col">
                        <label>
                            iMage URL (Optional):
                           <input
                                type="file"
                                name="imageUrl"
                                //    value={this.state.imageUrl} 
                                onChange={this.handleImgFile} />
                        </label>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter email (required)"
                        name="Email"
                        value={this.state.Email}
                        onChange={this.handleInputChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password (required)"
                        name="Password"
                        value={this.state.Password}
                        onChange={this.handleInputChange} />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    //disabled={!(this.state.email && this.state.password)}
                    onClick={this.handleFormSubmit}>
                    SUBMIT
                </button>
                &nbsp;or <a className="btn btn-secondary" href="/">BACK TO LOGIN</a>

            </form>
        )
    }
}
export default createUser;