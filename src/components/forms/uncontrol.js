import { useState } from "react"




const UnControl =()=>{
  const usernameRef=useState(null)
  const passwordRef=useState(null)
 const HandlerSubmit=(event)=>{
     event.preventDefault()
     const username=usernameRef.current.value
     const password=passwordRef.current.value
     console.log(username,password);
     if(username.length>5 && password.length>5){
      alert("username and password less than five")
     }else{
       console.log(username,password)
     }
     let userInfo={
      username:username,
      password:password
     }
     console.log(userInfo);
        
  }
  return(
    <>
     <form onSubmit={HandlerSubmit} >
      <label htmlFor="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" ref={usernameRef}/>
      <br />
      <label htmlFor="lname">Password:</label>
      <br />
      <input type="password" id="lname" name="lname" ref={passwordRef} />
      <br />
      <br />
      <input type="submit" defaultValue="Submit" />
    </form>
    
    </>
  )
}
export default UnControl


// const UnControl = () => {
//   const usernameRef = useRef(null);
//   const passwordRef= useRef(null);

//   const submitHandler=(event)=>{
//     event.preventDefault()
//     const username= usernameRef.current.value
//     const password=passwordRef.current.value
//     console.log(username,password);

//     let userInfo={
//       username:username,
//       password:password
//     } 
//     console.log(userInfo);