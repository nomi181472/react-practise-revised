import {Child} from "./child";


 
const Parent= () => {
    return (<div>
        <Child  color="red" onClick={()=>{console.log("hello")}}>
            hellow world in last
        </Child>
    </div>  );
}
 
export default Parent;
