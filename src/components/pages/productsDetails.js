import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../navbar/navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios';
// import AudioMahi from '../spinners/audio';
import LoadingSpiner from '../spinners/loading';
import "./product.css"
// import CardProduct from '../hooks/useeffect/card'

function Products() {
  const paramsInfo=useParams()
    console.log(paramsInfo.products);
    const [productDetails,setproductDetails]=useState({})

    useEffect(()=>{
      ProductData()
    },[paramsInfo.products])

    async function ProductData(){
      const result = await axios.get (`https://fakestoreapi.com/products/${paramsInfo.products}`)
      if(result.status===200){
         setproductDetails(result.data)
      }
      console.log(result)
    }

    function isEmpty(data){
      return Object.keys(data).length ===0
    }
  
  
  return (
    <div className='div'>
   
      <Navbar/>
      {
        isEmpty(productDetails)
        ?
        // <AudioMahi/>
        <LoadingSpiner/>
        :
        <div className='boxx'>
        <Fragment key={productDetails.id}>
        <h3>{productDetails.category}</h3>
        <img src={productDetails.image} alt='' width={200} height={200}></img>
        <p>Price:{productDetails.price}</p>
        <h3>Rating : {productDetails.rating.rate}</h3>
        <h5>Count : {productDetails.rating.count}</h5>
        </Fragment>
        </div>
      }
     
      {/* <Link to={"/product"}>Product details</Link> */}
   
    {/* <h1 style={{textAlign:"center", color:"blue"}}>This is page Loading</h1> */}
    </div>
  )
}

export default Products
