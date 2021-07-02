import React, { Component } from 'react';

class Counter extends Component {
    
    
   
    render() { 
        
        return ( <div>  
            
            <ul>
                
                
                
                <span>{this.props.counter.value}</span>
                <button  onClick={()=>this.props.onInc(this.props.counter)} className="btn btn-primary">
                    Increment
                </button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)}className="btn btn-danger btn-sm m-2">Delete</button>
            </ul>
            </div>);

        
        
    }
   
    
}
 
export default Counter;