import React from "react";
import ClassA from "./classA";
class ClassB extends React.Component
{
    constructor(props)
    {
        console.log('---constructor---');
        super(props);
        this.state={
            num:0,
            flag:true,
        }
    }
    handleclick=()=>
    {
        this.setState({num:this.state.num+1});
    }
    unmount=()=>
    {
        console.log('----unmounted-----');
        this.setState({flag:false});
    }
    render()
    {
        console.log('---render B---');
        return(
            <div>
                <h1>The num is {this.state.num}</h1>
                <button onClick={this.handleclick}>increment</button>
                {this.state.flag?<ClassA num={this.state.num}> </ClassA>  :null} 
                 <button onClick={this.unmount}>unmount</button>
            </div> 
        )
    }
}
export default ClassB;