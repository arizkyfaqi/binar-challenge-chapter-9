import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "axios";

const Register = () => {
  const [nameReg, setnameReg] = useState("");
  const [emailReg, setemailReg] = useState("");
  const [usernameReg, setusernameReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");

  const register = () => {
    Axios.post("http://127.0.0.1:4003/auth/register", {
      name: nameReg,
      email: emailReg,
      username: usernameReg,
      password: passwordReg,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <h1 className="mt-5 text-center">Register</h1>
      <form onSubmit={register}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setnameReg(e.target.value)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setusernameReg(e.target.value)}
          className="form-control my-3"
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => setemailReg(e.target.value)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setpasswordReg(e.target.value)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/logindua">login</Link>
    </Fragment>
  );
};

export default Register;
