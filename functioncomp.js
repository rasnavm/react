function Fcom(props)
{
    let name="rasna";
    function handleclick()
    {
        
        alert(name.toUpperCase());
    }
    return(
        <div>
        <h1>created by {name} {props.lastname}</h1>
        <button onClick={handleclick}> changecase</button>
        </div>
        
    );
}
export default Fcom;