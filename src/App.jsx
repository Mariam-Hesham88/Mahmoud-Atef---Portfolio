import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="bg-blue-500">
        Click on the Vite and React logos to learn more
        <i className="fa-solid fa-thumbs-up"></i>
      </p>
    </>
  )
}

export default App
