import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Draggable from 'react-draggable';
import logo from './bin.jpg';

class Item extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { 
            position: {
                x: 0, y: 0
            }
        };
    }
    handleStop = (e, data) => {
        if (data.x > 100 && data.y > 500) {
           this.setState({
               position: {x: -999, y: -999}
           })
        }
        console.log(data.x);
        console.log(data.y);
    }
    handleDrag = (e, data) => {
        const {x, y} = data;
        this.setState({
            position: {x:x, y:y}
        })
    }
    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data', data);
    }
  render() {
    return (
        <Draggable
        axis = "both"
        handle = ".item"
        defaultPosition={null}
        position={this.state.position}
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
