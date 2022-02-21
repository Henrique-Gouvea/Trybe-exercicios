import React, { Component } from "react";
import './Hello.css'

class Hello extends Component {
    render () {
        return <h1>Hello, {this.props.firstName} {this.props.lastName}</h1>
    }
}

export default Hello