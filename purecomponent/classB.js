import react from "react";
class PureclassB extends react.PureComponent
{
    constructor(props)
    {
        console.log(props);
        super(props);

    }
    render()
    {
        console.log("-------rendering classB component------")
        return(
            <div>
                <h1>Rendering Class B</h1>
                <h2>count is{this.props.count}</h2>

            </div>
        )
    }
}
export default PureclassB;