import React, {Component} from "react";
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducer from './reduxAdd'

const store=createStore(reducer);

class Add extends Component {
    addOne() {
        store.dispatch({type: 'ADD',count: 2});
    }
    render() {
        return <div>
            <One count={store.getState().a} onAdd={this.addOne} />
        </div>
    }
}

class One extends Component {
    addOne() {
        this.props.onAdd();
    }

    render() {
        return <div>
            {this.props.count}
            <button onClick={this.addOne.bind(this)}>+</button>
        </div>
    }
}



ReactDOM.render(<Add/>,document.getElementById('root'));

store.subscribe(()=>{
    ReactDOM.render(<Add/>,document.getElementById('root'));

});
