import React, {useState} from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import menu from "../images/menu1.svg";

const Navigation = () => {

  const [clickcheck, setClickCheck] = useState("responsive-list-hidden")

  const clickCheckFun = ()=>{
    if(clickcheck === "responsive-list-show"){
      setClickCheck("responsive-list-hidden")
    }else{
      setClickCheck("responsive-list-show")
    }
  }

  return (
  <header>
    <div className="navigation">
      <div className="left-side">
        <h1>TGDatacenter</h1>
      </div>
      {/* left-side */}

      <div className="right-side">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">Catogeries</Link></li>
          <li>
            <Link to="/login">
              <button>Log in</button>
            </Link>
          </li>
        </ul>
      </div>
      {/* right-side */}

      <div className="img-div">
      <img src={menu} alt="" onClick={clickCheckFun}/>
      </div>
      {/* img-div */}

      <div className={clickcheck}>
        
        <ul>
        <li><Link>Home</Link></li>
          <li><Link>Catogeries</Link></li>
          <li>
            <Link>
              <button>Log in</button>
            </Link>
          </li>
        </ul>
      </div>
      {/* responsive-list */}
    </div>
    </header>
    //navigation
  );
};

export default Navigation;
