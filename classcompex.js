import React from "react";
class Upper2 extends React.Component
{
    constructor(props)
    {
    super(props);
    this.state={
        name:"Jeorge",
    };
    }
    handleclick=()=>
    {
        this.setState({name:this.state.name.toUpperCase()});
    }
    render()
    {
        return(
        <div>
                <h1>hello {this.state.name}</h1>
                <button onClick={this.handleclick}>toUpper</button>
        </div>)
    }
    
}
export default Upper2;