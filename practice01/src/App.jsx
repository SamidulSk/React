import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState("...user");
 
  function sk(){
    setUser("SAMIDUL");
  }
  function ss(){
    setUser("SUSOVAN");
  }
  function grm(){
    setUser("GANGARAM");
  }
  return (
    <>
      <div>
        <h1>Hello, I Am {user} </h1>
        <button onClick={sk}>SAMIDUL </button>
        <button onClick={ss}>SUSOVAN </button>
        <button onClick={grm}>GANGARAM</button>
      </div>
    </>
  )
}

export default App
