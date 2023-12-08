import React, { useContext } from "react";
import Logoicon from "../assets/images/logo-icon.png"
import Logotext from "../assets/images/logo-text.png";
import Logolight from "../assets/images/logo-light-text.png";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { jwt, user, logOut } = useContext(AuthContext);
  return (
    <div>
      {jwt && user ? (
        <header className="topbar" data-navbarbg="skin6">
          <nav className="navbar top-navbar navbar-expand-md">
            <div className="navbar-header" data-logobg="skin6">
              <Link className="nav-toggler waves-effect waves-light d-block d-md-none" to="#">
                <i className="ti-menu ti-close"></i>
              </Link>
              <div className="navbar-brand">
                <a href="index.html">
                  <b className="logo-icon">
                    <img src={Logoicon} alt="homepage" className="dark-logo" />
                    <img src={Logoicon} alt="homepage" className="light-logo" />
                  </b>
                  <span className="logo-text">
                    <img src={Logotext} alt="homepage" className="dark-logo" />
                    <img src={Logolight} className="light-logo" alt="homepage" />
                  </span>
                </a>
              </div>
              <Link
                className="topbartoggler d-block d-md-none waves-effect waves-light"
                to="#"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="ti-more"></i>
              </Link>
            </div>
            <div className="navbar-collapse collapse" id="navbarSupportedContent">
              <ul className="navbar-nav float-left mr-auto ml-3 pl-1">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i data-feather="settings" className="svg-icon"></i>
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" href="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" href="#">
                      Another action
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav float-right">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="ml-2 d-none d-lg-inline-block">
                      <span>Hello,</span>{" "}
                      <span className="text-dark">
                        {user ? user.fullName : ""}
                      </span>{" "}
                      <i data-feather="chevron-down" className="svg-icon"></i>
                    </span>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                    <button className="dropdown-item" onClick={() => logOut()}>
                      <i data-feather="power" className="svg-icon mr-2 ml-1"></i>
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Header;
