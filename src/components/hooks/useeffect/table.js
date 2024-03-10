import axios from 'axios'
import React, { useEffect, useState } from 'react'

// function Table() {
//     // 
//   return (
//     <div>
//       {
//         product.map((eachObject)=>{

//             return(
//                 <>

//                 {/* <img src={eachObject.image} alt='img' width={250} height={250}></img> */}
//                 </>
//             )
//         })
//       }
//     </div>
//   )
// }

// export default Table

import Table from 'react-bootstrap/Table';

const TableProduct=()=>{
    const [product,setProduct]=useState([])
    useEffect(()=>{
     axios.get("https://fakestoreapi.com/products")
     .then((response)=>{setProduct(response.data)})
    },[])
  return (
    <Table striped bordered hover>
        
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>price</th>
          <th>image</th>
        </tr>
      </thead>
   
        {
            product.map((eachObject)=>{return(
                <>
                <tr>
                <td>{eachObject.id}</td>
                <td>{eachObject.title}</td>
                <td>{eachObject.price}</td>
                <td><img src={eachObject.image} width={100} height={100} alt=''></img></td>
              </tr>
              {/* <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr> */}
         
            </>
            )
            })
        }
       
    </Table>
  );
}

export default TableProduct;
