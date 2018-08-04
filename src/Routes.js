import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import App from './App';
const Routing = () =>{
    return(
        <Router>
            <div>
                <Route exact path="/" component={App}></Route>
            </div>
        </Router>
    )
}

export default Routing;