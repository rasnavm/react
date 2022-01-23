import React from "react";
import PureclassB from "./classB";
import F1 from "./f1";
class Pureclass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            count:2,
        }
    }
    handleclick=()=>
    {
        
        this.setState({count:this.state.count+1});
        
    }
    componentDidMount()
    {
        console.log('---mounted-----')
        setInterval(()=>this.setState({count:this.state.count}),2000);
        
    }

    
    render()
    {
        console.log('class A rendering');
        return(
            <div>
                <h1>class A rendering {this.state.count}</h1>
                <button onClick={this.handleclick}>increment</button>
                <PureclassB count={this.state.count}></PureclassB>
                <F1 count={this.state.count}></F1>
            </div>
        )
    }
}
export default Pureclass;