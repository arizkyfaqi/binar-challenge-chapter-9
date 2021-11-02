import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";
// import Login from "../Authentication/Login";

const LoginDua = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const LoginDua = async () => {
    await Axios.post("http://127.0.0.1:4003/auth/logindua", {
      username: username,
      password: password,
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <h1 className="mt-5 text-center">Login</h1>
      <form onSubmit={LoginDua}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/register">register</Link>
    </Fragment>
  );
};

export default LoginDua;
