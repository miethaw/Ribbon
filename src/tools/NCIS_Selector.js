import React from "react";
import { orange, violet } from "../assets/colors";
import Messages from "../assets/Messages.json";

export const NCIS_Selector = (props) => {
  const { placeHolder, onClick, menuVisible, _handleSelectOption } = props;
  return (
    <div onClick={onClick}>
      <input
        type="text"
        className="form-control shadow px-4 py-2"
        placeholder={placeHolder}
        disabled
        style={{
          borderRadius: 20,
          border: menuVisible ? `2px solid ${violet}` : "none",
          // border:"red",
          background: "#ffffff",
          cursor: "pointer",
        }}
      />
      <span
        style={{
          float: "right",
          position: "relative",
          marginTop: "-35px",
          // fontSize: "16px",
          marginRight: "20px",
          width: "25px",
          height: "25px",
          background: "#999999",
          textAlign: "center",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        <i className="fa fa-chevron-down" onClick={onClick}></i>
      </span>
      {menuVisible ? (
        <Options
          messages={Messages.messages}
          _handleSelectOption={_handleSelectOption}
        />
      ) : null}
    </div>
  );
};

const Options = (props) => {
  const { messages, _handleSelectOption } = props;
  const messageText = messages.map((v, k) => v.message);

  const _handleMouseEnter = (e) => {
    document.getElementById(e.target.id).style.background = "red";
  };
  const _handleMouseLeave = (e) => {
    document.getElementById(e.target.id).style.background = "none";
  };
  console.log(messageText);
  return (
    <ul
      className="bg-light shadow mt-2 w-100 py-4"
      style={{
        borderRadius: 25,
        listStyleType: "none",
        // position: "absolute",
        height: 150,
        overflowY: "scroll",
        // top: 0,
        // left: 0,
        margin: 0,
      }}
    >
      {messages.map((v1, k1) => (
        <React.Fragment>
          <li style={{ color: orange, fontWeight: "bold" }}>{v1.title}</li>
          <br />
          {v1.message.map((v2, k2) => (
            <p
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => _handleMouseEnter(e)}
              onMouseLeave={(e) => _handleMouseLeave(e)}
              id={v2.id + v2.text}
              onClick={() => _handleSelectOption(v2.text)}
            >
              {v2.text}
            </p>
          ))}
        </React.Fragment>
      ))}
    </ul>
  );
};
