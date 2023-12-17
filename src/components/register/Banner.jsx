import style from "./Banner.module.css";
import React from "react";
import backimg from "/src/assets/images/banner.png";

const Banner = () => {
  return (
    <>
      <div className={style.text}>
        <img className={style.text} src={backimg} />
        <p className={style.bottom}>
          {" "}
          Discover new things on <div>SuperApp</div>{" "}
        </p>{" "}
      </div>
    </>
  );
};

export default Banner;
