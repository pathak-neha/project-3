import React, { Component } from "react";
import CreatePage from "../components/CreateProject"
//import Router from "react-router-dom"
import "./styles.css"

class createPage extends Component {
    state = {
        id: ""
    }
    //I don't know what we are doing with this
    //This is what i use to pass the ID upwards to the app.js
    //I don't know how to do storage and i think pass id to app and store it over there is better
    passChildId = (userId) => {
        //this line is used to pass the id up the chain
    }
    

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid" id="hero-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <CreatePage />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
// const loginPage = (props) => (
//     <div>
//         <div className="jumbotron jumbotron-fluid" id="hero-bg">
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <Login />
//                 </div>
//             </div>

//         </div>
//     </div>
// )

export default createPage;
