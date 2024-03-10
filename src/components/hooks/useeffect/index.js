// import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Index() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
    document.title=`count ${count}`
    console.log(count);
    // axios.get("https://fakestoreapi.com/products")
    // .then((response)=>{})

    },[count])
  return (
    <div>
      <h1>counter{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>increment</button>
    </div>
  )
}

export default Index
