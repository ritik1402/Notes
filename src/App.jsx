import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <div style={{
  position: "relative",
  minHeight: "100vh",
  backgroundImage: `url(/Images/blob-scatter-haikei.svg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  objectFit: "cover",
}}>
  <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Black overlay with 50% opacity
    zIndex: 0
  }}></div>

  <div style={{ position: "relative", zIndex: 2 }}>

      <Navbar/>
  </div>
    </div>
    
     
    </>
  )
}

export default App
