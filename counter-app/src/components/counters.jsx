import React, { Component } from 'react';
import Counter from "./counter";
class Counters extends Component {
     

    render() { 
        return (
        <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
          {this.props.state.counters.map(counter=><Counter onInc={this.props.onInc} onDelete={this.props.onDelete}key={counter.id} counter={counter}/>) }
        </div>);
    }
}
 
export default Counters;