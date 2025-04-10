import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="text-center text-green-500 font-bold text-4xl">Hello, World!</p>
    </>
  )
}

export default App
