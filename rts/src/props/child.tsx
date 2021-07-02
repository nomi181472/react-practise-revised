export interface ChildProps {
 color:string   
 onClick:()=>void;
}
 
// export const Child = ({color}:ChildProps) => {
//     return (  <h1>
//         hi my color is {color}
//     </h1>);
// }
 export interface ChildProps {
     
 }
  
 export const Child: React.FC<ChildProps> = ({color,onClick,children}) => {
     return (  <div>
         color:{color}
         <button onClick={onClick}></button>
         {children}
     </div>);
 }
  
