import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../containers/Home'
import Ads from '../containers/Ads'
class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/Ads" component={Ads} />
            </Router>
        )
    }
}
export default AppRouter;