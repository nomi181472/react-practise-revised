import { useState } from "react";

export interface UserSearchProps {
    
}
 const users=[
    {name:"noman",age:20},
    {name:"usman",age:30},
    {name:"nsa",age:40},
    {name:"rehnman",age:50},
 ]

const UserSearch: React.FC<UserSearchProps> = () => {
    const [name,setName]=useState<string>("");
    const [showuser,setShowUser]=useState<{name:string,age:number}>()
    const onClick=()=>{
       const result= users.find(e=>{if (e.name===name) return e})
       setShowUser(result)
         }
    return ( <div>
        <input value={name} onChange={e=>{setName(e.target.value)}}/>
        <button onClick={onClick}>click</button>
        {showuser&& showuser?.name}
        {showuser&& showuser?.age}
    </div> );
}
 
export default UserSearch;