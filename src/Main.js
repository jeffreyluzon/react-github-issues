import App from './App'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default function Main(){
    return(
        <div>
            <Router>
                <Route exact path='/' render={()=>  <h1>hi</h1>} />
                <Route path='/show/:index'  render={(props)=> {return <App index={props.match.params.index}/>}}/>
                <div className="App">
                    {/* <h1><RenderIssues issues={displaydata}/></h1> */}
                </div>
            </Router>
        </div>
    )
}