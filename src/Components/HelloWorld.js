import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class HelloWorld extends Component{

    render(){
        return(
        <h1>Hello {this.props.name}</h1>
        )
    }
}

export default HelloWorld;