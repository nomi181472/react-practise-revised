import ReactDOM from "react-dom";
import Parent from "./props/parent";

const App=()=>{
    return (<div>
        
        <h1>hi There</h1>
        <Parent/>
    </div>)
}
ReactDOM.render(
    <App/>,
    document.querySelector("#root")  
)