import React, { useState } from "react";
import { PledgeCard } from "../components/pledgeCard";
import { PledgeForm } from "../components/pledgeForm";
import { PledgeFormForMobile } from "../components/PledgeFormForMobile";
import { PledgeProgress } from "../components/pledgeProgressBar";
import { withMedia } from "react-media-query-hoc";

const PledgeContainer = props => {
  const { media } = props
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
    console.log("step2")
    e.preventDefault();
    setStep(2);
  };
  const _handleConfirm = (e) => {
    e.preventDefault();
    setStep(3);
  };
  const _handleSelectOption = (e) => {
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
  let background = (media.desktop || media.tablet) ? "/pledgeBackground.svg" : "/PledgeBgMobo.png";
  console.log(recipientName, senderName, message);
  return (
    <div >
      <div id="testsvg">
        <img className="img-resposive" src={background} alt="bg-svg" style={{height:(media.desktop || media.tablet) && '96vh'}} />
      </div>
      <div className="container py-4 position-absolute">
        {
          (media.desktop || media.tablet) ?
            <div className="row">
              <div className="col-4" style={{ textAlign: 'center' }}>
                <PledgeCard recipientName={recipientName} senderName={senderName} message={message} media={media} />
              </div>

              <div className="col-8 py-4" style={{ height: '90vh', overflow: 'hidden' }}>
                <PledgeProgress step={step} media={media} />
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
            </div> :
            <div>

              <PledgeProgress step={step} media={media} />
              <PledgeFormForMobile
                step={step}
                 media={media}
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
                menuVisible={menuVisible} recipientName={recipientName} senderName={senderName} message={message}
                _handleRibbonClick={_handleRibbonClick} />
                
              {/*<PledgeForm
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
                */}
            </div>

        }

      </div>
    </div>
  );
};
export default withMedia(PledgeContainer)