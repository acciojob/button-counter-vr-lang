
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const[count,setcount]=useState(0)
  return (
    <div style={{display:"flex"}}>
        Button clicked {count} times
        <div>
        <button onClick={()=>setcount(count+1)}>Click me</button>

        </div>

    </div>
  )
}

export default App
