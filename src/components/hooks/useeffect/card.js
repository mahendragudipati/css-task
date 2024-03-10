import React, { useState,useEffect } from 'react'
import axios from 'axios'
import "./card.css"
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const CardProduct=()=>{
        const [product,setProduct]=useState([])
        useEffect(()=>{
         axios.get("https://fakestoreapi.com/products")
         .then((response)=>{setProduct(response.data)})
        },[])
        const linkStyle={
          textDecoration:"none",
          // color:"darkblue"
        }
  return (
    <div className="box">
        {
            product.map((eachObject)=>{
                return(
                <>
            <div className='box1'>
            <h5>{eachObject.title}</h5>
            <img src={eachObject.image} alt=''></img>
            <p>Price :{eachObject.price}</p>
            <button>
             <Link to={`/Nellore/${eachObject.id}`} style={linkStyle}>See More Details</Link>
             </button>
            </div> 
      </>
            )})
}
    </div>
  )
}

export default CardProduct;
