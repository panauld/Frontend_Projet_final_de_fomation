import React, { Component, useState } from "react";
import HeaderComponent from "../component/header-component";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showListFilm: false,
      isLoggedIn: false,
      show: false,
    };
  }

  handleLoginClick = () => {
    this.setState({ showLogin: true });
  };

  handleCatalogueClick = () => {
    this.setState({ showCatalogue: true });
  };

  handleCloseCatalogue = () => {
    this.setState({ showCatalogue: false });
  };

  handleLoginSuccess = () => {
    this.setState({ showLogin: false, isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div>
        <HeaderComponent
          onLoginClick={this.handleLoginClick}
          isLoggedIn={this.state.isLoggedIn}
          onLoginSuccess={this.handleLoginSuccess}
          onLogout={this.handleLogout}
          onCatalogueClick={this.handleCatalogueClick}
        />
      </div>
    );
  }
}
export default HeaderContainer;
