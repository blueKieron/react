// 引入createStore 专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'


export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))