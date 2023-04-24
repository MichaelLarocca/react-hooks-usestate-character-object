import { useState } from 'react'
import './App.css'
import Player from './components/Player'

function App() {

  return (
    <>
      <Player name="Legolas" score={10} level={20} weapon="Bow" arrows={50} />
      <Player />
    </>
  )
}

export default App
