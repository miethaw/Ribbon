import React from "react";
import { paleViolet, violet } from "../../../assets/colors";

export const PledgeProgress = (props) => {
  const {step, media }=props
  console.log(step);
  const circleStyle = {
    width:( media.desktop || media.tablet ) ? 40 : 30,
    height: ( media.desktop || media.tablet ) ? 40 : 30,
    borderRadius: "50%",
    lineHeight: 2,
    textAlign: "center",
    fontSize: media.mobile ? 13 : 19,
    color: "#ffffff",
  };
  console.log(">>>",media)
  return (
    <div style={{marginTop: 30}}>
      <div
        style={{
          height: 5,
          background: violet,
          opacity: 0.2,
          position: "relative",
          top: 22,
          zIndex: -1,
        }}
      />

      <div className="row m-0 justify-content-between">
        <div className="col-3" style={{...circleStyle,background:step===1?violet:paleViolet}}>
          1
        </div>
        <div className="col-3" style={{...circleStyle,background:step===2?violet:paleViolet}}>
          2
        </div>
        <div className="col-3" style={{...circleStyle,background:step===3?violet:paleViolet}}>
          3
        </div>
      </div>
    </div>
  );
};

// import StepProgressBar from 'react-step-progress';
// // import the stylesheet
// import 'react-step-progress/dist/index.css';

// // setup the step content
// const step1Content = <h1>Step 1 Content</h1>;
// const step2Content = <h1>Step 2 Content</h1>;
// const step3Content = <h1>Step 3 Content</h1>;

// // setup step validators, will be called before proceeding to the next step
// function step2Validator() {
//   // return a boolean
// }

// function step3Validator() {
//   // return a boolean
// }

// function onFormSubmit() {
//   // handle the submit logic here
//   // This function will be executed at the last step
//   // when the submit button (next button in the previous steps) is pressed
// }

// // render the progress bar
// export const PledgeProgress=()=>{
//   return(<StepProgressBar
//   startingStep={0}
//   onSubmit={onFormSubmit}
//   steps={[
//     {
//       label: 'Step 1',
//       subtitle: '10%',
//       name: 'step 1',
//       content: step1Content
//     },
//     {
//       label: 'Step 2',
//       subtitle: '50%',
//       name: 'step 2',
//       content: step2Content,
//       validator: step2Validator
//     },
//     {
//       label: 'Step 3',
//       subtitle: '100%',
//       name: 'step 3',
//       content: step3Content,
//       validator: step3Validator
//     }
//   ]}
// />)
// }
