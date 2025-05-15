
import { useState } from 'react'
import './App.css'


//let counter=24;
// const Increment = ()=>{
//   counter++;
//   console.log(counter)
// }
// const Decrement=()=>{
//  counter--;
//  console.log(counter)
// }-> variable ka value change ho raha hai, par ui me update nahi ho raha hai->ui updatation handle by react


function App() {
  let [counter, setCounter] = useState(20);

  const Increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  }
  const Decrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  }
  return (
    <>
      <h1>The Current Value of Counter is : {counter}</h1>
      <button onClick={Increment}>Increment Counter:{counter}</button>
      <button onClick={Decrement}>Decrement Counter:{counter}</button>
    </>
  )
}

export default App
