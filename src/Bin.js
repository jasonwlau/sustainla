import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './bin.jpg';
import 'style.css'

class Bin extends Component {
  render() {
    return (
    <div>
        <img src = {logo} className = "Bin-logo" alt="logo" />
    </div>
    );
  }
}

export default Bin;
