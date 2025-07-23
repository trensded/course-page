import { useState } from 'react'
import './App.css'
import UiUxEssentials from './pages/UiUxEssentials'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<UiUxEssentials />} />
      </Routes>
    </>
  )
}

export default App
