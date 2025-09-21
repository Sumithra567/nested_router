import React from 'react'
import factorial from "./assets/factorial.png"
import forImg from "./assets/FOR.jpeg"
const factorialimg=new URL("./assets/factorial.png",import.meta.url).href

const App = () => {
  return (
    <div>App
      {/* 1st way of importing images in src using import method */}
      <img src={forImg} alt="FOR.jpeg"/>
      <img src={factorial} alt="factorial.png"/>
       
       {/* 2nd way from public folder */}
      <img src="/react.svg" alt="react.svg"/>
      

      {/* 3rd way using url module/require */}
        
      <img src={factorialimg} alt={factorialimg}/>

    
    </div>
  )
}

export default App