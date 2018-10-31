import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Listing from "./pages/Listing";
import Analytics from "./pages/Analytics";

class Container extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Post") {
      return <Post />;
    } else if (this.state.currentPage === "Listing") {
      return <Listing />;
    } else {
      return <Analytics />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Container;
