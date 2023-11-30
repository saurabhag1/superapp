// import React, { useState, useEffect } from "react";
// import style from "./SingUp.module.css";
// import Entir from "../pages/entir";
// import { useNavigate } from "react-router-dom";

// const SingUp = () => {
//   // ttt
//   const initialValues = { myname: "", username: "", email: "", mobile: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [error, setError] = useState("");
//   const [shouldRedirect, setShouldRedirect] = useState(false);
//   const [shouldRedirect2, setShouldRedirect2] = useState(false);

//   // const history = useHistory();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     if (!isChecked) {
//       setError("Please check the checkbox before submitting.");
//     }
//     e.preventDefault();

//     setFormErrors(validate(formValues));
//     // if (Object.keys(formErrors).length === 0 && setShouldRedirect2) {
//     //   setShouldRedirect2(true); // Replace "/other-page" with your desired URL
//     // }
//     setIsSubmit(true);
//   };

//   const handleCheckboxChange = () => {
//     setError("");
//     setIsChecked(!isChecked);
//   };

//   // useEffect(() => {
//   //   console.log(formErrors);
//   //   if (Object.keys(formErrors).length === 0 && isSubmit) {
//   //     console.log(formValues);
//   //   }
//   // }, [formErrors]);
//   // local storgae of data

//   useEffect(() => {
//     // Save form data to local storage
//     if (Object.keys(formErrors).length === 0) {
//       setShouldRedirect2(true); // Replace "/other-page" with your desired URL
//     }
//   }, [formValues]);

//   useEffect(() => {
//     // Save form data to local storage
//     localStorage.setItem("formData", JSON.stringify(formValues));
//   }, [formValues]);

//   useEffect(() => {
//     // Retrieve form data from local storage on component mount
//     const savedFormData = localStorage.getItem("formData");
//     if (savedFormData) {
//       console.log("Saved Form Data:", JSON.parse(savedFormData));
//     }
//   }, []);

//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     // name error
//     if (!values.myname) {
//       errors.myname = "Name is required!";
//     }
//     // user name error
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     // email error
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     // mobile error
//     if (!values.mobile) {
//       errors.mobile = "Mobile Number is Required!";
//     } else if (values.mobile.length > 10) {
//       errors.mobile = "Enter a Valid Mobile Number of 10 digit";
//     } else if (values.mobile.length < 10) {
//       errors.mobile = "Enter a Valid Mobile Number of 10 digit";
//     }

//     // if (!values.password) {
//     //   errors.password = "Password is required";
//     // } else if (values.password.length < 4) {
//     //   errors.password = "Password must be more than 4 characters";
//     // } else if (values.password.length > 10) {
//     //   errors.password = "Password cannot exceed more than 10 characters";
//     // }
//     if (Object.keys(errors).length === 0) {
//       setShouldRedirect(true); // Replace "/other-page" with your desired URL
//     }
//     return errors;
//   };

//   return (
//     <>
//       <div className={style.countainer}>
//         {" "}
//         {Object.keys(formErrors).length === 0 && isSubmit ? (
//           <div className="ui message success"> Signed in successfully </div>
//         ) : (
//           <pre> {JSON.stringify(formValues, undefined, 2)} </pre>
//         )}{" "}
//         <div className={style.text1}> Supper app </div>{" "}
//         <div className={style.text2}> Create your new account </div>{" "}
//         <form onSubmit={handleSubmit} className={style.form}>
//           <input
//             className={style.input}
//             type="text"
//             name="myname"
//             placeholder="Name"
//             value={formValues.myname}
//             onChange={handleChange}
//           />{" "}
//           <p className={style.error}> {formErrors.myname} </p>{" "}
//           <input
//             className={style.input}
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formValues.username}
//             onChange={handleChange}
//           />{" "}
//           <p className={style.error}> {formErrors.username} </p>{" "}
//           <input
//             className={style.input}
//             type="text"
//             name="email"
//             placeholder="Email"
//             value={formValues.email}
//             onChange={handleChange}
//           />{" "}
//           <p className={style.error}> {formErrors.email} </p>
//           <input
//             className={style.input}
//             type="number"
//             name="mobile"
//             placeholder="Mobile"
//             value={formValues.mobile}
//             onChange={handleChange}
//           />{" "}
//           <p className={style.error}> {formErrors.mobile} </p>
//           <div className={style.checkboxtext}>
//             <input
//               checked={isChecked}
//               onChange={handleCheckboxChange}
//               type="checkbox"
//             />
//             Share my registration data with Superapp{" "}
//           </div>
//           <p className={style.error}> {error} </p>
//           <button
//             onClick={() => (shouldRedirect2 ? navigate("/entir") : null)}
//             // onClick={() => navigate("/entir")}
//             className={style.singupbtn}
//             type="handleSubmit">
//             SING UP
//           </button>
//         </form>
//         <div className={style.term}>
//           By clicking on Sign up. you agree to Superapp{" "}
//           <span style={{ color: "#72db73", cursor: "pointer" }}>
//             Terms and Conditions of Use
//           </span>
//         </div>
//         <div className={style.term2}>
//           To learn more about how Superapp collects, uses, shares and protects
//           your personal data please head Superapp{" "}
//           <span style={{ color: "#72db73", cursor: "pointer" }}>
//             Privacy Policy
//           </span>
//         </div>{" "}
//       </div>
//     </>
//   );
// };

// {
//   /*

//   return (
//     <>
//       <div className={style.countainer}>
//         <div className={style.text1}> Supper app </div>{" "}
//         <div className={style.text2}> Create your new account </div>{" "}
//         <form className={style.form}>
//           <input
//             className={style.input}
//             value={firstName}
//             placeholder="   Name"
//             onChange={(e) => setFirstName(e.target.value)}
//           />{" "}
//           <input
//             className={style.input}
//             placeholder="   Username"
//             value={username}
//             onChange={(e) => setusername(e.target.value)}
//           />{" "}
//           <input
//             className={style.input}
//             placeholder="   Email"
//             value={email}
//             type="email"
//             onChange={(e) => setemail(e.target.value)}
//           />{" "}
//           <input
//             className={style.input}
//             placeholder="   Mobile"
//             type="number"
//             value={mobile}
//             onChange={(e) => setmobile(e.target.value)}
//           />{" "}
//           <input className={style.checkbox} type="checkbox" />
//           <div className={style.checkboxtext}>
//             {" "}
//             Share my registration data with Superapp{" "}
//           </div>{" "}
//           <button className={style.singupbtn}>SING UP</button>
//         </form>{" "}
//         <div className={style.term}>
//           By clicking on Sign up. you agree to Superapp{" "}
//           <span style={{ color: "#72db73", cursor: "pointer" }}>
//             Terms and Conditions of Use
//           </span>
//         </div>
//         <div className={style.term2}>
//           To learn more about how Superapp collects, uses, shares and protects
//           your personal data please head Superapp{" "}
//           <span style={{ color: "#72db73", cursor: "pointer" }}>
//             Privacy Policy
//           </span>
//         </div>
//       </div>{" "}
//     </>
//   );
// }; */
// }

// export default SingUp;
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
  console.log(userDetails);

  const change = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    const { name, username, email, phone, check } = userDetails;
    if (name && username && email && phone && check) {
      window.localStorage.setItem("userData", JSON.stringify(userDetails));
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
    <div className="body">
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
