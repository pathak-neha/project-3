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
        imageUrl:null,
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleImgFile=event=>{
        // const{name}=event.target;
        // const {files}=event.target.files[0]
        // this.setState({
        //     [name]:files
        // })
        this.setState({
            imageUrl:event.target.files[0]
        })
        // console.log(event)
    }
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.userName && this.state.Password && this.state.lastName && this.state.firstName) {
            API.createUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.userName,
                password: this.state.Password,
                email: this.state.Email,
                cell: this.state.Mobile,
                imageUrl: this.state.imageUrl,
            }).then(res=>{console.log(res)}
               )
                .catch(err => console.log(err));
        }
    }


    render() {
        return (
            <div className="input-group mb-3">
                <form>
                    <div className="input-group-prepend">
                        <label>
                            User Name:
            <input type="text" name="userName" value={this.state.userName}  onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <div className="input-group-prepend">
                        <label>
                            First Name:
               <input type="text" name="firstName" value={this.state.firstName}  onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <div className="input-group-prepend">
                        <label>
                            Last Name:
               <input type="text" name="lastName" value={this.state.lastName}  onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <div className="input-group-prepend">
                        <label>
                            Password:
               <input type="text" name="Password" value={this.state.Password}  onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div className="input-group-prepend">
                        <label>
                            Email:
               <input type="text" name="Email" value={this.state.Email}  onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div className="input-group-prepend">
                        <label>
                            Mobile (Optional):
               <input type="text" name="Mobile" value={this.state.Mobile}  onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div className="input-group-prepend">
                        <label>
                            iMage URL (Optional):
               <input 
               type="file" 
               name="imageUrl" 
            //    value={this.state.imageUrl} 
               onChange={this.handleImgFile}/>
                        </label>
                    </div>
                    <button  type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Create user</button>
                </form>
            </div>
        )
    }
}
export default createUser;