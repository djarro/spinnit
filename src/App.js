import React from 'react'
import './scss/base.scss'
import './fontello/css/fontello.css'
import DropZone from './components/DropZone/Dropzone'

const App = () => {
  const prevent = event => event.preventDefault()

  return (
    <div onDrop={prevent} onDragOver={prevent}>
      <h1>Spinnit</h1>
      <DropZone/>
    </div>
  )
}

export default App
