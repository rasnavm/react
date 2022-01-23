
import React from "react";
class Input extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            name:"",
            list:[],
            
    
        }

    }   
    handlechange=(event)=>
    {
        this.setState({name:event.target.value});
        
        
    }
    handleclick=()=>
{
    this.setState({list:this.state.list.concat(this.state.name)});
    this.setState({name:""});
    
}
remove=(index)=>
{
let del=[...this.state.list];
del.splice(index,1);
this.setState({list:del});
}

    render()
     {
        return (
             <div>
                 <h1>list rendering</h1>
                 <input type="text" value={this.state.name} onChange={this.handlechange}></input>  
                 <button onClick={this.handleclick}>add</button> 
                 <ul>{this.state.list.map((name,index)=><li key={index}>{name} <button onClick={()=>this.remove(index)}>remove</button></li>)} </ul>        
            </div>
        );
    }
}
export default Input;