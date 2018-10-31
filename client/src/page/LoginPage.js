import React from "react";
import Login from "../compoment/Login"

const loginPage = props => (
    <div className="jumbotron jumbotron-fluid">
        {props.childern}
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <h1>Login Page</h1>
                </div>
                <div className="col-6 ">
                    <Login />
                </div>
            </div>
        </div>
    </div>
)
export default loginPage;
