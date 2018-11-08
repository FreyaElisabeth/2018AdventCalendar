import React, { Component } from 'react'
import './Door.css'

class Door extends Component {
  render() {
    const { text, number, total, isOpen, onClick } = this.props
    const today = new Date().getDate()
    return (
      <div
        className={isOpen ? 'Door open' : 'Door'}
        onClick={number <= today ? onClick : undefined}
      >
        {isOpen ? text : `${number}/${total}`}
      </div>
    )
  }
}

export default Door
