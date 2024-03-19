import React, { useState, useEffect } from "react";
import axios from "axios";
import "./card.css";
import { Link } from "react-router-dom";
import LoadingSpiner from "../../spinners/loading";
// import "../spinners/loading.css"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const CardProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response)=>{
      // axios.get("https://dummyjson.com/products").then((response)=>{
      setProduct(response.data);
    });
  }, []);
  const linkStyle = {
    textDecoration: "none",
    // color:"darkblue"
  };
  return (
    <>
      <div className="box">
        {product.length > 0 ? (
          product.map((eachObject) => {
            return (
              <>
                <div className="box1">
                  <h5>{eachObject.category}</h5>
                  <Link to={`/category/${eachObject.id}`}>
                    <img src={eachObject.image} alt=""></img>
                  </Link>
                  <p>Price :{eachObject.price}</p>
                  <button>
                    <Link to={`/:category/${eachObject.id}`} style={linkStyle}>
                    <b>See More Details</b>
                    </Link>
                  </button>
                </div>
              </>
            );
          })
        ) : (
          <LoadingSpiner />
        )}
      </div>
    </>
  );
};

export default CardProduct;
