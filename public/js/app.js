import React, {Component} from "react";
import {createStore} from 'redux'
import reducer from './redux/reducer/index'
import ReactDOM from 'react-dom';
import {Router,Route,Link,hashHistory} from 'react-router'
import {Provider,connect} from 'react-redux'
const src = require('./image/dy.jpg');
const src1 = require('./image/dy1.jpg');
const store=createStore(reducer);


/*
* 设定一个组件其中包括两个组件  并且这两个组件都是独立的  而且在与redux结合的是也是独立的
*
* */
class AppView extends Component {
  constructor(props){
    super(props);
    this.state={
      num:store.getState().count.a
    }
  }
  componentDidMount(){
    this.props.dispatch({type: 'ADD',count: 2});
    this.setState({
        num:store.getState().count.a
    })
    console.log(this.props,'======>App componentDidMount');
  }
    render() {
        return  (<div>

                    <Link to='/add'>冬雨1</Link>
                    <Link to='/decrease'>冬雨2</Link>
                    <Link to='/add_image'>选择图片</Link>
                    <div>
                        {this.props.children}
                    </div>

                    {/*
                    我们可以知道  我们点击+的时候  第二个组件的属性也会变化  当我们点击-的时候 第一个组件的属性也会变化 由此可知我们的属性是类似于全局的  无论在哪里这个值是实时更新的  类似于一个全局变量  无论是在哪里变化都会store中的装热爱都会变化
                    */}

                  </div>)
    }
}

export const App = connect(
)(AppView);
/*
*
* 组件One是实现点击  让store中的a增加的组件
*
* */
export class One extends Component {
    constructor(props){
        super(props);
        this.state={
          num:store.getState().count.a
        }
      }

    addOne() {
        /*
        * reducer中action传递的参数是{type: 'ADD',count: 2}
        *
        * */
        console.log('addOne');
        store.dispatch({type: 'ADD',count: 2});

        console.log(store.getState(),'=====>store.getState');
        this.setState({
          num:store.getState().count.a
        })

      }
    render() {
      let num = this.state.num;

      return (<div>
            <img src={src}/>
            {'冬雨'+num}
            <button onClick={this.addOne.bind(this)}>+</button>
        </div>)
    }
}

/*
* 组件DecreaseOne是实现点击 让store中的a减少的组件
*
* */
export class DecreaseOne extends Component {
    constructor(props){
            super(props);
            this.state ={
              num:store.getState().count.a
            }
          }
    decreaseOne(){
        /*
         * reducer中action传递的参数是{type:'DECREASE',count:3}
         *
         * */
        store.dispatch({type:'DECREASE',count:3});
        console.log(store.getState().count.a,'decreaseOne======》store.getState().count.a');
        this.setState({
        num:store.getState().count.a
        })
      }
    render(){
      let {num} = this.state;
      return (
            <div>
                <img src={src1}/>
                {'冬雨'+num}
                <button onClick={this.decreaseOne.bind(this)}>-</button>
            </div>
        )
    }
}

export class AddImage extends Component{
    constructor(props){
      super(props)
    }
    componentDidMount(){
          console.log('进步  add_image组件');
          if(localStorage.saveImage){
            console.log('已经有保存的图片啦');
                var src = localStorage.saveImage;
                var img = new Image();
                    console.log(src);
                    img.src = src;
                    img.style.width = "100%";
                    img.style.height= "100%";
                    document.getElementById('click').style.width="200px";
                    document.getElementById('click').style.height="200px";
                    document.getElementById('click').innerHTML = '';
                    document.getElementById('click').appendChild(img);
                  }
                  else{
                    document.getElementById('photo').addEventListener('change',function(e){

                             var files = this.files;
                             var img = new Image();
                             var reader = new FileReader();
                             reader.readAsDataURL(files[0]);
                             reader.onload = function(e){
                                 var mb = (e.total/1024)/1024;
                                 if(mb>= 2){
                                     alert('文件大小大于2M');
                                     return;
                                 }
                                 console.log(this.result);
                                 img.src = this.result;
                                 localStorage.setItem('saveImage',this.result);
                                 img.style.width = "100%";
                                 img.style.height= "100%";
                                 document.getElementById('click').style.width="200px";
                                 document.getElementById('click').style.height="200px";
                                 document.getElementById('click').innerHTML = '';
                                 document.getElementById('click').appendChild(img);
                             }
                    });



                  }


    }
    render(){
      return(

        <div>
            <input type="file" id="photo"/>
            <div id="click" style={{width: '200px', height: '200px',border: '1px solid #000'}}></div>
        </div>



      )



    }




}
