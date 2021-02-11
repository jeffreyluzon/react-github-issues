import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import RenderIssues from './component/RenderIssues'


export default function App(props) {
  const [Issues, setIssues] = useState([]) 
  const [displaydata, setDisplayData] = useState([])

  useEffect(() => {
    axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
    .then(res => {
      // console.log(res.data)
      setIssues(res.data)
      setDisplayData(res.data.slice(parseInt(props.index) ,parseInt(props.index)+20))
    })
  }, [props.reRender])
  
  return (
    <div>
      <h1>hello</h1>
      <RenderIssues issues={displaydata}/>
    </div>
  );
}