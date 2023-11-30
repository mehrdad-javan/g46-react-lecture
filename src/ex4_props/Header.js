import React from "react";

const Header = (props) => {
  return (
    <header
      className={`container-fluid bg-${
        props.bgColor ? props.bgColor : "secondary"
      } text-white pt-5 pb-5`}
    >
      <div className="container">
        <h2>{props.text && props.text}</h2>
        <h2>{!props.text && "Default Header Text"}</h2>
      </div>
    </header>
  );
};

export const Nav = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={props.logo} width={100} height={30} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
