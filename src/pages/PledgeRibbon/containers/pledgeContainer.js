import React, { useState } from "react";
import { PledgeCard } from "../components/pledgeCard";
import { PledgeForm } from "../components/pledgeForm";
import { PledgeProgress } from "../components/pledgeProgressBar";

export const PledgeContainer = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [step, setStep] = useState(1);
  const [recipientName, setRecipientName] = useState("");
  const [senderName, setSenderName] = useState("");

  const [message, setMessage] = useState("");
  const _handleEdit = () => {
    setStep(1);
  };
  const _handleSelect = () => {
    setMenuVisible(!menuVisible);
  };

  const _handleReview = (e) => {
    e.preventDefault();
    setStep(2);
  };
  const _handleConfirm = (e) => {
    e.preventDefault();
    setStep(3);
  };
  const _handleSelectOption=(e)=>{
    setMessage(e)
  }
  const _handleTextChange = (e) => {
    if (e.target.id === "recipient") {
      setRecipientName(e.target.value);
    } else {
      setSenderName(e.target.value);
    }
  };
  const _handleRibbonClick = (state) => {
    setMenuVisible(state);
  };
  console.log(recipientName,senderName,message);
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-4">
          <PledgeCard />
        </div>

        <div className="col-8 py-4">
          <PledgeProgress step={step} />
          <PledgeForm
            step={step}
            _handleConfirm={_handleConfirm}
            _handleEdit={_handleEdit}
            _handleTextChange={_handleTextChange}
            _handleReview={_handleReview}
            handleTextChange={_handleTextChange}
            _handleSelect={_handleSelect}
            _handleSelectOption={_handleSelectOption}
            recipientName={recipientName}
            message={message}
            senderName={senderName}
            menuVisible={menuVisible}
            _handleRibbonClick={_handleRibbonClick}
          />
        </div>
      </div>
    </div>
  );
};
