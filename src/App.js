import './App.css';
import axios from 'axios'
import React, { useEffect } from 'react'
export default function App() {

  useEffect(() => {
    axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=10')
    .then(res => {
      console.log(res.data)
    })
  }, [])



  return (
    <div className="App">
      <h1> Group labs</h1>

    </div>
  );
}


