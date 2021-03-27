import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Comment from "../components/Comment";
import api from "../services/api";

import '../styles/components/Comments.css'

export default function Comments () {
    const [datas, setDatas] = useState([])
  
  useEffect(() => {
    async function load() {
      const response = await api.get()
      setDatas(response.data)
    }
    load()
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
      <h2>
      <Link className="link" to="/" exact>HOME</Link>
      </h2>
        <h1>C O M E N T Á R I O S</h1>
        <div className="comments">
          {
        datas.map(data =>(
          <Comment key={data.id} name={data.name} email={data.email} comment={data.body}/>        
        ))
        }
        </div>

      </header>
    </div>
  )
}