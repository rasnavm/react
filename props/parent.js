import React from 'react';
import Func from './child';
class ClassA extends  React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            greet:'Hello',
        }      

    }
    greetme=()=>
    {
        this.setState({greet:this.state.greet='thankyou'});
    }

    render()
    {
        return(
            <div>
                <h1>{this.state.greet}</h1>
                <Func greethandler={this.greetme}></Func>
            </div>
        )
    }
}
export default ClassA;