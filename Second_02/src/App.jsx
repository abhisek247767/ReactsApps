import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const addNumber = () => {
    if (counter < 20) 
    setCounter(counter + 1);
  };
  const subNumber = () => {
    if (counter > -1) 
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Hi React {counter}</h1>
      <button onClick={addNumber}>Add value {counter}</button>
      <button onClick={subNumber}>Remove Value {counter}</button>

    </>
  )
}

export default App
