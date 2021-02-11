import App from './App'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default function Main(){
    return(
        <div>
            <Router>
                < Link to='/show/0' > 1-20 </Link> {' -> '}
                < Link to='/show/19' > 21-40 </Link> {' -> '}
                < Link to='/show/39' > 41-60 </Link> {' -> '}
                < Link to='/show/59' > 61-80 </Link> {' -> '}
                < Link to='/show/79' > 81-100 </Link>

                <Route exact path='/' render={()=>  <h1>hi</h1>} />
                <Route path='/show/:index'  render={(props)=> {return <App index={props.match.params.index}/>}}/>
            </Router>
        </div>
    )
}