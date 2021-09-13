import React from 'react'
import Button from './components/Button'
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">BUTTON</Button>
        <Button color="gray">BUTTON</Button>
        <Button color="gray" size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">BUTTON</Button>
        <Button color="pink">BUTTON</Button>
        <Button color="pink" size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button outline size="large">BUTTON</Button>
        <Button outline color="gray">BUTTON</Button>
        <Button outline color="pink" size="small">BUTTON</Button>
      </div>
      <div className="buttons">
        <Button full_width size="large">BUTTON</Button>
        <Button full_width color="gray" size="large">BUTTON</Button>
        <Button full_width color="pink" size="large" onClick={() => {console.log('click')}} onMouseMove={()=> {console.log('mouse move')}} >BUTTON</Button>
      </div>
    </div>
  )
}

export default App
