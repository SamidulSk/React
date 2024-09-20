import { useState } from 'react' //hook

import './App.css'

function App() {

  let [counter, setCounter] = useState(25) // react change the value of counter variable in whole page while updatation

  //let counter = 5;

  const addValue = () => {
    // counter += 1;
    // console.log('cliked', Math.random(), counter)
    if (counter < 40) {
      counter++;
      setCounter(counter);
    }
  }
  const decreaseValue = () => {
    if (counter > 0) {
      counter--;
      //batch me set karta hai
      //but we can handle this scenario by this below approach
      setCounter( (prevCounter)=>prevCounter-1)
      setCounter( (prevCounter)=>prevCounter-1)
      setCounter( (prevCounter)=>prevCounter-1)
     
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
