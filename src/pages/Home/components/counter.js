import React, { useContext } from "react";
import moment from "moment";
import "../../../counter.scss";
import { MediaContext } from "react-media-query-hoc";

export const Counter = () => {
  const TodayDate = moment(Date.now()).format("dddd MMMM DD, YYYY");
  const media = useContext(MediaContext);
  return media.mobile || media.tablet ? (
    <CounterMobile TodayDate={TodayDate} />
  ) : (
    <div
      className="col-3 text-center"
      style={{ position: "absolute", right: 4, top: -34 }}
    >
      <div
        style={{
          marginLeft: 50,
          marginRight: 50,
          borderBottom: "4px solid white",
          borderLeft: "4px solid white",
          borderRight: "4px solid white",
          position: "relative",
          top: 74,
          height: 250,
        }}
      />
      <div class="numbers">
        <div style={{ top: 10 }}>
          <span class="digit">$</span>
          <span class="digit">7</span>
          <span class="digit">2</span>
          <span class="digit">5</span>
          <span class="digit">9</span>
        </div>
      </div>
      <div style={{ fontSize: 23, fontWeight: "bolder" }}>
        Ribbons Collected
      </div>
      {TodayDate} 
    </div>
  );
};

export const CounterMobile = (props) => {
  const { TodayDate } = props;
  const media = useContext(MediaContext);
  // const tabletAndMobileSize=
  return (
    <div
      className="col-5 text-center"
      style={{ position: "absolute", right: 4 }}
    >
      <div
        style={{
          marginLeft: 50,
          marginRight: 50,
          background: "#ffffff",
          width: 250,
          height: 250,
          // position: "relative",
          borderRadius: "50%",
          marginTop: 50,
          boxShadow: "0 0 30px #9f9f9f",
        }}
      >
        <div class="numbers px-0 pb-3" style={{ paddingTop: "90px" }}>
          <div style={{ top: 10 }}>
            <span class="digit">$</span>
            <span class="digit">7</span>
            <span class="digit">2</span>
            <span class="digit">5</span>
            <span class="digit">9</span>
          </div>
        </div>
        <strong>Ribbons Collected</strong>
        <div>{TodayDate}</div>
      </div>
    </div>
  );
};
