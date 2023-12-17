import React, { useState } from "react";
import style from "./SingUp.module.css";
import { useNavigate } from "react-router-dom";
const Signupform = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    check: false,
  });
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [submission, setSubmission] = useState(false);

  const change = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    const { name, username, email, phone, check } = userDetails;
    if (name && username && email && phone && check) {
      window.localStorage.setItem("userData", JSON.stringify(userDetails));
      console.log("User Details Submitted:", userDetails);
      setSubmission(true);
      navigate("/entir");
    } else {
      setError(validation(userDetails));
    }
  };
  const validation = (value) => {
    const errors = {};
    if (!value.name) {
      errors.name = "Field is required";
    }
    if (!value.username) {
      errors.username = "Field is required";
    }
    if (!value.email) {
      errors.email = "Field is required";
    }
    if (!value.phone) {
      errors.phone = "Field is required";
    }
    if (value.check === false) {
      errors.check = "Check this box if you want to proceed";
    }
    return errors;
  };
  return (
    <div className={style.countainer}>
      <div className={style.text1}> Supper app </div> //{" "}
      <div className={style.text2}> Create your new account </div>{" "}
      <form className={style.form} onSubmit={submit}>
        <input
          className={style.input}
          onChange={(e) => change(e)}
          type="text"
          placeholder="Name"
          name="name"
          value={userDetails.name}
        />
        <label className={style.error}>{error.name}</label>
        <input
          className={style.input}
          onChange={(e) => change(e)}
          type="text"
          placeholder="UserName"
          name="username"
          value={userDetails.username}
        />
        <label className={style.error}>{error.username}</label>
        <input
          className={style.input}
          onChange={(e) => change(e)}
          type="email"
          placeholder="Email"
          name="email"
          value={userDetails.email}
        />
        <label className={style.error}>{error.email}</label>
        <input
          className={style.input}
          onChange={(e) => change(e)}
          type="tel"
          maxlength="12"
          placeholder="Mobile"
          name="phone"
          value={userDetails.phone}
        />
        <label className={style.error}>{error.phone}</label>
        <div className={style.checkboxtext}>
          <label>
            <input
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  [e.target.name]: e.target.checked,
                })
              }
              type="checkbox"
              name="check"
            />
            Share my registration data with Superapp
          </label>
        </div>
        {error ? <label className={style.error}>{error.check}</label> : ""}
        <button type="submit" className={style.singupbtn}>
          SIGN UP
        </button>
      </form>
      <div className={style.term}>
        By clicking on Sign up. you agree to Superapp{" "}
        <span style={{ color: "#72db73", cursor: "pointer" }}>
          Terms and Conditions of Use{" "}
        </span>{" "}
      </div>{" "}
      <div className={style.term2}>
        To learn more about how Superapp collects, uses, shares and protects
        your personal data please head Superapp{" "}
        <span style={{ color: "#72db73", cursor: "pointer" }}>
          Privacy Policy{" "}
        </span>{" "}
      </div>
    </div>
  );
};

export default Signupform;
