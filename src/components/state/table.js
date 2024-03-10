import { Component } from "react";
// import { FidgetSpinner } from "react-loader-spinner";
import { DNA } from "react-loader-spinner";


class SpinnerSpin extends Component{
    render(){
        return(
//             <FidgetSpinner
//   visible={true}
//   height="80"
//   width="80"
//   ariaLabel="fidget-spinner-loading"
//   wrapperStyle={{}}
//   wrapperClass="fidget-spinner-wrapper"
//   />)
<DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />)
        
    }
}
export default SpinnerSpin