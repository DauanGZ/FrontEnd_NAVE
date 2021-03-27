import React from "react";
import { Link } from "react-router-dom";

import '../styles/pages/Home.css'
export default function Home () {
  return (
    <div className="App">
      <header className="App-header">

        <h1>
          D E S A F I O A U L A 2 2
        </h1>
          
        <h2>
          <Link className="link" to="/comments">COMENTÁRIO</Link>
        </h2>

        <div className="socialMedias">
          by
          <a href='https://github.com/DauanGZ' target="_blank">
          Dauan
          </a>
          and
          <a href='https://github.com/DarleiSchmegel' target="_blank">
          Darlei
          </a>
        </div>
        
      </header>
    </div>
  )
}