import { Component } from "react";




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
            <>
            <button onClick={this.handleSubscribe}>Subscribe</button>
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

            
            </>
        )
    }
}
export default Count;