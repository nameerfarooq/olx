import React from 'react'
import Home from './containers/Home'
import ReactDOM from 'react-dom'

 


class App extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    <Home /> 
                </h1>
            </div>
        )
    }
}

export default App