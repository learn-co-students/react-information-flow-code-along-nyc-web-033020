import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    console.log(this.props)
    return (
      <div onClick = {() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{backgroundColor: this.props.backColor}}
      ></div>
    )
  }
}

export default Child

// this is now the child is changing its color,
// the code below is from the
// changeColor = (newChildColor) => {
//   this.setState({
//     color: getRandomColor(),
//     childrenColor: newChildColor

//   })
// }