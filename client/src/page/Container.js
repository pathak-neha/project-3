import Navbar from "../components/Navbar"
import LoginPage from "./LoginPage"
import DashBoard from "./DashBoard"
import Features from "./Features"
import AboutUs from "./AboutUs"

import React, { Component } from "react";
class Container extends Component {
    state = {
        currentPage: "LoginPage"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "DashBoard") {
            return <DashBoard />
        } else if (this.state.currentPage === "Features") {
            return <Features />
        } else if (this.state.currentPage === "LoginPage") {
            return <LoginPage />
        } else if (this.state.currentPage === "AboutUs") {
            return <AboutUs />
        }
        else {

        }
    };

    render() {
        return (
            <div>
                <Navbar
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}
            </div>
        );
    }
}

export default Container;