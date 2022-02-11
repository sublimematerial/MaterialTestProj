import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
  
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/DrySieving">Dry Sieving</Link>
        </li>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/Consistency">Consistency</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/Soundness">Soundness</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/Cementtes">Compressivestrength</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/FinalSetting">FinalSetting</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/Specificgravity">Specific Gravity</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/LossOfIgnition">Loss Of Ignition</Link>
        </li>
      </ul>
    </div>
  );
};
  
export default Home;