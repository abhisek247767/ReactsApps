import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0);

  const myObj = {
    username: "hitesh",
    age: 21,
  };

  let newArr=[1,2,3,4];


  return (
    <div>

      <h1 className="bg-red-600 text-green-200 rounded-xl" >
        Hello world!
      </h1>
      <Card btnName="click Me" username="Dani"/>




    </div>
  )
}

export default App
