import React from 'react'
import Navbar from '../navbar/navbar'
// import CardProduct from '../hooks/useeffect/card'
// import LoadingSpiner from '../spinners/loading';
import UncontrolledExample from '../styles/bootstrap/carousal';



function Home() {
  return (
    <div>
      <Navbar />
      {/* {true ? <CardProduct /> : <LoadingSpiner/>} */}
      <UncontrolledExample/>
      {/* <CardProduct/> */}
    </div>
  );
}

export default Home;
