import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {


  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl p-3 font-bold mb-4'>Tailwind Test</h1>
     <Card username="sk" btnText="chalo"/>
     <Card username="samanta" btnText="explore me"/>
     <Card username="grm" />
    </>
  )
}

export default App
