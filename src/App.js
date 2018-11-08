import React, { Component } from 'react'
import './App.css'
import Counter from './Counter'
import Door from './Door'

class App extends Component {
  state = {
    doors: this.getRandomDoors()
  }

  getRandomDoors() {
    return [
      { text: 'Stille' },
      { text: 'Nacht' },
      { text: 'heilige' },
      { text: 'Nacht' },
      { text: 'Alles' },
      { text: 'schläft' },
      { text: 'einsam' },
      { text: 'wacht' },
      { text: 'nur' },
      { text: 'das' },
      { text: 'traute' },
      { text: 'hochheilige' },
      { text: 'Paar' },
      { text: 'Holder' },
      { text: 'Knabe' },
      { text: 'im' },
      { text: 'lockigen' },
      { text: 'Haar' },
      { text: 'Schlaf' },
      { text: 'in' },
      { text: 'himmlischer' },
      { text: 'Ruh' },
      { text: 'Frohe' },
      { text: 'Weihnachten' }
    ]
      .map((item, index, arr) => ({
        ...item,
        number: index + 1,
        isOpen: false,
        total: arr.length,
        rand: Math.random()
      }))
      .sort((a, b) => a.rand - b.rand)
      .map(item => {
        delete item.rand
        return item
      })
  }

  renderDoors() {
    return this.state.doors.map(door => (
      <Door
        key={door.number}
        {...door} //übergibt alle keys aus dem Objekt als props
        onClick={() => this.openDoor(door.number)}
      />
    ))
  }

  openDoor = num => {
    const { doors } = this.state
    const index = doors.findIndex(d => d.number === num)
    const newDoors = [
      ...doors.slice(0, index),
      { ...doors[index], isOpen: true },
      ...doors.slice(index + 1)
    ]

    this.setState({
      doors: newDoors
    })
  }

  render() {
    const openDoorsNum = this.state.doors.filter(door => door.isOpen).length
    return (
      <section className="App">
        <Counter number={openDoorsNum} className="Counter" />
        {this.renderDoors()}
      </section>
    )
  }
}

export default App
