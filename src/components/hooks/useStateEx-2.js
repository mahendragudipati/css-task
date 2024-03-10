import { useState } from "react"





const UsestateEx2=()=>{
    const[timer,setTimer]=useState(100)
    const handleTimer=()=>{
        setInterval(() => {
            // console.log("log")
            setTimer(timer=>timer-1)
        }, 1000)
    }
    return(
        <>
        <h1>Timer value = {timer}</h1>
        <button onClick={handleTimer}>start time</button>
        
        </>
    )
}
export default UsestateEx2