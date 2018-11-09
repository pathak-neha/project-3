import React, { Component } from "react";
import NotFound from "../components/NotFound";

const notFoundPage = (props) => (
        <div className="row" id="login-div">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row justify-content-center">
                        <NotFound />
                    </div>
                </div>
            </div>
        </div>
    
)

export default notFoundPage;
