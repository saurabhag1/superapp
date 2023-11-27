import Banner from "../components/Banner";
import SignUp from "../components/SingUp";
import "../APP.css";
import React from "react";

const registerpage = () => {
  return (
    <>
      {" "}
      <div style={{ display: "flex" }}>
        <Banner />
        <SignUp />
      </div>{" "}
    </>
  );
};

export default registerpage;
