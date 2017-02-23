import {Provider} from 'react-redux';
import {Router,Route,hashHistory} from 'react-router';
import {App,One,DecreaseOne,AddImage} from './app';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import reducer from './redux/reducer/index';
import {createStore} from 'redux';
const store=createStore(reducer);
class Entry extends Component{

   render(){
       return (
           <Provider store={store}>

                <Router history={hashHistory}>
                    <Route path='/' component={App}>
                        <Route path='/add' component={One}></Route>
                        <Route path='/decrease' component={DecreaseOne}></Route>
                        <Route path='/add_image' component={AddImage}></Route>
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
