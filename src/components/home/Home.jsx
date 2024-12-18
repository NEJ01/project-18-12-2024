import React from "react";
import "./home.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div>
      <div className="landing-page-div">
        <div className="landing-page-header"> </div>
      </div>
      <div className="menu">
        <div className="menu-header">
          <h3>What we're offering</h3>
        </div>
        <div className="menu-card-div">
          <div className="menu-card">
            <div className="red">
              <Button>
                <Link to={'/break'}>
              <h1>Breakfast</h1>
              </Link>
              </Button>
            </div>
           
           
          </div>
          <div className="menu-card">
            <div className="red">
              <h1>Lunch</h1>
            </div>
            
           
          </div>
          <div className="menu-card">
            <div className="red">
              <h1>Snacks</h1>
            </div>
           
           
          </div>
          
        </div>
      </div>
     
    </div>
  );
};

export default Home;