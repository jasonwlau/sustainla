import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Draggable from 'react-draggable';
import plasticcup from './itemimages/plasticcup.jpg';
import food from './itemimages/food.jpg';
import pencil from './itemimages/pencil.jpg';

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
      let down, left, up, right = 0;
          if (this.props.bin == 'recycling')
            {
              down = -60; 
              left = 96; 
              up = 450; 
              right = 259;
            }
            else
            {
              down = 500; left = 96; up = 400; right = 259;
            }
        if (data.x > down && data.y > left && data.y < up && data.x < right) {
           this.setState({
               position: {x: -999, y: -999}
           })
        }
        console.log(data.x);
        console.log(data.y);
        console.log(this.props.url);
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
    getImage = () => {
      let x = this.props.itemtype;
      if (x == 'plasticcup')
        return plasticcup;
      else if (x == 'food')
        return food;
      else if (x == 'pencil')
        return pencil;
    }
  render() {
    let image = this.getImage();
    
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
            <img id="layout" draggable="false" src={image} />
            <p>{this.props.bin}</p>
        </div>
        </Draggable>
    );
  }
}
export default Item;
