// 引入createStore 专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware,combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'

// 汇总所有的reducer
const reducers = combineReducers({
  count: countReducer,
  persons: personReducer
})
export default createStore(reducers,applyMiddleware(thunk))