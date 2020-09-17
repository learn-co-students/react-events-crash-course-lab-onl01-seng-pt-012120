import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    return drawChromeBoiAtCoords(x,y)
  }
  

  handleKeyDown = (event) => {
    if (event.key === "a") {
      return resize('+')
    }

    if (event.key === "s") {
      return resize('-')
    }
  }
 
  handleClick = () => {
    return toggleCycling()
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
