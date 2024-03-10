import { useState } from "react"





const Controlled =()=>{
    const[username,setUsername]=useState("")
    const[userNameError,setuserError]=useState("")
    // console.log(username)
  

    const usernameHandler=(event)=>{
        // console.log(event.target.value)
        const username=event.target.value
        setUsername(username)
        // console.log("user typing")
    
    if(username.length>5){
        // alert("username must be less than 5 characters")
        setuserError("username must be less than 5 characters")
    }else{
        let userInfo={
        username:username
        }
        console.log(userInfo)
    }
}

   const  HandlerSubmit=()=>{

   }
   
    return(
        <>
        <form onSubmit={HandlerSubmit} >
         <label htmlFor="fname">First name:</label>
         <br />
         <input type="text" id="fname" name="fname" value={username} onChange={usernameHandler}/>
         <br />
         {
             userNameError ?
 
             <p style={{color:"red"}}>{userNameError}</p>:
             null           
         }
         
         <label htmlFor="lname">Password:</label>
         <br />
         <input type="password" id="lname" name="lname"/>
         <br />
         <br />
         <input type="submit" defaultValue="Submit" />
       </form>
       
       </>
    )
}
export default Controlled