import React, { useContext } from "react";
import Jar from "../../../assets/images/Jar.png";
import Ribbon from "../../../assets/images/Ribbon.png";
import TabletRibbonBottle from "../../../assets/images/TabletRibbonBottle.png";

import RibbonBottle from "../../../assets/images/RibbonBottle.png";
import ButtonRibbon from "../../../assets/images/buttonRibbon.png";

import Background from "../../../assets/images/Background.png";
import BackgroundTablet from "../../../assets/images/BackgroundTablet.png";

import { Counter } from "./counter";
import { paleViolet } from "../../../assets/colors";
import { NCIS_Button } from "../../../tools/NCIS_Button";

export const Home = (props) => {
  const { media } = props;
  console.log(media.tablet);
  return (
    <div
      className="row m-0 pt-3 justify-content-between image-fluid"
      style={{
        backgroundImage: `url(${media.tablet ? BackgroundTablet : Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: media.tablet ? "center" : "none",
      }}
    >
      <HomeTitle media={media} />
      {media.tablet ? (
        <div className="col-12 p-0 img-fluid">
          <div className="row">
            <div className="w-100">
              <img src={TabletRibbonBottle} className="img-fluid"/>
              {/* <img src={Ribbon} className="img-fluid" />
            </div>
            <div className="w-50">
              <img src={Jar} className="img-fluid" /> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="col-lg-11 col-md-12 p-0 img-fluid">
          <img src={RibbonBottle} className="img-fluid" />
        </div>
      )}
      <Counter />
      {media.mobile || (
        <div className="row">
          <Highlights />
          <Sponsors />
        </div>
      )}
    </div>
  );
};
export default Home;
const HomeTitle = (props) => {
  const { media } = props;
  return (
    <div
      style={{
        position: "absolute",
        paddingTop: media.tablet ? "10rem" : "11.5rem",
        paddingLeft: media.tablet ? "7rem" : "11.5rem",
      }}
      className="text-light col-lg-6 col-md-8"
    >
      <span
        style={{
          fontSize: media.tablet ? 20 : 30,
          fontWeight: "bold",
          lineHeight: 1,
        }}
      >
        NCIS
      </span>
      <div
        style={{
          fontSize: media.tablet? 35 : 58,
          fontWeight: "bold",
          color: paleViolet,
          lineHeight: 1,
        }}
      >
        Virtual Ribbon
      </div>
      <div
        style={{
          fontSize: media.tablet  ? 35 : 58,
          fontWeight: "bold",
          paddingBottom: "100px",
          lineHeight: 1,
        }}
      >
        Challenge 2021
      </div>
      <div
        className="col-7 py-4"
        style={{ fontSize: 18, fontWeight: "lighter", lineHeight: 1 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <NCIS_Button text={"Pledge a Ribbon"} icon={ButtonRibbon} />
    </div>
  );
};

const Highlights = () => {
  return (
    <div
      style={{ paddingTop: "90px", paddingLeft: "100px" }}
      className="text-light w-50"
    >
      <div style={{ fontSize: 25, fontWeight: "bold" }}>Highlights</div>
      <div className="w-75 py-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </div>
    </div>
  );
};

const Sponsors = () => {
  return (
    <div
      style={{ paddingTop: "90px", paddingBottom: "90px", paddingLeft: "50px" }}
      className="row w-50"
    >
      <div style={{ fontSize: 25, fontWeight: "bold" }}>Sponsors</div>
      {new Array(8).fill(null).map((v) => (
        <div className="w-25 py-4">
          <div
            className="bg-light"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};
