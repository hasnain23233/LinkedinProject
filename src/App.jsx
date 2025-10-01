import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Full_Page from './mainPage/Full_Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Full_Page />
    </>
  )
}

export default App
