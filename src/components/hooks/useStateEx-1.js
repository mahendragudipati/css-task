import { useState } from "react"




const UseStateEx1=()=>{
  const[counter,setCounter]=useState(0)


  const handleChange=(value)=>{
    switch (value){
        case "increment":
            setCounter(counter+1)
            break
        case "decrement":
            setCounter(counter-1) 
            break
        default :
            break   
    }
//     // setCounter((count)=>{return count+1})
//     // setCounter(count=>count+1)
//     setCounter(counter+1)
//     setCounter(counter+1)
//   }
//   const handleDecrement=()=>{
//     setCounter(counter-1)
//   }
//   const handleReset=()=>{
//     setCounter(counter,0)
  }
    return(
        <>
        <h1>Use State example</h1>
        <h3>Current counter value {counter}</h3>
        <button onClick={()=>handleChange("increment")}>Increment</button>
        <button onClick={()=>handleChange("decrement")}>Decrement</button> 
        {/* <button onClick={handleReset}>Reset</button>  */}
        </>
    )
} 
export default UseStateEx1