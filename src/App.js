import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import RenderIssues from './component/RenderIssues'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default function App(props) {
  const [Issues, setIssues] = useState([]) 
  const [displaydata, setDisplayData] = useState([])

  useEffect(() => {
    axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
    .then(res => {
      // console.log(res.data)
      setIssues(res.data)
      setDisplayData(res.data.slice(parseInt(props.index) ,parseInt(props.index+20)))
      console.log(displaydata)
      console.log(props.index)
      console.log(parseInt(props.index+20))
    })
  }, [])
  
  return (
    <Router>
      <h1>hello</h1>
      <Route exact path='/' render={()=>  <h1>hi</h1>} />
      <Route path='/show/:index'  render={(props)=> {return <RenderIssues issues={displaydata}/>}}/>
    </Router>
  );
}



