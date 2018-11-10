import React, { Component } from "react";
import "./CreateProject.css";
import API from "../../API/API.js"

class createProject extends Component {
    state = {
        projectName: "",
        repoURL: "",
        appURL: "",
        imageURL: "",
        destription: "",
        keywords: "",
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        //if (this.state.userName && this.state.Password && this.state.lastName && this.state.firstName) {
        API.createProject({
            projectName: this.state.projectName,
            repoURL: this.state.repoURL,
            appURL: this.state.appURL,
            imageURL: this.state.imageURL,
            destription: this.state.destription,
            keywords: this.state.keywords
        }).then(res => { console.log(res) }
        )
            .catch(err => console.log(err));
        // }
    }


    render() {
        return (
            <div className="input-group mb-3">
                <form>
                    <div className="input-group-prepend">
                        <label>
                            Project Name:
            <input type="text" name="projectName" value={this.state.projectName} onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <div className="input-group-prepend">
                        <label>
                            Git Hub Repo Url:
               <input type="text" name="repoURL" value={this.state.repoURL} onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <div className="input-group-prepend">
                        <label>
                            App Url:
               <input type="text" name="appURL" value={this.state.appURL} onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <div className="input-group-prepend">
                        <label>
                            Image Url (Optional):
               <input type="text" name="imageURL" value={this.state.imageURL} onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <div className="input-group-prepend">
                        <label>
                            Destription (Optional):
               <input type="text" name="destription" value={this.state.destription} onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <div className="input-group-prepend">
                        <label>
                            Keywords (Optional):
               <input type="text" name="keywords" value={this.state.keywords} onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Create Project</button>
                </form>
            </div>
        )
    }
}
export default createProject;