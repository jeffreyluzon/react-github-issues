import App from './App'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { useState } from 'react'

export default function Main(){
    const [reRender, setReRender] = useState(false)

    const resetRender = () => {
        console.log('Resetting rerender')
        setReRender(!reRender)
    }

    return(
        <div>
            <Router>
<<<<<<< HEAD
                < Link to='/' onClick={resetRender}> Home </Link>
                < Link to='/show/0' onClick={resetRender}> 1-20 </Link>
                < Link to='/show/19' onClick={resetRender}> 21-40 </Link>
                < Link to='/show/39' onClick={resetRender}> 41-60 </Link>
                < Link to='/show/59' onClick={resetRender}> 61-80 </Link>
                < Link to='/show/79' onClick={resetRender}> 81-100 </Link>

                <Route exact path='/' render={()=>  <h1>hi</h1>} />
                <Route exact path='/show/:index'  render={(props)=> {
                    return <App reRender={reRender} resetRender={resetRender} index={props.match.params.index}/>}}/>
=======
                < Link to='/show/0' > 1-20 </Link> {' -> '}
                < Link to='/show/19' > 21-40 </Link> {' -> '}
                < Link to='/show/39' > 41-60 </Link> {' -> '}
                < Link to='/show/59' > 61-80 </Link> {' -> '}
                < Link to='/show/79' > 81-100 </Link>

                <Route exact path='/' render={()=>  <h1>hi</h1>} />
                <Route path='/show/:index'  render={(props)=> {return <App index={props.match.params.index}/>}}/>
>>>>>>> 007991644ffc5cbea4e96ad196eaa01847a2e99a
            </Router>
        </div>
    )
}