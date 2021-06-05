import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";

const Banner = () => {
  const handleOnClick = () => {
    document.body.classList.toggle("app-sidenav-toggled");
  };
  return (
    <nav className="app-topnav-bar">
      <div className="app-navbar-toggler" onClick={() => handleOnClick()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <div className="my-navbar-brand">
        <a href={`/home`}>
          <p className="mb-0 logo-title">Counter-App</p>
        </a>
      </div>
      <div className="my-navbar-items me-auto not-in-mobile">
        <div className="my-nav-item banner-name">{`Banner Text`}</div>
      </div>
      <div className="my-navbar-options ms-auto">
        <UncontrolledDropdown>
          <DropdownToggle nav>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-person-lines-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
            </svg>
          </DropdownToggle>
          <DropdownMenu right>
            <div className="account-micro-view">
              <p>{`Vinay M P`}</p>
            </div>
            <a className="logout-btn dropdown-item" href="/logout">
              Logout
            </a>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </nav>
  );
};

export default Banner;
