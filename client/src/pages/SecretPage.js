import React, { Component } from "react";
import Secret from "../components/Secret";

const secretPage = (props) => (
        <div className="row" id="login-div">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row justify-content-center">
                        <Secret />
                    </div>
                </div>
            </div>
        </div>
    
)

export default secretPage;
