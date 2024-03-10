import { Component } from "react";
import "../state/count.css"




class Count extends Component{
    constructor(){
        super()
        this.state={
            Count:0,
            isSubscribe : false
        }
    }
    increment =(value)=>{
        console.log("increment")
        this.setState({
            Count:this.state.Count+5
        },()=>{})
    }

    decrement =(value)=>{
        console.log("decrement")
        this.setState({
            Count:this.state.Count-5
        })
    }
    reset =()=>{
        console.log("reset")
        this.setState({
            Count:0
        })
    }

    handleSubscribe=()=>{
        this.setState(
            {
                isSubscribe :!this.state.isSubscribe
            }
        )
    }
    render(){
        return(
            <div>
            <button onClick={this.handleSubscribe}>subscribe
            {/* {
               this.state.isSubscribe ? "Unsubscribe":"subscribe"
            } */}
            </button>
            {
             
             this.state.isSubscribe
             ?
             <>
             <h1>mahendra</h1>
            <h2>{this.state.Count}</h2>
            <button onClick={()=>this.increment(5)}>Increment of 5</button>
            <button onClick={()=>this.decrement(5)}>Decrement of 5</button>
            <button onClick={this.reset}>reset</button>
            </>
            :
            <h2>please Subscribe</h2>
            
            }

            
            </div>
        )
    }
}
export default Count;