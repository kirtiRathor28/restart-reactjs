import { useState } from "react"


function App() {
  const [color , setColor] = useState("Green")

  return (

  

    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

     <div className="fixed flex flex-Wrap justify-center bottom-12 inset-x-0 px-2"> 

      <div className="flex flex-Wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("Red")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "Red"}}> Red
        </button>

        <button 
        onClick={() => setColor("Black")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "black"}}> Black
        </button>

        <button onClick={() => setColor("Yellow")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "Yellow"}}> Yellow
        </button>

        <button onClick={() => setColor("Pink")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "Pink"}}> Pink
        </button>

        <button onClick={() => setColor("Blue")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "Blue"}}> Blue
        </button>



      </div>
     </div>
    </div>
  )
}

export default App
