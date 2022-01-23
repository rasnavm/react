import React from "react";
function F1(props)
{
    console.log("------ Rendering f1------");
    return(
        <div>
            <h2>functional component in purecomponent{props.count}</h2>
            
           
        </div>)
    
}
export default React.memo(F1);