import React, {Component} from "react";
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import reducer from './reduxAdd'
import {Router,Route,Link,hashHistory} from 'react-router'
import {Provider} from 'react-redux'
const src = require('./image/dy.jpg');
const src1 = require('./image/dy1.jpg');

const store=createStore(reducer);


/*
* 设定一个组件其中包括两个组件  并且这两个组件都是独立的  而且在与redux结合的是也是独立的
*
* */
class App extends Component {


    render() {
        return <div>

            <Link to='/add'>冬雨1</Link>
            <Link to='/decrease'>冬雨2</Link>
            <div>
                {this.props.children}

            </div>

            {/*
            我们可以知道  我们点击+的时候  第二个组件的属性也会变化  当我们点击-的时候 第一个组件的属性也会变化 由此可知我们的属性是类似于全局的  无论在哪里这个值是实时更新的  类似于一个全局变量  无论是在哪里变化都会store中的装热爱都会变化
            */}

        </div>
    }
}


/*
*
* 组件One是实现点击  让store中的a增加的组件
*
* */
class One extends Component {
    constructor(props){
        super(props);

    }

    addOne() {
        /*
        * reducer中action传递的参数是{type: 'ADD',count: 2}
        *
        * */
        store.dispatch({type: 'ADD',count: 2});

    }


    render() {


        return <div>
            <img src={src}/>
            {'爱冬雨'+store.getState().a}
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
            super(props);

    }
    decreaseOne(){
        /*
         * reducer中action传递的参数是{type:'DECREASE',count:3}
         *
         * */
        store.dispatch({type:'DECREASE',count:3});



    }
    render(){


        return (
            <div>
                <img src={src1}/>
                {'爱冬雨'+store.getState().a}

                <button onClick={this.decreaseOne.bind(this)}>-</button>
            </div>
        )
    }
}



class Entry extends Component{

   render(){
       return (
           <Provider store={store}>

        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <Route path='/add' component={One}></Route>
                <Route path='/decrease' component={DecreaseOne}></Route>
            </Route>

        </Router>

    </Provider>)

   }
}




ReactDOM.render(
    <Entry />,
    document.getElementById('root')
)



store.subscribe(()=>{
    ReactDOM.render(<Entry/>,document.getElementById('root'));

});
