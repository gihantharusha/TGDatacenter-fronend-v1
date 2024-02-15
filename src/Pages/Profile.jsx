import React, { useState } from "react";
import "./profile.css";
import Navigation from "../Components/Navigation";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const location = useLocation();
  const element = location.state?.element;

  const [title, setTitle] = useState();
  const [data, setData] = useState();

  const addData = () => {
    axios.post(`https://tgdatacenter-backend.onrender.com/addData?title=${title}&data=${data}`);
    alert("Uploaded your data");
  };

  return (
    <div className="profile">
      <Navigation />
      <div className="profile-page">
        <h1>{element ? element.name : "user name"}</h1>

        {/* <div className="details-section">
          <div className="email">
            <label htmlFor="email">Email :-</label>
            <input
              type="email"
              id="email"
              value={element ? element.email : "user email"}
              placeholder="user email"
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
            />
            <button
              onClick={() =>
                submitEmail(element ? element.email : "user email")
              }
            >
              Submit
            </button>
          </div>
          email
          <div className="job">
            <label htmlFor="job">Job :-</label>
            <input
              type="text"
              id="job"
              value={element ? element.job : "user job"}
              placeholder="user job"
              onChange={(e) => {
                e.preventDefault();
                setJob(e.target.value);
              }}
            />
            <button
              onClick={() => submitJob(element ? element.job : "user job")}
            >
              Submit
            </button>
          </div>
        </div>
        job
        details-section */}
        <div className="add-data">
          <h1>Add data</h1>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Add data"
            onChange={(e) => {
              e.preventDefault();

              setData(e.target.value);
            }}
          ></textarea>
          <button onClick={addData}>Add data</button>
        </div>
        {/* add-data */}
      </div>
      {/* profile-page */}
    </div>
    // profile
  );
};

export default Profile;
