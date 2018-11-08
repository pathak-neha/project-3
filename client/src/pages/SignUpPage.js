import React, { Component } from "react";
import SignUp from "../components/SignUp"
import "./styles.css"

const signUpPage = (props) => (
    <div>
        <div className="jumbotron jumbotron-fluid" id="hero-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <SignUp />
                </div>
            </div>

        </div>
    </div>
)

export default signUpPage;
