import { useState } from 'react'
import './App.css'
import Player from './components/Player'

function App() {

  return (
    <>
      <Player name="Legolas" arrows={50} />
      <Player />
    </>
  )
}

export default App
