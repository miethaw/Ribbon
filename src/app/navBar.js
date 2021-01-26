import React from "react";
import { Link, withRouter } from "react-router-dom";
import { orange } from "../assets/colors";
import Logo from "../assets/images/logo.png"
import { NCIS_Button } from "../tools/NCIS_Button";
const NavBar = (props) => {
  const _handlePledge = () => {
    props.history.push("/pledge_a_ribbon");
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light justify-content-between p-1 w-100"
      style={{ position: "fixed" ,zIndex:999}}
    >
      <a className="navbar-brand" href="/">
        <img src={Logo} alt="logo" height='30'/>
      </a>
      <div className="d-flex flex-row w-50 justify-content-end">
        <div
          className="collapse navbar-collapse w-25 justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ fontSize: 14 }}
                to="/eventDetails"
              >
                Event Details
              </Link>
            </li>
          </ul>
        </div>
        <NCIS_Button text={"Pledge a Ribbon"} onClick={_handlePledge} />
        <div
          className="navbar-toggler w-25 text-center"
          // type="button"
          style={{ border: "none" }}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </div>
      </div>
    </nav>
  );
};
export default withRouter(NavBar);
