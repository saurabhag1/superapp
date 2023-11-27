import backimg from "../assets/images/banner.png";
import style from "./Banner.module.css";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className={style.text}>
        <img src={backimg} />
        <p className={style.bottom}>
          {" "}
          Discover new things on <div>SuperApp</div>{" "}
        </p>{" "}
      </div>
    </>
  );
};

export default Banner;
