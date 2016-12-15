#redux-demo
``1 npm install ``

``2 node server.js``

``3 打开浏览器 localhost:3000``




<div style="text-align:'center'">redux原理</div> 
<p>1 reducer(在reduxAdd.js中的方法)会初始化一个状态  就是state={a:1}</p>
<p>2 当我们调用其中的方法的时候 也即是在我们的index.js中  
<p>``store.dispatch({type: 'ADD',count: 2});``  </p>
 注意我们首先注入的是 
<p>``import reducer from './reduxAdd'`` </p>
<p>``const store=createStore(reducer);``</p>
所以我们可以对应的使用 store.dipatch({type: 'ADD',count: 2})  也就是我们的reduxAdd.js中暴露出来的方法
</p>
 
 <p>3 为什么我在组件One中改变a的值在组件DecreaseOne中也会重新渲染  这就是redux的亮点之处 其实就是一个全局变量  但是会重新渲染所有组件</p>

