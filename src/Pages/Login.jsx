import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [display, setDisplay] = useState("none");
  const [path, setPath] = useState("/login");
  const [Response, setResponse] = useState([]);

  const submit = () => {
    axios
      .get(`http://localhost:5000/findUserByName?name=${name}`)
      .then((response) => {
        if (response.data.name === name) {
          if (response.data.password === pass) {
            setDisplay("none");
            setPath("/user");
            console.log(response.data)
            setResponse(response.data);
          } else {
            setDisplay("block");
            setPath("/login");
          }
        } else {
          setDisplay("block");
          setPath("/login");
        }
      });
  };

  return (
    <div className="login">
      <Navigation />
      <div className="login-page">
        <div className="title-section">
          <h1>Log in</h1>
        </div>
        {/* title-section */}
        <div className="second-section">
          <h3
            style={{
              display: display,
              textAlign: "center",
              color: "white",
              backgroundColor: "red",
            }}
          >
            Pleace input valide data
          </h3>
          <div className="input-section">
            <input
              type="text"
              placeholder="User name"
              onChange={(e) => {
                e.preventDefault();
                setName(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="User password"
              onChange={(e) => {
                e.preventDefault();
                setPass(e.target.value);
              }}
            />
          </div>
          {/* input-section */}
          <p>
            If you not have account of this page. plaece
            <Link to="/singup"> sing up</Link>
          </p>
          <Link onClick={submit} to={path} state={{element: Response}}>
            <button>Log in</button>
          </Link>
        </div>
        {/* second-section */}
      </div>
      {/* login-page */}
    </div>
    // login
  );
};

export default Login;
