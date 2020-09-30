import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    
    let coordinateX = event.clientX;
    let coordinateY = event.clientY;

   return drawChromeBoiAtCoords(coordinateX, coordinateY);
  }
  
  handleKeyPress = (event) => {
    if (event.key === "a") {
     return resize('+')
    } 
    
    if (event.key === "s") {
     return resize('-')
    } 
  }

  handletoggling = () => {
   return toggleCycling();

  }
   
 
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handletoggling}
        onKeyDown={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
