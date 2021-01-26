import React, { useEffect, useRef, useState } from "react";
import { NCIS_Selector } from "../../../tools/NCIS_Selector";
import { NCIS_TextBox } from "../../../tools/NCIS_TextBox";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import RibbonImages from "../../../assets/RibbonImages.json";
import { violet } from "../../../assets/colors";

export const PledgeForm = (props) => {
  const {
    _handleSelect,
    _handleSelectOption,
    menuVisible,
    _handleRibbonClick,
    _handleTextChange,
    step,
    _handleReview,
    _handleConfirm,
    _handleEdit,
    recipientName,
    senderName,
    message,
  } = props;

  return (
    <div className="py-5">
      <form>
        <div>
          <strong>{`Step ${step}:`}</strong>
        </div>
        <label style={{ fontWeight: "bold", fontSize: 25 }}>
          {step === 1
            ? "Choose Your Ribbon and Create Your Message"
            : step === 2
            ? "Review Your Ribbon"
            : "Share Your Message"}
        </label>
        <br />
        {step === 3 &&
          "Click Back to edit or select on the following icons to share your message"}
        {step === 1 && <PledgeRibbons {...props} />}
        {/* //  _handleSelect={_handleSelect} _handleRibbonClick={_handleRibbonClick} menuVisible={menuVisible} */}
        {step === 4 ? (
          <ThankYouCard />
        ) : step === 3 ? (
          <ShareForms />
        ) : (
          <div className="form-group row m-0 justify-content-center py-4">
            <div className="col-6">
              <NCIS_TextBox
                placeHolder={step === 2 ? recipientName : "Add Recipient Name"}
                handleTextChange={_handleTextChange}
                id={"recipient"}
                disabled={step === 2 && true}
              />
            </div>
            <div className="col-6">
              <NCIS_TextBox
                placeHolder={step === 2 ? senderName : "Add Sender Name"}
                handleTextChange={_handleTextChange}
                id={"sender"}
                disabled={step === 2 && true}
              />
            </div>
            <div className="col-12 py-4">
              <NCIS_Selector
                placeHolder={message !== "" ? message : "Select Message"}
                onClick={step != 2 ? _handleSelect : undefined}
                menuVisible={menuVisible}
                _handleSelectOption={_handleSelectOption}
              />
            </div>
            {!menuVisible && step === 1 ? (
              <NCIS_Button text={"Review"} onClick={_handleReview} />
            ) : step === 2 ? (
              <React.Fragment>
                <NCIS_Button
                  text={"Edit"}
                  onClick={_handleEdit}
                  className="mx-2"
                />
                <NCIS_Button
                  text={"Confirm"}
                  onClick={_handleConfirm}
                  className="mx-2"
                />
              </React.Fragment>
            ) : null}
          </div>
        )}
      </form>
    </div>
  );
};

const PledgeRibbons = (props) => {
  const { _handleRibbonClick, menuVisible } = props;
  const [selected, setSelected] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const PopupDiv = (e) => document.getElementById(e.target.id + "popup");
  const RibbonDiv = (e) => document.getElementById(e.target.id);
  const prevRibbonDiv = (e) => document.getElementById(e);

  const prevSelectedRef = useRef();

  const _handleClick = (e) => {
    prevSelectedRef.current = selectedId;
    const prevSelectedId = prevSelectedRef.current;

    setSelected(true);
    setSelectedId(e.target.id);

    RibbonDiv(e).style.background = violet;
    RibbonDiv(e).style.color = "#ffffff";
    if (selectedId != null) {
      prevRibbonDiv(prevSelectedId).style.background = "none";
      prevRibbonDiv(prevSelectedId).style.color = "#000000";
      _handleRibbonClick(false);
    }
    PopupDiv(e).style.visibility = "hidden";
    _handleRibbonClick(true);
  };

  const _handleHover = (e) => {
    console.log(e.target.id);
    if (selected === false) {
      RibbonDiv(e).style.background = "#999999";
      if (PopupDiv(e)) {
        PopupDiv(e).style.visibility = "visible";
      } else {
        return;
      }
    }
  };
  const _handleLeave = (e) => {
    if (selected === false) {
      RibbonDiv(e).style.background = "none";
      RibbonDiv(e).style.color = "#000000";

      if (PopupDiv(e)) {
        PopupDiv(e).style.visibility = "hidden";
      } else {
        return;
      }
    }
  };
  return (
    <div className="d-flex fled-row flex-wrap">
      {RibbonImages.Ribbons.map((v, k) => (
        <div className="w-25  py-1" style={{ cursor: "pointer" }}>
          <div
            id={k}
            style={{ borderRadius: "50px" }}
            onClick={(e) => _handleClick(e)}
            onMouseOver={(e) => _handleHover(e, v.name)}
            onMouseLeave={(e) => _handleLeave(e, v.name)}
          >
            <img src={v.imgaeUrl} alt="ribbons" style={{ width: 30 }} id={k} />
            {v.name}
          </div>
          <div
            className="bg-light shadow"
            id={k + "popup"}
            style={{ position: "absolute", width: 250, visibility: "hidden" }}
            onMouseLeave={(e) => _handleLeave(e)}
            onMouseOver={(e) => _handleHover(e)}
          >
            Hello
          </div>
        </div>
      ))}
    </div>
  );
};

const ThankYouCard = () => {
  return (
    <div
      className="bg-light shadow mt-2 w-100 p-5"
      style={{
        borderRadius: 25,
        // position: "absolute",
        // top: 0,
        // left: 0,
        margin: 0,
      }}
    >
      <strong>Thank you for Pledging</strong>
      <br />
      {/* <p></p> */}
      <div className="row justify-content-center">
        <NCIS_Button
          text={"Back To Home"}
          // onClick={_handleEdit}
          className="mx-2"
          buttonColor={violet}
        />
        <NCIS_Button
          text={"Pledge Another"}
          // onClick={_handleConfirm}
          className="mx-2"
        />
      </div>
    </div>
  );
};

const ShareForms = () => {
  return (
    <div className="row justify-content-center">
      <div
        className="col-12 shadow"
        style={{ width: 35, height: 35, background: "#ffffff", lineHeight: 1 }}
      >
        <i className="fa fa-facebook-f" />
      </div>
      <br />
      <NCIS_Button
        text={"Back To Home"}
        // onClick={_handleEdit}
        className="mx-2"
        buttonColor={violet}
      />
      <NCIS_Button
        text={"Pledge Another"}
        // onClick={_handleConfirm}
        className="mx-2"
      />
    </div>
  );
};
