import React, { useState, useEffect } from "react";
import style from "./SingUp.module.css";
import { useHistory } from "react-router-dom";
import genre from "../pages/genre";

const SingUp = () => {
  // ttt
  const initialValues = { myname: "", username: "", email: "", mobile: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    if (!isChecked) {
      setError("Please check the checkbox before submitting.");
    }
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0) {
      history.push("../pages/genre.jsx"); // Replace "/other-page" with your desired URL
    }
  };

  const handleCheckboxChange = () => {
    setError("");
    setIsChecked(!isChecked);
  };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  // local storgae of data

  useEffect(() => {
    // Save form data to local storage
    localStorage.setItem("formData", JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    // Retrieve form data from local storage on component mount
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      console.log("Saved Form Data:", JSON.parse(savedFormData));
    }
  }, []);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // name error
    if (!values.myname) {
      errors.myname = "Name is required!";
    }
    // user name error
    if (!values.username) {
      errors.username = "Username is required!";
    }
    // email error
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    // mobile error
    if (!values.mobile) {
      errors.mobile = "Mobile Number is Required!";
    } else if (values.mobile.length > 10) {
      errors.mobile = "Enter a Valid Mobile Number of 10 digit";
    } else if (values.mobile.length < 10) {
      errors.mobile = "Enter a Valid Mobile Number of 10 digit";
    }

    // if (!values.password) {
    //   errors.password = "Password is required";
    // } else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    return errors;
  };

  return (
    <>
      <div className={style.countainer}>
        {" "}
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success"> Signed in successfully </div>
        ) : (
          <pre> {JSON.stringify(formValues, undefined, 2)} </pre>
        )}{" "}
        <div className={style.text1}> Supper app </div>{" "}
        <div className={style.text2}> Create your new account </div>{" "}
        <form onSubmit={handleSubmit} className={style.form}>
          <input
            className={style.input}
            type="text"
            name="myname"
            placeholder="Name"
            value={formValues.myname}
            onChange={handleChange}
          />{" "}
          <p className={style.error}> {formErrors.myname} </p>{" "}
          <input
            className={style.input}
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
          />{" "}
          <p className={style.error}> {formErrors.username} </p>{" "}
          <input
            className={style.input}
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />{" "}
          <p className={style.error}> {formErrors.email} </p>
          <input
            className={style.input}
            type="number"
            name="mobile"
            placeholder="Mobile"
            value={formValues.mobile}
            onChange={handleChange}
          />{" "}
          <p className={style.error}> {formErrors.mobile} </p>
          <div className={style.checkboxtext}>
            <input
              checked={isChecked}
              onChange={handleCheckboxChange}
              type="checkbox"
            />
            Share my registration data with Superapp{" "}
          </div>
          <p className={style.error}> {error} </p>
          <button className={style.singupbtn}>SING UP</button>
        </form>
        <div className={style.term}>
          By clicking on Sign up. you agree to Superapp{" "}
          <span style={{ color: "#72db73", cursor: "pointer" }}>
            Terms and Conditions of Use
          </span>
        </div>
        <div className={style.term2}>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp{" "}
          <span style={{ color: "#72db73", cursor: "pointer" }}>
            Privacy Policy
          </span>
        </div>{" "}
      </div>
    </>
  );
};

{
  /* 

  return (
    <>
      <div className={style.countainer}>
        <div className={style.text1}> Supper app </div>{" "}
        <div className={style.text2}> Create your new account </div>{" "}
        <form className={style.form}>
          <input
            className={style.input}
            value={firstName}
            placeholder="   Name"
            onChange={(e) => setFirstName(e.target.value)}
          />{" "}
          <input
            className={style.input}
            placeholder="   Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />{" "}
          <input
            className={style.input}
            placeholder="   Email"
            value={email}
            type="email"
            onChange={(e) => setemail(e.target.value)}
          />{" "}
          <input
            className={style.input}
            placeholder="   Mobile"
            type="number"
            value={mobile}
            onChange={(e) => setmobile(e.target.value)}
          />{" "}
          <input className={style.checkbox} type="checkbox" />
          <div className={style.checkboxtext}>
            {" "}
            Share my registration data with Superapp{" "}
          </div>{" "}
          <button className={style.singupbtn}>SING UP</button>
        </form>{" "}
        <div className={style.term}>
          By clicking on Sign up. you agree to Superapp{" "}
          <span style={{ color: "#72db73", cursor: "pointer" }}>
            Terms and Conditions of Use
          </span>
        </div>
        <div className={style.term2}>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp{" "}
          <span style={{ color: "#72db73", cursor: "pointer" }}>
            Privacy Policy
          </span>
        </div>
      </div>{" "}
    </>
  );
}; */
}

export default SingUp;
