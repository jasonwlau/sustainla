import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Draggable from 'react-draggable';
import logo from './bin.jpg';

class Item extends Component {
    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data', data);
    }
  render() {
    return (
        <Draggable
        axis = "both"
        handle = ".item"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div className = "item">
            <img id="layout" draggable="false" src={logo} />
        </div>
        </Draggable>
    );
  }
}

export default Item;
