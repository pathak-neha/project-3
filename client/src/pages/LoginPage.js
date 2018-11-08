import React, { Component } from "react";
import Login from "../components/Login"
//import Router from "react-router-dom"
import "./styles.css"

const loginPage = (props) => (
    <div>
        <div className="jumbotron jumbotron-fluid" id="hero-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <Login />
                </div>
            </div>

        </div>
    </div>
)

export default loginPage;
