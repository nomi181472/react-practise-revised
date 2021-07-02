import ReactDOM from "react-dom";
import Parent from "./props/parent";
import State from "./states/state";
import UserSearch from "./usersearch/usersearch";

const App=()=>{
    return (<div>
        <h1>hi There</h1>
        <Parent />
        <State />
        <UserSearch />
        </div>)
}
ReactDOM.render(
    <App/>,
    document.querySelector("#root")  
)