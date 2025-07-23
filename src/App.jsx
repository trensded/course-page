import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UiUxEssentials from './pages/UiUxEssentials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UiUxEssentials />
    </>
  )
}

export default App
