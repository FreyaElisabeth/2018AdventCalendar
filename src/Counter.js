import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {
  render() {
    return (
      <div className={this.props.className}>
        Doors opened: {this.props.number}
      </div>
    )
  }
}

export default Counter
