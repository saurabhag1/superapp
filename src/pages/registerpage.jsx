import Banner from "../components/Banner";
import SignUp from "../components/SingUp";
import { Helmet } from "react-helmet";
import "../APP.css";
import React from "react";

const registerpage = () => {
  return (
    <>
      {" "}
      <div style={{ display: "flex" }}>
        <Helmet>
          <style>
            {"body { background-color: black; overflow-x: hidden;  }"}
          </style>
        </Helmet>
        <Banner />
        <SignUp />
      </div>{" "}
    </>
  );
};

export default registerpage;
