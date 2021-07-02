import { useState } from "react";
 
const State: React.FC = () => {
const [name,setName]=useState<string>("")
const [guests,setGuests]=useState<string[]>([] )
const onClick=()=>{
    setName("");
    setGuests([...guests,name])

}
    return ( <div>
        <input value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <button onClick={onClick}>Button</button>
    <ul>
        {guests.map(e=><li key={e}>{e}</li>)}
    </ul>
    </div> );
}
  
export default State;