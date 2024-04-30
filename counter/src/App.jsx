import { useState } from 'react' //hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) // react change the value of counter variable in whole page while updatation

  //let counter = 5;

  const addValue = () => {
    // counter += 1;
    // console.log('cliked', Math.random(), counter)
    if (counter < 20) {
      counter++;
      setCounter(counter);
    }
  }
  const decreaseValue = () => {
    if (counter > 0) {
      counter--;
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value on {counter} </button>
      <br />
      <br />
      <button onClick={decreaseValue}>Remove value of {counter} </button>
    </>
  )
}

export default App
