import Banner from "../components/register/Banner";
import SignUp from "../components/register/SingUp";
import { Helmet } from "react-helmet";
import React from "react";

const registerpage = () => {
  return (
    <>
      {" "}
      <div className="register" style={{ display: "flex" }}>
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
