import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/home");
      props.showAlert("Signed Up Successfully", "success");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Create an Account to use Gist-It</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <i className="fa-solid fa-id-badge mx-2"></i>
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <i className="fa-solid fa-envelope mx-2"></i>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelpBlock" className="form-text">
            Enter a valid Email address
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <i className="fa-solid fa-unlock mx-2"></i>
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            minLength={7}
            required
            id="password"
            onChange={onChange}
          />
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain atleast a
            Capital letter, a Small letter, a Number and a Special Character and
            must not contain Spaces or Emojis.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            <i className="fa-solid fa-unlock-keyhole mx-2"></i>
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            minLength={7}
            required
            name="cpassword"
            id="cpassword"
            onChange={onChange}
          />
          {credentials.password !== credentials.cpassword && (
            <div className="text-danger">Passwords do not match.</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-bd-primary"
          disabled={credentials.password !== credentials.cpassword}
        >
          <i className="fa-regular fa-user mx-1"></i> Sign In
        </button>
      </form>
    </div>
  );
};

export default Signup;
