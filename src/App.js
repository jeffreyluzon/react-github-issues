import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import RenderIssues from './component/RenderIssues'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default function App() {
  const [Issues, setIssues] = useState([]) 
  const [displaydata, setDisplayData] = useState([])

  useEffect(() => {
    axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
    .then(res => {
      // console.log(res.data)
      setIssues(res.data)
      setDisplayData(res.data.slice(0 ,20))
      console.log(displaydata)
    })
  }, [])
  
  return (
    <Router>
      <Route exact path='/' render={()=> {return <h1>hi</h1>}} />
      <Route path='/show/:index'  render={(props)=> {return <RenderIssues issues={displaydata}/>}}/>
      <div className="App">
        {/* <h1><RenderIssues issues={displaydata}/></h1> */}
      </div>
    </Router>
  );
}



