import React from "react";
import { Link } from "react-router-dom";

import '../styles/pages/Home.css'
export default function Home () {
  return (
    <div className="App">
      <header className="App-header">

        <h1>
          DESAFIOS Nave.rs
        </h1>
          
        <h2>
          <Link className="link" to="/comments">Comments </Link>
          |
          <Link className="link" to="/create-post"> Create Post</Link>
        </h2>

        {/*<div className="socialMedias">
          by
          <a href="https://github.com/DauanGZ">
          Dauan
          </a>
          and
          <a href="https://github.com/DarleiSchmegel">
          Darlei
          </a>
        </div>*/}
        
      </header>
    </div>
  )
}