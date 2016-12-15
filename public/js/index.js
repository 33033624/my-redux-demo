import React, {Component} from "react";
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducer from './reduxAdd'

const store=createStore(reducer);


/*
* 设定一个组件其中包括两个组件  并且这两个组件都是独立的  而且在与redux结合的是也是独立的
*
* */
class Add extends Component {


    render() {
        return <div>
            <One/>
            {/*
            我们可以知道  我们点击+的时候  第二个组件的属性也会变化  当我们点击-的时候 第一个组件的属性也会变化 由此可知我们的属性是类似于全局的  无论在哪里这个值是实时更新的  类似于一个全局变量  无论是在哪里变化都会store中的装热爱都会变化

            */}

            <DecreaseOne />
        </div>
    }
}


/*
*
* 组件One是实现点击  让store中的a增加的组件
*
* */
class One extends Component {
    addOne() {
        /*
        * reducer中action传递的参数是{type: 'ADD',count: 2}
        *
        * */
        store.dispatch({type: 'ADD',count: 2});
    }


    render() {
        return <div>
            {store.getState().a}
            <button onClick={this.addOne.bind(this)}>+</button>
        </div>
    }
}


/*
* 组件DecreaseOne是实现点击 让store中的a减少的组件
*
* */
class DecreaseOne extends Component {
    constructor(props){
            super(props)
    }
    decreaseOne(){
        /*
         * reducer中action传递的参数是{type:'DECREASE',count:3}
         *
         * */
        store.dispatch({type:'DECREASE',count:3})
    }
    render(){

        return (
            <div>
                {store.getState().a}
                <button onClick={this.decreaseOne.bind(this)}>-</button>
            </div>
        )
    }
}



ReactDOM.render(<Add/>,document.getElementById('root'));

store.subscribe(()=>{
    ReactDOM.render(<Add/>,document.getElementById('root'));

});
