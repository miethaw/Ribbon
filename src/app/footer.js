import React from "react";
import { Link } from "react-router-dom";


export const Footer = () => {
    const linkStyle={ textDecoration: "none",color:"#000000" }
  return (
    <div className="d-flex flex-row justify-content-between p-1" style={{ background: "#ffffff" }}>
      <div>© NCIS All Rights Reserved</div>
      <div>
        <Link to="/privacy_policy" style={linkStyle}>
          Privacy Policy |
        </Link>
        <Link to="/terms_and_condition" style={linkStyle}>
          Terms and conditions apply
        </Link>
      </div>
    </div>
  );
};
