import { Component } from "react";
import "./cricle.css"





class CricleTask extends Component{
    constructor(){
        super()
        this.state={
            Cricle:[]
        }
    }

    AddCricle=()=>{
        this.setState({
       Cricle:[...this.state.Cricle,false]
        })
    }

    Reset=()=>{
        this.setState({
            Cricle:0
        })
       
    }
    render(){
        return(
        
            <>
            <h1>CRICLE</h1>
           
            <button onClick={this.AddCricle}>Click{this.state.Cricle.length}</button>
            <button onClick={this.Reset}>reset</button>
             

            {
                this.state.Cricle.length>0

                ?
            //    <>
                this.state.Cricle.map(flag=><div className="div"></div>)
               
                :
                <h2>No CRICLE</h2>
            
               
            }
               
               </>
        )
    }
}
export default CricleTask