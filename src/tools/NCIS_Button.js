import React from "react";
import { orange } from "../assets/colors";

export const NCIS_Button = (props) => {
    const {text,icon,onClick,className,buttonColor}=props
  return (
    <button
      className={`btn text-light ${className}`}
      style={{
        background: buttonColor||orange,
        borderRadius: 50,
        fontSize: "14px",
        width: icon?"190px":"170px",
        // textAlign:icon&&"left"
      }}
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={onClick}
    >
              {text}
      <img src={icon} style={{position:"absolute",width:50,marginTop:-13}}/>
    </button>
  );
};
