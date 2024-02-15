import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import { Link } from "react-router-dom";
import "./singup.css";
import axios from "axios";

const SingUp = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [display, setDisplay] = useState("none");
  const [path, setPath] = useState("/singup");
  const [Response, setResponse] = useState([]);

  const submit = () => {
    axios
      .get(`https://tgdatacenter-backend.onrender.com/findUserByName?name=${name}`)
      .then((response) => {
        if (response.data.name === name) {
          setDisplay("block");
          setPath("/singup");
        } else {
          if (response.data.password === pass) {
            setDisplay("block");
            setPath("/singup");
          } else {
            axios
              .post(`https://tgdatacenter-backend.onrender.com/addUser?name=${name}&pass=${pass}`)
              .then((res) => {
                setResponse(res.data);
                
              });
            setDisplay("none");
            setPath("/user");
          }
        }
      });
  };

  return (
    <div className="singup">
      <Navigation />
      <div className="singup-page">
        <div className="title-section">
          <h1>Sing up</h1>
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
            If you have account of this page. plaece
            <Link to="/login"> Log in</Link>
          </p>
          <Link onClick={submit} to={path} state={{element:Response}}>
            <button>Sing up</button>
          </Link>
        </div>
        {/* second-section */}
      </div>
      {/* singup-page */}
    </div>
    // singup
  );
};

export default SingUp;
