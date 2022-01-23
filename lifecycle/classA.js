import React from "react";
class ClassA extends React.Component
{
    constructor(props)
    {
        console.log('----constructor----');
        super(props);
        this.state={
            count:0,
            value:2,
        }
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('---static getderivedstatefrom props');
        if(props.num%2===0)
        return {count:state.count+1};
        else
        return null;
    }
    shouldComponentUpdate(pervprops,prevstate)
    {
        console.log('---shouldcomponentupdate----')
        if(this.state.value===this.props.num)
        return false;
        else return true;
    }
    render()
    {
        console.log('----render A----');
        return(
        <div><h1>the count is {this.state.count}</h1></div>);
    }
    componentDidMount()
    {
        console.log('---componentDidmount---')

    }
    componentDidUpdate()
    {
        console.log('---updated A---')
    }
    
}
export default ClassA;