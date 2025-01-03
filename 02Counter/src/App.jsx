import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, Setcounter] = useState(15)
  const Addvalue = () => {
    // Setcounter(Counter + 1)
    if (Counter == 20){
      Setcounter(Counter = 20)
    }
    else{
      Setcounter(Counter+1)
    }
    console.log("clicked", Counter);
  }
   
  const Removevalue = () => {
    // Setcounter(Counter - 1 )
    if (Counter == 0){
      Setcounter(Counter = 0)
    }
    else{
      Setcounter(Counter-1)
    }
    console.log("clicked", Counter);
  }

  return (
    <>
      <h1> lets practice hooks</h1>
      <h2>counter value </h2>
      <button onClick = {Addvalue}>Addvalue{Counter}</button>
      <br></br>
      <br></br>
      <button onClick={Removevalue}>Removevalue {Counter}</button>

    </>
  )
}

export default App
