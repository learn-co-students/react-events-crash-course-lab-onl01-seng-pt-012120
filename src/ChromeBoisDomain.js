import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
   const x = event.clientX
   const y = event.clientY
   drawChromeBoiAtCoords(x, y)
  }
  
  handleToggling = () => {
    toggleCycling()
  }
   
  handleKeyPress = (e) => {
    switch (e.key) {
      case 'a':
        resize("+")
        break
      case 's':
        resize("-")
        break
      default:
        console.log(`${e.key} is not a valid input:`, `please press either 'a' or 's'`)
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick = {this.handleToggling}
        onKeyPress = {this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
