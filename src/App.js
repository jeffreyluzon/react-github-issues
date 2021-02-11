import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import RenderIssues from './component/RenderIssues'

export default function App() {
  const [Issues, setIssues] = useState([]) 

  useEffect(() => {
    axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
    .then(res => {
      console.log(res.data)
      setIssues(res.data)
    })
  }, [])
  return (

    <div className="App">
      <h1><RenderIssues issues={Issues}/></h1>
    </div>
  );
}



