import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NavBar from "./components/nav"
import Counters from "./components/counters"
class App extends Component {
    
  state={
    counters:[
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},
    ]
}
handleDelete=(counterId)=>{
    const counters=this.state.counters.filter(count=>count.id!=counterId)
    this.setState({counters})
}
handleIncrement=(count)=>{
    console.log("hit",count)
    const counters=[...this.state.counters]
    const index= counters.indexOf(count)
    counters[index]={...count}
    counters[index].value++
    this.setState({counters})
  
}

handleReset=()=>{
    console.log("hit")
    const counters=this.state.counters.map(count=>{
        count.value=0;
        return count

    })
    this.setState({counters})
}

  render() { 
    return (
      <React.Fragment> <NavBar length={this.state.counters.filter(c=>c.value>0).length}/>
       <main className="container">
         <Counters  state={this.state}onReset={this.handleReset} onInc={this.handleIncrement} onDelete={this.handleDelete}/>
       </main>
       </React.Fragment>
      );
  }
}
 
export default App;

 
