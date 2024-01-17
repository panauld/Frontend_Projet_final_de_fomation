import React, { useState } from "react";
import "../globals.css";

const Header = ({
  onHomeClick,
  onCatalogueClick,
  isLoggedIn,
  onLoginClick,
  onLogout,
}) => {
  return (
    <header>
      <div class="logo-nav">
        <div class="logo">
          <img src="../../img/Logo.png" />
        </div>
        <nav>
          <ul class="nav">
            <li>
              <a href="#" onClick={onHomeClick}>
                HOME
              </a>
            </li>
            <li>
              <a href="#" onClick={onCatalogueClick}>
                CATALOGUE
              </a>
            </li>
            <li>
              <a href="#" onClick={isLoggedIn ? onLogout : onLoginClick}>
                {isLoggedIn ? "LOGOUT" : "LOGIN"}
              </a>
              {isLoggedIn ? (
                <img
                  src="../../img/img_online.png"
                  /*src={img_online.src}*/ alt="Online"
                />
              ) : (
                <img
                  src="../../img/img_offline.png"
                  /*src={img_offline.src}*/ alt="Offline"
                />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
