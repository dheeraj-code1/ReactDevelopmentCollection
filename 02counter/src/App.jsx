import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter] = useState(15)
const addValue = function(){
  // console.log(counter);
  counter = counter+1 
  if (counter>20) {
    counter = 20
  }
  setCounter(counter)
}

const removeValue = function(){
  counter=counter-1
  if (counter<0) {
    counter = 0
  }
  setCounter(counter)
}

  return (
    <>
     <h1>Chai aur code | dheerajCodes</h1>
     <h5>Counter: {counter}</h5>
     <button
     onClick={addValue}
     >Add</button>
     <button onClick={removeValue}>remove</button>
    </>
  )
}

export default App
