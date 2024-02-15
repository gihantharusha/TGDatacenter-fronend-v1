import React, { useState } from "react";
import "./home.css";
import Navigation from "../Components/Navigation";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [title, setTitle] = useState();
  const [res, setRes] = useState([]);
 

  const submit =  () => {
     axios
      .get(`https://tgdatacenter-backend.onrender.com/findDataByTitle?title=${title}`)
      .then((response) => {
        console.log(response.data)
        setRes(response.data)
      });
      
  };

  return (
    <div className="home">
      <Navigation />
      <div className="home-page">
        <img src="#" alt="" />

        <div className="article-section">
          <p>
            <h1>T.G Data Center</h1>
            T.G Data Center, a comprehensive repository of global information,
            stands as a beacon in the digital landscape, dedicated to providing
            a reservoir of data about our interconnected world. Launched with
            the mission to democratize information, this online platform is a
            testament to the belief that knowledge empowers individuals and
            communities worldwide.
            <br />
            <br />
            <h1>Purpose</h1>
            At the heart of T.G Data Center lies a profound commitment to
            transparency and accessibility. The primary purpose of this digital
            hub is to consolidate and disseminate diverse data sets spanning a
            myriad of topics, from socio-economic trends to environmental
            statistics, fostering a deeper understanding of the intricate
            tapestry that is our global community. With an unwavering dedication
            to accuracy and relevance, T.G Data Center emerges as a valuable
            resource for those seeking to explore, analyze, and comprehend the
            multifaceted aspects of our ever-evolving world.
            <br />
            <br />
            <h1>Target Audience</h1>
            The virtual doors of T.G Data Center are open to the people of the
            world. Whether you are a curious individual, a student conducting
            research, a professional seeking insights, or a policymaker making
            informed decisions, T.G Data Center caters to a broad spectrum of
            users. By embracing inclusivity, this platform endeavors to bridge
            knowledge gaps, transcending geographical boundaries and cultural
            divides.
            <br />
            <br />
            <h1>Key Features</h1>
            T.G Data Center distinguishes itself through a userfriendly
            interface that facilitates seamless navigation through its extensive
            archives. The platform hosts an array of meticulously curated data
            sets, presented in easily digestible formats, making complex
            information accessible to all. Realtime updates ensure that users
            are equipped with the latest and most relevant data, empowering them
            to stay informed in an ever-changing global landscape. <br />
            <br />
            As T.G Data Center continues to evolve, its commitment to data
            integrity, user empowerment, and global connectivity remains
            unwavering. Explore, discover, and engage with the world's
            information at your fingertips, as T.G Data Center strives to be the
            compass guiding you through the vast realms of knowledge.
          </p>
        </div>
        {/* article-section */}

        <div className="search-section">
          <input
            type="text"
            placeholder="Search your title for get data"
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
          />

          <Link onClick={submit}>
            <button>Search</button>
          </Link>
        </div>
        {/* search-section */}

        <div className="result-section">
          <ul>
            {res.map(e=>(
              <li><Link state={{element: e}} to="/article">{e.title}</Link></li>
            ))}
          </ul>
        </div>
        {/* result-section */}
      </div>
      {/* home-page */}
    </div>
    //home
  );
};

export default Home;
