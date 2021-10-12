// 引入combineReducers用于汇总多个reducer
import {combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import count from './count'
import persons from './person'

// 汇总所有的reducer
const reducers = combineReducers({
  count,
  persons
})

export default reducers