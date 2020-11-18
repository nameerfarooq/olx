import React from 'react'
// import Home from './containers/Home'
import ReactDOM from 'react-dom'
import AppRouter from './config/router'
 


class App extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    <AppRouter /> 
                </h1>
            </div>
        )
    }
}

export default App