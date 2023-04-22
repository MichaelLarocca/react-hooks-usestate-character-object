import { useState } from 'react'
import './App.css'
import Player from './components/Character'

function App() {

  return (
    <>
      <Player name="Legolas" arrows={50} />
      <Player name="Michael" arrows={25} />
    </>
  )
}

export default App
