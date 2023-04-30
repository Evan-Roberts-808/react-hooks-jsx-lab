import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
  <div id="home">
    <h1 style={{color: 'firebrick'}}>Your {name} is a Web Developer from Your {city}</h1>
  </div>);
}

export default Home;
